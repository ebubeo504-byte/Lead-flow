import { Plus } from "lucide-react";
import { faqs } from "@/config/site";
import Container from "@/components/ui/Container";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Questions</h2>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="h-4 w-4 shrink-0 text-navy-400 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-navy-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
