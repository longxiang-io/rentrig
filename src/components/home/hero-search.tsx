"use client"

import * as React from "react"
import { format, isSameMonth } from "date-fns"
import Image from "next/image"
import { type DateRange } from "react-day-picker"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const defaultRange: DateRange = {
  from: new Date(2026, 5, 12),
  to: new Date(2026, 5, 14),
}

function formatDateRange(range: DateRange | undefined) {
  if (!range?.from) {
    return "Pick dates"
  }
  if (!range.to) {
    return format(range.from, "d MMM")
  }
  if (isSameMonth(range.from, range.to)) {
    return `${format(range.from, "d")} – ${format(range.to, "d MMM")}`
  }
  return `${format(range.from, "d MMM")} – ${format(range.to, "d MMM")}`
}

export function HeroSearch() {
  const [dates, setDates] = React.useState<DateRange | undefined>(defaultRange)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <header className="relative isolate overflow-hidden py-14 md:py-24">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        unoptimized
        className="-z-20 object-cover object-right"
      />
      <div
        aria-hidden="true"
        className="from-background/90 via-background/40 absolute inset-0 -z-10 bg-gradient-to-r to-transparent"
      />
      <Container>
        <h1 className="max-w-[720px] text-4xl font-bold tracking-tight leading-[1.1] md:text-[56px]">
          Rent the right equipment, by the day.
        </h1>
        <p className="text-muted-foreground mt-5 mb-10 max-w-xl text-lg">
          Construction machinery, tools and event gear from local providers
          across Germany.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid max-w-[960px] gap-2 rounded-xl border bg-background p-2 shadow-[0_4px_16px_rgba(15,23,42,.06)] md:grid-cols-[2fr_1.2fr_1.4fr_auto]"
        >
          <div className="focus-within:border-ring focus-within:ring-ring/50 rounded-lg border px-3 py-2 focus-within:ring-3">
            <Label
              htmlFor="equipment"
              className="text-muted-foreground text-xs font-medium"
            >
              Equipment
            </Label>
            <Input
              id="equipment"
              name="equipment"
              placeholder="e.g. mini excavator"
              className="h-auto rounded-none border-0 px-0 py-0.5 shadow-none focus-visible:border-transparent focus-visible:ring-0 md:text-sm"
            />
          </div>
          <div className="focus-within:border-ring focus-within:ring-ring/50 rounded-lg border px-3 py-2 focus-within:ring-3">
            <Label
              htmlFor="city"
              className="text-muted-foreground text-xs font-medium"
            >
              City
            </Label>
            <Input
              id="city"
              name="city"
              defaultValue="Berlin"
              className="h-auto rounded-none border-0 px-0 py-0.5 shadow-none focus-visible:border-transparent focus-visible:ring-0 md:text-sm"
            />
          </div>
          <div className="focus-within:border-ring focus-within:ring-ring/50 rounded-lg border px-3 py-2 focus-within:ring-3">
            <Label
              htmlFor="dates"
              className="text-muted-foreground text-xs font-medium"
            >
              Dates
            </Label>
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    id="dates"
                    variant="outline"
                    className="h-auto w-full justify-start rounded-none border-0 px-0 py-0.5 font-normal shadow-none hover:bg-transparent"
                  />
                }
              >
                {formatDateRange(dates)}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={dates}
                  onSelect={setDates}
                  defaultMonth={dates?.from}
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button
            type="submit"
            className="h-10 w-full px-6 md:h-full md:min-h-10 md:w-auto"
          >
            Search
          </Button>
        </form>
      </Container>
    </header>
  )
}
