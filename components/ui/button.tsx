import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base ring-offset-white transition-colors font-semibold ",
  {
    variants: {
      variant: {
        default: "bg-white text-primary hover:bg-blue-hover hover:text-white",
        // destructive:
        //   "bg-blue text-primary hover:bg-blue-hover",
        primary:"bg-primary text-white",
        outline: "border border-blue bg-transparent text-accent hover:bg-blue hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        // xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        md: "h-[48] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }


