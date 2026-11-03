export type CategoryIconName =
  | "shovel"
  | "drill"
  | "construction"
  | "zap"
  | "speaker"
  | "lightbulb"

export type Category = {
  slug: string
  name: string
  icon: CategoryIconName
}

export const categories: Category[] = [
  { slug: "excavators", name: "Excavators", icon: "shovel" },
  { slug: "power-tools", name: "Power tools", icon: "drill" },
  { slug: "scaffolding", name: "Scaffolding", icon: "construction" },
  { slug: "generators", name: "Generators", icon: "zap" },
  { slug: "event-av", name: "Event & AV", icon: "speaker" },
  { slug: "lighting", name: "Lighting", icon: "lightbulb" },
]
