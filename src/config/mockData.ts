import type { Lead } from "@/types/lead";

// Static demo data for the dashboard preview and hero mockup.
// None of this is live — it exists so the product feels real before
// it's wired up to actual customer data.

export const heroLead: Lead = {
  id: "demo-hero",
  customerName: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "(555) 019-2231",
  serviceType: "Residential Cleaning",
  propertyType: "House",
  rooms: "3 bedrooms",
  preferredDate: "Aug 22",
  additionalDetails: "Would like the kitchen and bathrooms done thoroughly.",
  urgency: "Within the next few days",
  priority: "HIGH",
  customerIntent: "Ready to book, comparing availability",
  aiSummary:
    "Customer needs a 3-bedroom residential cleaning and requested service within the next few days.",
  generatedResponse:
    "Thanks for reaching out! We've received your cleaning request and will confirm a time for Aug 22 shortly.",
  status: "New",
  timestamp: "2 min ago",
};

export const dashboardLeads: Lead[] = [
  heroLead,
  {
    id: "demo-2",
    customerName: "Michael Brown",
    email: "m.brown@email.com",
    phone: "(555) 402-8871",
    serviceType: "Deep Cleaning",
    propertyType: "Apartment",
    rooms: "2 bedrooms",
    preferredDate: "Aug 25",
    additionalDetails: "First-time deep clean before hosting family.",
    urgency: "Flexible",
    priority: "MEDIUM",
    customerIntent: "Requesting a quote",
    aiSummary: "Customer wants a deep clean for a 2-bedroom apartment ahead of a family visit.",
    generatedResponse:
      "Thanks for your inquiry! We'd be glad to help get your apartment ready — here's what a deep clean includes...",
    status: "Responded",
    timestamp: "1 hr ago",
  },
  {
    id: "demo-3",
    customerName: "Jessica Williams",
    email: "jwilliams@email.com",
    phone: "(555) 774-3390",
    serviceType: "Move-out Cleaning",
    propertyType: "House",
    rooms: "4 bedrooms",
    preferredDate: "Aug 30",
    additionalDetails: "Needs a receipt for the leasing office.",
    urgency: "Before lease ends",
    priority: "LOW",
    customerIntent: "Researching options",
    aiSummary: "Customer needs a move-out clean for a 4-bedroom house before their lease ends.",
    generatedResponse:
      "Thank you for reaching out about your move-out cleaning — we can absolutely provide documentation for your leasing office.",
    status: "Responded",
    timestamp: "3 hrs ago",
  },
];

export const dashboardStats = {
  todaysLeads: 12,
  highPriority: 3,
  responsesSent: 10,
  awaitingAttention: 4,
};

export const processingSteps = [
  "Information extracted",
  "Lead prioritized",
  "Lead added to CRM",
  "Customer response generated",
  "Owner notification prepared",
];
