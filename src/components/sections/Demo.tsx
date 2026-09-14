import { useState } from "react";
import type { Lead, LeadInquiryInput } from "@/types/lead";
import { submitLead } from "@/lib/submitLead";
import Container from "@/components/ui/Container";
import DemoForm from "@/components/ui/DemoForm";
import ProcessingAnimation from "@/components/ui/ProcessingAnimation";
import LeadCard from "@/components/ui/LeadCard";

type Stage = "idle" | "processing" | "done";

export default function Demo() {
  const [stage, setStage] = useState<Stage>("idle");
  const [result, setResult] = useState<Lead | null>(null);

  async function handleSubmit(input: LeadInquiryInput) {
    setStage("processing");
    setResult(null);
    const lead = await submitLead(input);
    setResult(lead);
    setStage("done");
  }

  return (
    <section id="demo" className="border-t border-line bg-navy-50/40 py-20 sm:py-28">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">See it in action</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
            Submit a sample inquiry and watch it get processed the way a real one would be. This
            demo runs entirely in your browser — no inquiry here is sent anywhere.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DemoForm onSubmit={handleSubmit} disabled={stage === "processing"} />

          <div>
            {stage === "done" && result ? (
              <div className="animate-fade-up">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy-400">
                  Result
                </p>
                <LeadCard lead={result} />
              </div>
            ) : (
              <ProcessingAnimation active={stage === "processing"} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
