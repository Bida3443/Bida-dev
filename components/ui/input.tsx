import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-border-blue-600",
        className
      )}
      {...props}
    />
  )
}

export { Input }
