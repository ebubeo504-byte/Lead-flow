import { useCases } from "@/config/site";
import Container from "@/components/ui/Container";

export default function UseCases() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built around how cleaning inquiries actually vary
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
            The same system adapts to what each job actually needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-display text-base font-semibold text-navy-900">
                {useCase.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
