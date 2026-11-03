import Link from "next/link"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { mapPins } from "@/data/map-pins"

export function MapTeaser() {
  return (
    <section className="py-14 md:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Find gear near you
          </h2>
          <p className="text-muted-foreground mb-6">
            Browse providers on an interactive map.
          </p>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/map" />}
            className="px-4"
          >
            Explore on map →
          </Button>
        </div>
        <div
          aria-hidden
          className="relative aspect-[16/10] overflow-hidden rounded-2xl border bg-[#eef2f1] [background-image:repeating-linear-gradient(0deg,transparent_0_39px,#dfe6e4_39px_40px),repeating-linear-gradient(90deg,transparent_0_39px,#dfe6e4_39px_40px)]"
        >
          {mapPins.map((pin) => (
            <span
              key={pin.id}
              className="border-background bg-primary absolute size-[18px] -rotate-45 rounded-[50%_50%_50%_0] border-[3px] shadow-[0_2px_6px_rgba(0,0,0,.2)]"
              style={{ left: pin.left, top: pin.top }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
