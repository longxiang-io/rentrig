import {
  Construction,
  Drill,
  Lightbulb,
  Shovel,
  Speaker,
  Zap,
  type LucideIcon,
} from "lucide-react"

import type { CategoryIconName } from "@/data/categories"
import { cn } from "@/lib/utils"

const icons: Record<CategoryIconName, LucideIcon> = {
  shovel: Shovel,
  drill: Drill,
  construction: Construction,
  zap: Zap,
  speaker: Speaker,
  lightbulb: Lightbulb,
}

export function CategoryIcon({
  name,
  className,
}: {
  name: CategoryIconName
  className?: string
}) {
  const Icon = icons[name]
  return <Icon className={cn(className)} aria-hidden />
}
