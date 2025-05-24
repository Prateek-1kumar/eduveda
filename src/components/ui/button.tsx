import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: 
          "relative overflow-hidden text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-white/10",
        gradientOutline:
          "relative overflow-hidden bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-blue-100",
      },
      gradientType: {
        primary: "before:bg-gradient-to-r before:from-blue-600 before:to-indigo-600 before:hover:opacity-90",
        secondary: "before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 before:hover:opacity-90",
        success: "before:bg-gradient-to-r before:from-emerald-600 before:to-teal-600 before:hover:opacity-90",
        warning: "before:bg-gradient-to-r before:from-amber-500 before:to-orange-500 before:hover:opacity-90",
        danger: "before:bg-gradient-to-r before:from-red-600 before:to-rose-600 before:hover:opacity-90",
        none: "",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      gradientType: "none",
    },
    compoundVariants: [
      {
        variant: "gradient",
        className: "before:absolute before:inset-0 before:content-[''] before:z-0 [&>*]:relative [&>*]:z-10",
      },
      {
        variant: "gradientOutline",
        className: "before:absolute before:inset-0 before:content-[''] before:z-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity [&>*]:relative [&>*]:z-10 text-gray-700 hover:text-white transition-colors",
      },
    ],
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, gradientType, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, gradientType, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
