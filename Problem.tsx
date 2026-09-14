import { Check } from "lucide-react";
import { problem } from "@/config/site";
import Container from "@/components/ui/Container";

export default function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{problem.headline}</h2>
          <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy-500">
            {problem.body}
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
            For every inquiry, someone has to
          </p>
          <ul className="mt-4 space-y-3">
            {problem.tasks.map((task) => (
              <li key={task} className="flex items-start gap-3 text-[15px] text-navy-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
