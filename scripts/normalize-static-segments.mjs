import { copyFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

// Next 16.4's Windows export collects platform-relative segment paths, while
// its browser URL encoder replaces only forward slashes with dots. Supply the
// dot-separated filenames requested by the router, retaining the original files.
// On exports that already contain the correct flat filenames this is a no-op.
export function normalizeStaticSegments(outputDirectory) {
  let count = 0;
  function flatten(directory, parent, parts) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const source = path.join(directory, entry.name);
      const nextParts = [...parts, entry.name];
      if (entry.isDirectory()) flatten(source, parent, nextParts);
      else if (entry.isFile() && entry.name.endsWith(".txt")) {
        const target = path.join(parent, nextParts.join("."));
        if (existsSync(target)) {
          if (!readFileSync(source).equals(readFileSync(target))) throw new Error(`Conflicting static segment: ${target}`);
        } else {
          copyFileSync(source, target);
          count++;
        }
      }
    }
  }
  function visit(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const child = path.join(directory, entry.name);
      if (entry.name.startsWith("__next.")) flatten(child, directory, [entry.name]);
      else visit(child);
    }
  }
  visit(path.resolve(outputDirectory));
  return count;
}
