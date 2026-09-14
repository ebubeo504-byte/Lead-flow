import { useState } from "react";
import { Clock, MailCheck, Sparkles } from "lucide-react";
import { dashboardLeads, dashboardStats } from "@/config/mockData";
import type { Lead } from "@/types/lead";
import Container from "@/components/ui/Container";
import { PriorityBadge, StatusPill } from "@/components/ui/StatusBadge";
import LeadCard from "@/components/ui/LeadCard";

const stats = [
  { label: "Today's leads", value: dashboardStats.todaysLeads },
  { label: "High priority", value: dashboardStats.highPriority },
  { label: "Responses sent", value: dashboardStats.responsesSent },
  { label: "Awaiting attention", value: dashboardStats.awaitingAttention },
];

export default function DashboardPreview() {
  const [selectedId, setSelectedId] = useState<string>(dashboardLeads[0].id);
  const selectedLead = dashboardLeads.find((lead) => lead.id === selectedId) as Lead;

  function selectLead(id: string) {
    setSelectedId((current) => (current === id ? current : id));
  }

  return (
    <section className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One place for every inquiry
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
            A preview of what the lead list looks like once it's organized. Select a lead to see
            what's behind it.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-paper p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white p-4">
                <p className="font-display text-2xl font-semibold text-navy-900">{stat.value}</p>
                <p className="mt-0.5 text-xs text-navy-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table — visible from md up */}
          <div className="mt-5 hidden overflow-hidden rounded-xl border border-line bg-white md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-navy-400">
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Service</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Priority</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {dashboardLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => selectLead(lead.id)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && selectLead(lead.id)}
                    aria-pressed={selectedId === lead.id}
                    className={`cursor-pointer border-b border-line last:border-0 transition-colors focus-visible:outline-none ${
                      selectedId === lead.id ? "bg-navy-50" : "hover:bg-navy-50/60"
                    }`}
                  >
                    <td className="px-4 py-3.5 font-medium text-navy-900">{lead.customerName}</td>
                    <td className="px-4 py-3.5 text-navy-600">{lead.serviceType}</td>
                    <td className="px-4 py-3.5 font-mono text-navy-600">{lead.preferredDate}</td>
                    <td className="px-4 py-3.5">
                      <PriorityBadge priority={lead.priority} />
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusPill status={lead.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stacked cards — mobile only */}
          <div className="mt-5 space-y-3 md:hidden">
            {dashboardLeads.map((lead) => (
              <button
                key={lead.id}
                onClick={() => selectLead(lead.id)}
                aria-pressed={selectedId === lead.id}
                className={`w-full rounded-xl border p-4 text-left transition-colors ${
                  selectedId === lead.id ? "border-navy-300 bg-navy-50" : "border-line bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-navy-900">{lead.customerName}</p>
                  <PriorityBadge priority={lead.priority} />
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm text-navy-500">
                  <span>{lead.serviceType}</span>
                  <span className="h-3 w-px bg-line" aria-hidden="true" />
                  <span className="font-mono">{lead.preferredDate}</span>
                </p>
                <div className="mt-2">
                  <StatusPill status={lead.status} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel for the selected lead */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr]">
          <LeadCard lead={selectedLead} />

          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
              Customer intent
            </p>
            <p className="mt-1.5 text-sm text-navy-800">{selectedLead.customerIntent}</p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-navy-400">
              Original inquiry notes
            </p>
            <p className="mt-1.5 text-sm text-navy-800">{selectedLead.additionalDetails}</p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-navy-400">
              Activity
            </p>
            <ul className="mt-2 space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-navy-700">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
                Lead extracted and prioritized {selectedLead.timestamp}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-navy-700">
                <MailCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
                {selectedLead.status === "Responded"
                  ? "Customer response sent"
                  : "Customer response drafted, ready to send"}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-navy-700">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
                Logged to the lead CRM
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
