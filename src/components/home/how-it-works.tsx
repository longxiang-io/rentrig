import { Container } from "@/components/container"
import { Card } from "@/components/ui/card"
import { steps } from "@/data/steps"

export function HowItWorks() {
  return (
    <section className="bg-muted py-14 md:py-20">
      <Container>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="gap-0 rounded-xl p-8 py-8 shadow-none ring-0"
            >
              <span className="bg-primary text-primary-foreground mb-4 inline-flex size-9 items-center justify-center rounded-full text-sm font-semibold">
                {step.number}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-1.5 text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
