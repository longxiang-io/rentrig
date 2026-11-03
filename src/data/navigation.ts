export type NavLink = {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: "/devices", label: "Devices" },
  { href: "/orders", label: "Orders" },
  { href: "/admin", label: "Admin" },
]

export type FooterColumn = {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { href: "/devices", label: "Devices" },
      { href: "/orders", label: "Orders" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/github", label: "GitHub" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
]
