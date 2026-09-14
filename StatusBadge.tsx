import type { Priority, LeadStatus } from "@/types/lead";

const priorityStyles: Record<Priority, string> = {
  HIGH: "bg-status-highBg text-status-high",
  MEDIUM: "bg-status-mediumBg text-status-medium",
  LOW: "bg-status-lowBg text-status-low",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide ${priorityStyles[priority]}`}
    >
      {priority}
    </span>
  );
}

const statusStyles: Record<LeadStatus, string> = {
  New: "bg-navy-50 text-navy-700",
  Responded: "bg-emerald-50 text-emerald-700",
};

export function StatusPill({ status }: { status: LeadStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
