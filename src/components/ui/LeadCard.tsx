import { Bell } from "lucide-react";
import type { Lead } from "@/types/lead";
import { PriorityBadge } from "./StatusBadge";

export default function LeadCard({
  lead,
  className = "",
}: {
  lead: Lead;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-5 shadow-card ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-base font-semibold text-navy-900">
            {lead.customerName}
          </p>
          <p className="mt-0.5 flex items-center gap-2 text-sm text-navy-500">
            <span>{lead.serviceType}</span>
            <span className="h-3 w-px bg-line" aria-hidden="true" />
            <span>{lead.rooms}</span>
          </p>
        </div>
        <PriorityBadge priority={lead.priority} />
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div>
          <dt className="text-navy-400">Preferred date</dt>
          <dd className="font-mono text-navy-800">{lead.preferredDate}</dd>
        </div>
        <div>
          <dt className="text-navy-400">Property</dt>
          <dd className="text-navy-800">{lead.propertyType}</dd>
        </div>
      </dl>

      <div className="mt-4 rounded-lg bg-navy-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">AI summary</p>
        <p className="mt-1 text-sm text-navy-800">{lead.aiSummary}</p>
      </div>

      <div className="mt-3 rounded-lg border border-line p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
          Customer response
        </p>
        <p className="mt-1 text-sm text-ink/80">{lead.generatedResponse}</p>
      </div>

      {lead.priority === "HIGH" && (
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-status-highBg px-3 py-2.5 text-sm font-medium text-status-high">
          <Bell className="h-4 w-4 shrink-0" />
          High priority lead — notify the owner now
        </div>
      )}
    </div>
  );
}
