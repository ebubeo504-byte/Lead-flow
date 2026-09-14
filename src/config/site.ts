// Everything a business owner would want to change when re-branding this
// product lives here: name, nav labels, section copy. Components read from
// this file instead of hard-coding strings.

export const brand = {
  name: "LeadFlow",
  shortDescription:
    "Lead management for service businesses — capture, prioritize, and respond to new inquiries automatically.",
};

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "FAQ", href: "#faq" },
];

export const cta = {
  primary: "Try the demo",
  secondary: "See how it works",
};

export const hero = {
  eyebrow: "Lead management for cleaning businesses",
  headline: "Turn new cleaning inquiries into organized, actionable leads.",
  subhead:
    "LeadFlow captures every inquiry, figures out which ones need attention first, and sends a reply — so nothing sits in an inbox waiting to be read.",
};

export const workflowSteps = [
  {
    step: "01",
    title: "Capture",
    description: "A new inquiry comes in from your website or quote form.",
  },
  {
    step: "02",
    title: "Understand",
    description: "The details are pulled out and organized — service, property, dates, notes.",
  },
  {
    step: "03",
    title: "Prioritize",
    description: "Each lead is marked high, medium, or low priority based on what it needs.",
  },
  {
    step: "04",
    title: "Respond",
    description: "A personalized reply goes out to the customer automatically.",
  },
  {
    step: "05",
    title: "Alert",
    description: "If a lead needs attention right away, you hear about it immediately.",
  },
];

export const problem = {
  headline: "Every inquiry creates work.",
  body: "A new inquiry arrives, and someone has to read it, find the important details, decide how urgent it is, log it somewhere, and reply — before it's even clear if the lead is worth prioritizing. Multiply that by every form submission, and the admin work adds up faster than the cleaning jobs do.",
  tasks: [
    "Read the message",
    "Find the important information",
    "Decide how urgent it is",
    "Enter it somewhere",
    "Reply to the customer",
    "Remember which ones still need attention",
  ],
};

export const features = [
  {
    title: "AI lead extraction",
    description: "Turns a messy inquiry into structured details — name, service, property, dates — with nothing to type by hand.",
  },
  {
    title: "Smart prioritization",
    description: "Flags the leads that likely need a fast response, so the time-sensitive ones don't wait behind the rest.",
  },
  {
    title: "Lead CRM",
    description: "Every inquiry lands in one organized place instead of scattered across an inbox.",
  },
  {
    title: "Personalized responses",
    description: "Sends a reply written around what the customer actually asked for, not a generic template.",
  },
  {
    title: "Owner alerts",
    description: "Surfaces the leads that need a personal look, so they don't get buried under routine ones.",
  },
  {
    title: "Automated workflow",
    description: "Handles the repetitive parts of processing a lead so your time goes to the job, not the paperwork.",
  },
];

export const useCases = [
  {
    title: "Residential cleaning",
    description: "Standard home cleanings with recurring scheduling needs.",
  },
  {
    title: "Deep cleaning",
    description: "One-off, detail-heavy jobs that often come with time pressure.",
  },
  {
    title: "Move-in / move-out",
    description: "Date-sensitive requests tied to a lease or closing.",
  },
  {
    title: "Commercial cleaning",
    description: "Recurring contracts and multi-property inquiries.",
  },
  {
    title: "Airbnb / vacation rental",
    description: "Fast turnarounds between guests, often booked last-minute.",
  },
];

export const benefits = [
  "Spend less time sorting inquiries.",
  "Know which leads need attention.",
  "Respond professionally and consistently.",
  "Keep every inquiry organized.",
  "Let automation handle repetitive work.",
];

export const faqs = [
  {
    question: "Does this replace my existing booking system?",
    answer:
      "No. LeadFlow is designed to work around your existing inquiry process and handle the repetitive lead-processing work after an inquiry comes in.",
  },
  {
    question: "What happens when a high-priority lead arrives?",
    answer:
      "You're notified right away, separately from the routine log, so it doesn't sit unread behind lower-priority inquiries.",
  },
  {
    question: "How are customer responses generated?",
    answer:
      "Each reply is written around the specific details of that inquiry — service type, property, and timing — rather than a fixed template.",
  },
  {
    question: "Can it work with my existing website form?",
    answer:
      "It's built to sit behind whatever form or channel you already collect inquiries through, without asking customers to use something new.",
  },
  {
    question: "Can the workflow be customized?",
    answer:
      "Yes. What counts as high priority, how responses are worded, and who gets alerted can all be adjusted to fit how your business runs.",
  },
  {
    question: "Can this work for businesses outside cleaning?",
    answer:
      "The underlying system isn't specific to cleaning — it's currently set up and tuned for cleaning businesses first.",
  },
];

export const finalCta = {
  headline: "See what your inquiries could look like on autopilot.",
  primary: "Try the demo",
  secondary: "Request a test",
};
