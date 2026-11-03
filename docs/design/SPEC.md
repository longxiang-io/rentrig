# RentRig Homepage: Design Spec (mockup, sample data)
Files: `index.html` (one responsive file, breakpoint at 768px), `desktop.png` (1440px), `mobile.png` (390px).

## Palette
| Name | Hex | shadcn var | HSL |
|---|---|---|---|
| Background | #FFFFFF | --background | 0 0% 100% |
| Foreground (slate-900) | #0F172A | --foreground | 222 47% 11% |
| Primary (petrol teal) | #0D6E6E | --primary / --ring | 180 79% 24% |
| Primary FG | #FFFFFF | --primary-foreground | 0 0% 100% |
| Muted | #F4F5F7 | --muted / --secondary | 220 14% 96% |
| Muted FG (slate-500) | #64748B | --muted-foreground | 215 16% 47% |
| Border | #E2E8F0 | --border / --input | 214 32% 91% |
| Success | #15803D on #DCFCE7 | --success / --success-bg (custom) | 142 72% 29% / 141 84% 93% |

```css
/* globals.css */
@layer base { :root {
  --background:0 0% 100%; --foreground:222 47% 11%;
  --primary:180 79% 24%; --primary-foreground:0 0% 100%;
  --secondary:220 14% 96%; --secondary-foreground:222 47% 11%;
  --muted:220 14% 96%; --muted-foreground:215 16% 47%;
  --border:214 32% 91%; --input:214 32% 91%; --ring:180 79% 24%;
  --success:142 72% 29%; --success-bg:141 84% 93%;
  --radius:0.75rem; } }
```
```ts
// tailwind.config.ts (extend)
colors: { success: { DEFAULT:"hsl(var(--success))", bg:"hsl(var(--success-bg))" } },
fontFamily: { sans: ["var(--font-inter)", ...fontFamily.sans] },
container: { center:true, padding:"1.5rem", screens:{ "2xl":"1200px" } },
```
Load Inter with `next/font/google` (`variable: "--font-inter"`).

## Typography (Inter)
- H1: `text-4xl md:text-[56px] font-bold tracking-tight leading-[1.1]`
- Lead text: `text-lg text-muted-foreground max-w-xl`
- H2: `text-2xl md:text-3xl font-semibold tracking-tight mb-8`
- Card title: `text-base font-semibold`. Price: `text-xl font-bold` + `text-sm text-muted-foreground` for "/ day"
- Nav links: `text-sm font-medium text-muted-foreground hover:text-foreground`
- Badge, field labels: `text-xs font-medium` (badge `font-semibold`)

## Layout and spacing
- Container: `max-w-[1200px] mx-auto px-6`
- Section padding: `py-14 md:py-20`. Hero: `py-14 md:py-24`, `bg-gradient-to-b from-background to-muted`
- Grids:
  - Categories: `grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4`
  - Equipment: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
  - Steps: `md:grid-cols-3 gap-6`
  - Map: `lg:grid-cols-[1fr_1.6fr] gap-12`
  - Footer: `grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8`
- Radius: cards and tiles `rounded-xl`, inputs and buttons `rounded-lg`, badges `rounded-full`, map `rounded-2xl`
- Shadows: cards `shadow-sm`; search bar `shadow-[0_4px_16px_rgba(15,23,42,.06)]`. Borders do most of the separation work.

## Sections
1. **Nav**: `h-16 border-b`, logo (`size-7 rounded-lg bg-primary` square + "RentRig" `text-xl font-bold`), shadcn `NavigationMenu` (Devices, Orders, Admin), `Button` "Sign in" on the right. Mobile (`md:hidden`): hamburger `Button variant="ghost" size="icon"` opens a `Sheet side="right"` with the links and Sign in.
2. **Hero + search**: `form` in `rounded-xl border bg-background p-2 grid gap-2 md:grid-cols-[2fr_1.2fr_1.4fr_auto]`. Fields: `Input` (equipment), `Input` or `Select`/Combobox (city), `Popover` + `Calendar mode="range"` triggered by an outline `Button` (dates), primary `Button` "Search". Each field has a small `Label`. Mobile: fields stack, and Search is full width.
3. **Popular categories**: 6 `Card`/link tiles `p-6 text-center hover:border-primary transition-colors`, lucide icon `size-7 text-primary` (Shovel/Drill/Construction/Zap/Speaker/Lightbulb).
4. **Featured equipment**: `Card` with `overflow-hidden`; image area `aspect-[4/3] bg-muted` (use `next/image` later); `CardContent p-5`; title + `Badge` on one row (`justify-between`). Available: `bg-success-bg text-success`. Booked: `variant="secondary"`. City with a MapPin icon `text-sm text-muted-foreground`; price row.
5. **How it works**: section `bg-muted`; 3 white cards `p-8 rounded-xl`; number badge `size-9 rounded-full bg-primary text-primary-foreground`.
6. **Map teaser**: text + `Button variant="outline"` "Explore on map →"; placeholder panel `aspect-[16/10] rounded-2xl border` with a grid background and pins. Swap for `react-leaflet` later, imported with `dynamic(() => import(...), { ssr:false })`.
7. **Footer**: `border-t py-12 text-sm text-muted-foreground`; columns Product, Company, Legal (include **Impressum**, which is expected in DE); bottom row `border-t pt-6 flex justify-between` with © and an EN/DE switch (`ToggleGroup` or `DropdownMenu`, wired to next-intl later).

## Accessibility
- Primary #0D6E6E on white is about 6.1:1 (AA). Muted-fg #64748B on white is about 4.8:1 (AA for body text). Success #15803D on #DCFCE7 is about 4.6:1.
- Keep shadcn's `focus-visible:ring-2 ring-ring ring-offset-2` on all interactive elements. Don't remove outlines.
- Give the hamburger `aria-label="Open menu"` and every search field a visible `Label`. Category icons are decorative (`aria-hidden`). Use a semantic `nav`/`main`/`footer`, a single `h1`, and `lang` attribute switching.
