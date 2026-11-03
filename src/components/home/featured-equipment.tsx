import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { devices } from "@/data/devices";

export function FeaturedEquipment() {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
          Featured equipment
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((device) => {
            return (
              <Link
                key={device.id}
                href={`/devices/${device.slug}`}
                className="block"
              >
                <Card className="gap-0 overflow-hidden border py-0 shadow-sm ring-0">
                  <div className="relative aspect-[4/3] bg-[#ECEFF7]">
                    <Image
                      src={device.image}
                      alt={device.name}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="min-w-0 flex-1 text-base font-semibold">
                        {device.name}
                      </h3>
                      {device.availability === "available" ? (
                        <Badge className="bg-success-bg text-success border-transparent font-semibold">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="font-semibold">
                          Booked
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1 mb-3 flex items-center gap-1 text-sm">
                      <MapPin className="size-3.5" aria-hidden />
                      {device.city}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground text-xl font-bold">
                        €{device.pricePerDay}
                      </span>{" "}
                      / day
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
