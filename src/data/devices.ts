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
  image: string
}

export const devices: Device[] = [
  {
    id: "1",
    slug: "mini-excavator-1-8t",
    image: "/images/products/mini-excavator-1-8t.webp",
    name: "Mini excavator 1.8 t",
    city: "Berlin",
    pricePerDay: 189,
    availability: "available",
    categorySlug: "excavators",
  },
  {
    id: "2",
    slug: "cordless-hammer-drill",
    image: "/images/products/cordless-hammer-drill.webp",
    name: "Cordless hammer drill",
    city: "München",
    pricePerDay: 19,
    availability: "available",
    categorySlug: "power-tools",
  },
  {
    id: "3",
    slug: "frame-scaffold-50m2",
    image: "/images/products/frame-scaffold-50m2.webp",
    name: "Frame scaffold 50 m²",
    city: "Hamburg",
    pricePerDay: 79,
    availability: "booked",
    categorySlug: "scaffolding",
  },
  {
    id: "4",
    slug: "diesel-generator-20kva",
    image: "/images/products/diesel-generator-20kva.webp",
    name: "Diesel generator 20 kVA",
    city: "Köln",
    pricePerDay: 95,
    availability: "available",
    categorySlug: "generators",
  },
  {
    id: "5",
    slug: "pa-speaker-set-2x1000w",
    image: "/images/products/pa-speaker-set-2x1000w.webp",
    name: "PA speaker set 2×1000 W",
    city: "Berlin",
    pricePerDay: 65,
    availability: "available",
    categorySlug: "event-av",
  },
  {
    id: "6",
    slug: "led-stage-light-kit",
    image: "/images/products/led-stage-light-kit.webp",
    name: "LED stage light kit",
    city: "Hamburg",
    pricePerDay: 45,
    availability: "booked",
    categorySlug: "lighting",
  },
]
