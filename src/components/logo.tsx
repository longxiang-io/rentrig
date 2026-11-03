import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 text-xl font-bold", className)}
    >
      <span className="bg-primary size-7 rounded-lg" aria-hidden />
      RentRig
    </Link>
  )
}
