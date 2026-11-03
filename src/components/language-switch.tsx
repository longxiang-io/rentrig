"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function LanguageSwitch() {
  return (
    <ToggleGroup
      defaultValue={["en"]}
      aria-label="Language"
      className="gap-1"
    >
      <ToggleGroupItem
        value="en"
        className="h-auto min-w-0 rounded-sm px-1 text-sm font-medium text-muted-foreground hover:bg-transparent aria-pressed:bg-transparent aria-pressed:font-semibold aria-pressed:text-foreground"
      >
        EN
      </ToggleGroupItem>
      <span aria-hidden className="text-sm text-muted-foreground">
        /
      </span>
      <ToggleGroupItem
        value="de"
        className="h-auto min-w-0 rounded-sm px-1 text-sm font-medium text-muted-foreground hover:bg-transparent aria-pressed:bg-transparent aria-pressed:font-semibold aria-pressed:text-foreground"
      >
        DE
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
