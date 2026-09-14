import { hero, cta } from "@/config/site";
import { heroLead } from "@/config/mockData";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LeadCard from "@/components/ui/LeadCard";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-navy-500">{hero.eyebrow}</p>
          <h1 className="mt-3 text-[2.25rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-navy-500">{hero.subhead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#demo" variant="primary" className="px-6 py-3.5 text-[15px]">
              {cta.primary}
            </Button>
            <Button as="a" href="#how-it-works" variant="secondary" className="px-6 py-3.5 text-[15px]">
              {cta.secondary}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-navy-100/60 blur-2xl" aria-hidden="true" />
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-navy-400">
            New lead
          </p>
          <LeadCard lead={heroLead} />
        </div>
      </Container>
    </section>
  );
}
