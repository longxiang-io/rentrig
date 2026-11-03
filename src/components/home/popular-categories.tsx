import Link from "next/link"

import { CategoryIcon } from "@/components/category-icon"
import { Container } from "@/components/container"
import { Card } from "@/components/ui/card"
import { categories } from "@/data/categories"

export function PopularCategories() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
          Popular categories
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/devices?category=${category.slug}`}>
              <Card className="hover:border-primary items-center gap-3 border p-6 py-6 text-center shadow-none ring-0 transition-colors">
                <CategoryIcon
                  name={category.icon}
                  className="text-primary size-7"
                />
                <span className="text-sm font-medium">{category.name}</span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
