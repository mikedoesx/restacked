"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  website: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(nextValues: FormState): ErrorState {
    const nextErrors: ErrorState = {};

    if (!nextValues.firstName.trim())
      nextErrors.firstName = "First name is required.";
    if (!nextValues.lastName.trim())
      nextErrors.lastName = "Last name is required.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(nextValues.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!nextValues.message.trim())
      nextErrors.message = "Project details are required.";

    return nextErrors;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.website.trim()) {
      setSubmitted(true);
      setValues(initialState);
      setErrors({});
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setValues(initialState);
  }

  return (
    <div className="surface-card">
      <h2 className="text-2xl font-semibold">Tell us about your project</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Typical timelines: simple web products run 4-8 weeks, while enterprise
        platforms often run 3-6 months.
      </p>

      {submitted ? (
        <div
          role="status"
          className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
        >
          <p className="inline-flex items-center gap-2 font-medium text-primary">
            <CheckCircle2 className="h-4 w-4" />
            Thanks for reaching out.
          </p>
          <p className="mt-1 text-muted-foreground">
            We review every request and typically respond within 24 hours.
          </p>
        </div>
      ) : null}

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="firstName"
            label="First Name"
            required
            value={values.firstName}
            onChange={(value) => update("firstName", value)}
            error={errors.firstName}
          />
          <Field
            id="lastName"
            label="Last Name"
            required
            value={values.lastName}
            onChange={(value) => update("lastName", value)}
            error={errors.lastName}
          />
        </div>

        <Field
          id="email"
          label="Work Email"
          required
          type="email"
          value={values.email}
          onChange={(value) => update("email", value)}
          error={errors.email}
        />

        <Field
          id="company"
          label="Company"
          value={values.company}
          onChange={(value) => update("company", value)}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            id="projectType"
            label="Project Type"
            value={values.projectType}
            onChange={(value) => update("projectType", value)}
            options={[
              "Custom Web Development",
              "Mobile Development",
              "AI / ML Consulting",
              "DevOps & Infrastructure",
              "Technical Consulting",
            ]}
          />
          <SelectField
            id="budget"
            label="Estimated Budget"
            value={values.budget}
            onChange={(value) => update("budget", value)}
            options={["$10k-$25k", "$25k-$50k", "$50k-$100k", "$100k+"]}
          />
        </div>

        <SelectField
          id="timeline"
          label="Desired Timeline"
          value={values.timeline}
          onChange={(value) => update("timeline", value)}
          options={["4-8 weeks", "2-3 months", "3-6 months", "Planning stage"]}
        />

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Project Details <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="What are you building, who is it for, and what timeline are you targeting?"
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-xs text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button type="submit" className="cta-button w-full sm:w-auto">
          Send Project Brief
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: "text" | "email";
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required = false,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
