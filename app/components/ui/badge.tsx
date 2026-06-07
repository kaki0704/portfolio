import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring/70 focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow hover:bg-[rgb(var(--primary))]/85",
        secondary:
          "border-[rgb(var(--border))]/70 bg-[rgb(var(--secondary))]/70 text-[rgb(var(--secondary-foreground))] hover:bg-[rgb(var(--secondary))]",
        destructive:
          "border-transparent bg-[rgb(var(--destructive))] text-[rgb(var(--destructive-foreground))] shadow hover:bg-[rgb(var(--destructive))]/80",
        outline: "border-[rgb(var(--border))]/80 text-[rgb(var(--foreground))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
