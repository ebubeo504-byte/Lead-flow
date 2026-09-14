import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, nav, cta } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold text-navy-900">
          {brand.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-600 transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button as="a" href="#how-it-works" variant="ghost">
            {cta.secondary}
          </Button>
          <Button as="a" href="#demo" variant="primary">
            {cta.primary}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50"
              >
                {item.label}
              </a>
            ))}
            <Button as="a" href="#demo" variant="primary" className="mt-3 w-full" onClick={() => setOpen(false)}>
              {cta.primary}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
