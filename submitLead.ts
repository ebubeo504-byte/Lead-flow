import type { Lead, LeadInquiryInput, Priority } from "@/types/lead";
import { MAKE_WEBHOOK_URL } from "@/config/webhook";

// ---------------------------------------------------------------------------
// submitLead()
//
// This is the single place the demo form talks to "the backend."
//
// With no webhook URL set (src/config/webhook.ts), it fabricates a result
// on the client so the site works with zero server — this is the current
// default.
//
// Once you paste your Make.com webhook URL into src/config/webhook.ts,
// every submission here also POSTs the inquiry to your real automation, so
// it actually runs (adds the row to your sheet, sends the real email, etc).
// The card shown on the page is still a local, representative preview —
// Make.com's own response isn't waited on for display.
// ---------------------------------------------------------------------------

function classifyPriority(input: LeadInquiryInput): Priority {
  const text = `${input.additionalDetails} ${input.preferredDate}`.toLowerCase();
  const urgentWords = ["asap", "urgent", "today", "tomorrow", "immediately", "emergency"];
  if (urgentWords.some((word) => text.includes(word))) return "HIGH";
  if (input.preferredDate.trim().length > 0) return "MEDIUM";
  return "LOW";
}

function summarize(input: LeadInquiryInput): string {
  const rooms = input.rooms ? `${input.rooms} ` : "";
  const property = input.propertyType ? input.propertyType.toLowerCase() : "property";
  const service = input.service || "a cleaning service";
  const when = input.preferredDate ? ` around ${input.preferredDate}` : "";
  return `Customer needs ${service.toLowerCase()} for a ${rooms}${property}${when}.`;
}

function draftResponse(input: LeadInquiryInput): string {
  const firstName = input.name.split(" ")[0] || "there";
  return `Hi ${firstName}, thanks for reaching out! We've received your ${input.service.toLowerCase()} request${
    input.preferredDate ? ` for ${input.preferredDate}` : ""
  } and will follow up shortly to confirm the details.`;
}

// Simulates network latency so the processing animation has something to show.
function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitLead(input: LeadInquiryInput): Promise<Lead> {
  if (MAKE_WEBHOOK_URL) {
    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
    } catch (error) {
      console.error("Could not reach the automation webhook:", error);
    }
  } else {
    await wait(900);
  }

  const priority = classifyPriority(input);

  return {
    id: `demo-${Date.now()}`,
    customerName: input.name || "New Customer",
    email: input.email,
    phone: input.phone,
    serviceType: input.service || "Cleaning",
    propertyType: input.propertyType || "Property",
    rooms: input.rooms || "—",
    preferredDate: input.preferredDate || "Flexible",
    additionalDetails: input.additionalDetails,
    urgency: priority === "HIGH" ? "Immediate" : priority === "MEDIUM" ? "This week" : "Flexible",
    priority,
    customerIntent: "Requesting a quote",
    aiSummary: summarize(input),
    generatedResponse: draftResponse(input),
    status: "New",
    timestamp: "Just now",
  };
}
