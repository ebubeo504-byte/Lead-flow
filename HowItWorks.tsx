import { workflowSteps } from "@/config/site";
import Container from "@/components/ui/Container";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
            From the moment an inquiry comes in to the moment you know whether it needs a
            personal follow-up.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          {workflowSteps.map((item) => (
            <div key={item.step} className="relative">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper font-mono text-sm text-navy-600">
                {item.step}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
