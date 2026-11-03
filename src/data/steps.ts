export type Step = {
  number: number
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Search",
    description: "Find equipment by name, city and dates.",
  },
  {
    number: 2,
    title: "Book",
    description: "Pick your days and confirm in a few clicks.",
  },
  {
    number: 3,
    title: "Pick up & return",
    description: "Collect at the depot, return when done.",
  },
]
