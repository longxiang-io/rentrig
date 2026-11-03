import Link from "next/link"

import { Container } from "@/components/container"
import { LanguageSwitch } from "@/components/language-switch"
import { Logo } from "@/components/logo"
import { footerColumns } from "@/data/navigation"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 text-sm text-muted-foreground">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3">Open-source equipment rental.</p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {column.title}
              </h3>
              <ul className="space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t pt-6 sm:flex-row sm:items-center">
          <p>© 2026 RentRig · Design mockup</p>
          <LanguageSwitch />
        </div>
      </Container>
    </footer>
  )
}
