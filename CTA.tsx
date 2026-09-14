import { finalCta } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="border-t border-line bg-navy-900 py-20 sm:py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {finalCta.headline}
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as="a" href="#demo" variant="primary" className="bg-white px-6 py-3.5 text-navy-900 hover:bg-navy-50">
            {finalCta.primary}
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="ghost"
            className="px-6 py-3.5 text-white hover:bg-white/10"
          >
            {finalCta.secondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}
