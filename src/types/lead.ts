export type Priority = "HIGH" | "MEDIUM" | "LOW";

export type LeadStatus = "New" | "Responded";

export interface Lead {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyType: string;
  rooms: string;
  preferredDate: string;
  additionalDetails: string;
  urgency: string;
  priority: Priority;
  customerIntent: string;
  aiSummary: string;
  generatedResponse: string;
  status: LeadStatus;
  timestamp: string;
}

// The shape the demo form collects before a lead has been processed.
export interface LeadInquiryInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  rooms: string;
  preferredDate: string;
  additionalDetails: string;
}
