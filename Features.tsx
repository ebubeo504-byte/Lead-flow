import { ScanText, Flag, Database, MessageSquareText, BellRing, Workflow } from "lucide-react";
import { features } from "@/config/site";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";

const icons = [ScanText, Flag, Database, MessageSquareText, BellRing, Workflow];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything a new inquiry needs
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
            Each piece handles one part of the process, so nothing falls on you by default.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={icons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
