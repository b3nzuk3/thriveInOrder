import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { normalizeStaticSegments } from "./normalize-static-segments.mjs";

const next = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const result = spawnSync(process.execPath, [next, "build"], { stdio: "inherit", windowsHide: true });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
const aliases = normalizeStaticSegments("out");
if (aliases) console.log(`Normalized ${aliases} static segment paths for portable hosting.`);
