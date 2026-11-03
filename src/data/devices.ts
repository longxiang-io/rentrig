import type { Category } from "@/data/categories"

export type DeviceAvailability = "available" | "booked"

export type Device = {
  id: string
  slug: string
  name: string
  city: string
  pricePerDay: number
  availability: DeviceAvailability
  categorySlug: Category["slug"]
}

export const devices: Device[] = [
  {
    id: "1",
    slug: "mini-excavator-1-8t",
    name: "Mini excavator 1.8 t",
    city: "Berlin",
    pricePerDay: 189,
    availability: "available",
    categorySlug: "excavators",
  },
  {
    id: "2",
    slug: "cordless-hammer-drill",
    name: "Cordless hammer drill",
    city: "München",
    pricePerDay: 19,
    availability: "available",
    categorySlug: "power-tools",
  },
  {
    id: "3",
    slug: "frame-scaffold-50m2",
    name: "Frame scaffold 50 m²",
    city: "Hamburg",
    pricePerDay: 79,
    availability: "booked",
    categorySlug: "scaffolding",
  },
  {
    id: "4",
    slug: "diesel-generator-20kva",
    name: "Diesel generator 20 kVA",
    city: "Köln",
    pricePerDay: 95,
    availability: "available",
    categorySlug: "generators",
  },
  {
    id: "5",
    slug: "pa-speaker-set-2x1000w",
    name: "PA speaker set 2×1000 W",
    city: "Berlin",
    pricePerDay: 65,
    availability: "available",
    categorySlug: "event-av",
  },
  {
    id: "6",
    slug: "led-stage-light-kit",
    name: "LED stage light kit",
    city: "Hamburg",
    pricePerDay: 45,
    availability: "booked",
    categorySlug: "lighting",
  },
]
