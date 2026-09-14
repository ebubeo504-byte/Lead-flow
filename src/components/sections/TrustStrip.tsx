import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const stages = ["Capture", "Understand", "Prioritize", "Respond", "Notify"];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-white py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm font-medium text-navy-600 sm:gap-x-3">
          {stages.map((stage, index) => (
            <div key={stage} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full bg-navy-50 px-3.5 py-1.5">{stage}</span>
              {index < stages.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-navy-300" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
