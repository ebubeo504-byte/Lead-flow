import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { processingSteps } from "@/config/mockData";

export default function ProcessingAnimation({ active }: { active: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setVisibleCount(0);
      return;
    }

    setVisibleCount(0);
    const timers = processingSteps.map((_, index) =>
      setTimeout(() => setVisibleCount(index + 1), (index + 1) * 200)
    );

    return () => timers.forEach(clearTimeout);
  }, [active]);

  if (!active) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-line px-6 py-16 text-center">
        <p className="text-sm text-navy-400">
          Fill out the form and submit it to see how a new inquiry gets processed.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
        Processing inquiry
      </p>
      <ul className="mt-4 space-y-3">
        {processingSteps.map((step, index) => {
          const done = index < visibleCount;
          const isCurrent = index === visibleCount;
          return (
            <li key={step} className="flex items-center gap-3 text-sm">
              {done ? (
                <span className="flex h-5 w-5 shrink-0 animate-check-in items-center justify-center rounded-full bg-status-low/10 text-status-low">
                  <Check className="h-3.5 w-3.5" />
                </span>
              ) : isCurrent ? (
                <Loader2 className="h-5 w-5 shrink-0 animate-spin text-navy-400" />
              ) : (
                <span className="h-5 w-5 shrink-0 rounded-full border border-line" />
              )}
              <span className={done ? "text-navy-800" : "text-navy-400"}>{step}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
