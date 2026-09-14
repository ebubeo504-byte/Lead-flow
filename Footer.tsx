import { brand, nav } from "@/config/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-navy-900">{brand.name}</p>
          <p className="mt-2 max-w-xs text-sm text-navy-500">{brand.shortDescription}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Product</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-navy-600 hover:text-navy-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Company</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#contact" className="text-sm text-navy-600 hover:text-navy-900">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-sm text-navy-600 hover:text-navy-900">
                Privacy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-sm text-navy-600 hover:text-navy-900">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line py-6">
        <Container>
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
