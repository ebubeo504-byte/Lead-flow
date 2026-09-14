import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/config/site";
import Container from "@/components/ui/Container";

export default function Benefits() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What changes for you</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-xl bg-navy-50/60 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" aria-hidden="true" />
              <p className="text-[15px] text-navy-800">{benefit}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
