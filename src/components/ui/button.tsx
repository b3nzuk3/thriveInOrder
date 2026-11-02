import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0", {
  variants: {
    variant: { default: "bg-primary text-primary-foreground hover:bg-[#28553E]", outline: "border border-primary bg-transparent text-primary hover:bg-secondary", secondary: "bg-secondary text-secondary-foreground hover:bg-[#CCD79A]", ghost: "text-primary hover:bg-muted" },
    size: { default: "h-13 px-7", lg: "h-15 px-9 text-base", sm: "h-10 px-5", icon: "size-11" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
export { buttonVariants };
