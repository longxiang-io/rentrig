"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Logo } from "@/components/logo"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function SiteNav() {
  return (
    <nav className="bg-background h-16 border-b">
      <Container className="flex h-full items-center gap-8">
        <Logo />
        <NavigationMenu className="hidden md:flex" aria-label="Primary">
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className={cn(
                    "h-auto rounded-none bg-transparent p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-active:bg-transparent"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex-1" />
        <Button
          nativeButton={false}
          render={<Link href="/signin" />}
          className="hidden px-4 md:inline-flex"
        >
          Sign in
        </Button>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                nativeButton={false}
                render={<Link href="/signin" />}
                className="w-full"
              >
                Sign in
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  )
}
