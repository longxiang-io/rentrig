import { FeaturedEquipment } from "@/components/home/featured-equipment"
import { HeroSearch } from "@/components/home/hero-search"
import { HowItWorks } from "@/components/home/how-it-works"
import { MapTeaser } from "@/components/home/map-teaser"
import { PopularCategories } from "@/components/home/popular-categories"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSearch />
      <PopularCategories />
      <FeaturedEquipment />
      <HowItWorks />
      <MapTeaser />
    </main>
  )
}
