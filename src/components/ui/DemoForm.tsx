import { useState } from "react";
import type { FormEvent } from "react";
import type { LeadInquiryInput } from "@/types/lead";
import Button from "./Button";

const initialState: LeadInquiryInput = {
  name: "",
  email: "",
  phone: "",
  service: "Residential Cleaning",
  propertyType: "House",
  rooms: "",
  preferredDate: "",
  additionalDetails: "",
};

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-navy-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-300";

export default function DemoForm({
  onSubmit,
  disabled,
}: {
  onSubmit: (input: LeadInquiryInput) => void;
  disabled: boolean;
}) {
  const [form, setForm] = useState<LeadInquiryInput>(initialState);

  function update<K extends keyof LeadInquiryInput>(key: K, value: LeadInquiryInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
        New customer inquiry
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-navy-600">Name</span>
          <input
            required
            className={inputClasses}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jamie Rivera"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-navy-600">Email</span>
          <input
            required
            type="email"
            className={inputClasses}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jamie@email.com"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-navy-600">Phone</span>
          <input
            className={inputClasses}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 123-4567"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-navy-600">Service</span>
          <select
            className={inputClasses}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option>Residential Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-in / Move-out</option>
            <option>Commercial Cleaning</option>
            <option>Airbnb / Vacation Rental</option>
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-navy-600">Property type</span>
          <select
            className={inputClasses}
            value={form.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
          >
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
            <option>Office</option>
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-navy-600">Rooms</span>
          <input
            className={inputClasses}
            value={form.rooms}
            onChange={(e) => update("rooms", e.target.value)}
            placeholder="3 bedrooms"
          />
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block text-navy-600">Preferred date</span>
          <input
            className={inputClasses}
            value={form.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            placeholder="e.g. this Friday, or Aug 22"
          />
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block text-navy-600">Additional details</span>
          <textarea
            className={`${inputClasses} min-h-[88px] resize-none`}
            value={form.additionalDetails}
            onChange={(e) => update("additionalDetails", e.target.value)}
            placeholder="Anything else worth knowing — timing, access, special requests..."
          />
        </label>
      </div>

      <Button type="submit" className="mt-5 w-full" disabled={disabled}>
        {disabled ? "Processing…" : "Process inquiry"}
      </Button>
    </form>
  );
}
