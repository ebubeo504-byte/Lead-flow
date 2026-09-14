import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-card">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-navy-500">{description}</p>
    </div>
  );
}
