import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Star, PhoneMissed, TrendingDown, MessageSquareOff, Send, Bot, Share2, Phone, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auditSchema, submitAudit } from "@/lib/audit.functions";
import logoAsset from "@/assets/ap-digital-studio-logo.png.asset.json";

const AGENCY_NAME = "AP Digital Studio";
const AGENCY_PHONE = "(786) 247-8529";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AP Digital Studio — More 5-Star Google Reviews for Appliance Repair" },
      {
        name: "description",
        content:
          "AP Digital Studio runs a done-for-you Google review system for appliance repair companies. More reviews, higher rankings, more calls. Get a free review audit.",
      },
      { property: "og:title", content: "AP Digital Studio — More 5-Star Google Reviews for Appliance Repair" },
      {
        property: "og:description",
        content: "Done-for-you review system: more Google reviews, higher ranking, more jobs. Get your free audit.",
      },
    ],
  }),
  component: Index,
});

function CTA({ label = "Get a Free Review Audit" }: { label?: string }) {
  return (
    <Button asChild size="lg" className="h-14 rounded-full px-8 text-lg font-semibold shadow-soft">
      <a href="#audit">
        {label} <ArrowRight className="size-5" />
      </a>
    </Button>
  );
}

function Stars({ className = "size-5" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 text-star">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen font-sans text-lg">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center" aria-label={`${AGENCY_NAME} — home`}>
            <img src={logoAsset.url} alt={AGENCY_NAME} className="h-8 w-auto sm:h-10" />
          </a>
          <a href={`tel:${AGENCY_PHONE.replace(/[^0-9+]/g, "")}`} className="hidden items-center gap-2 font-semibold text-primary sm:flex">
            <Phone className="size-4" /> {AGENCY_PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-soft to-background">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-base shadow-soft">
            <Stars className="size-4" />
            <span className="font-medium text-muted-foreground">For local appliance repair pros</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            More 5-star reviews. <span className="text-primary sm:whitespace-nowrap">More repair jobs.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            We help appliance repair businesses get a steady stream of Google reviews, so you show up first and your phone keeps ringing.
          </p>
          <div className="mt-10">
            <CTA />
          </div>
          <p className="mt-4 text-base text-muted-foreground">Free. No contract. Takes 2 minutes.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Sound familiar?</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: MessageSquareOff, title: "Not enough Google reviews", text: "Happy customers forget to leave a review. Your great work stays invisible." },
            { icon: PhoneMissed, title: "Missed calls become missed jobs", text: "When you're behind a fridge, the next caller just dials someone else." },
            { icon: TrendingDown, title: "Competitors rank higher", text: "The shop with more recent reviews gets the top spot and the call." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <div className="grid size-12 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <p className="text-center font-semibold uppercase tracking-wider text-primary text-base">Done for you</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold sm:text-4xl">A simple review system that runs itself</h2>
          <div className="mt-12 space-y-4">
            {[
              { icon: Send, title: "Automatic review requests", text: "Every customer gets a friendly text asking for a review after each job." },
              { icon: Bot, title: "AI replies to every review", text: "Thoughtful, on-brand responses posted fast, so you never have to." },
              { icon: Share2, title: "Best reviews posted to social", text: "Your top 5-star reviews get shared to your Facebook and Instagram." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-5 rounded-2xl bg-card p-6 shadow-soft">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTA />
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why it works</h2>
            <p className="mt-4 text-xl text-muted-foreground">Google rewards businesses that get fresh reviews often.</p>
            <ol className="mt-8 space-y-4">
              {["More recent reviews", "Higher Google ranking", "More calls and booked jobs"].map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft font-display font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-xl font-semibold">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <figure className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <Stars />
            <blockquote className="mt-5 text-xl leading-relaxed">
              "[Customer testimonial goes here. Example: We went from 23 to 110 reviews in four months and now we're booked solid.]"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="size-12 rounded-full border-2 border-dashed border-primary/40 bg-primary-soft" />
              <span>
                <span className="block font-semibold">[Owner Name]</span>
                <span className="block text-base text-muted-foreground">[Business Name], [City]</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-xl px-5 py-20 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">One simple plan</h2>
          <div className="mt-10 rounded-3xl border-2 border-primary bg-card p-8 shadow-soft">
            <p className="font-display text-6xl font-extrabold">
              $297<span className="text-2xl font-semibold text-muted-foreground">/month</span>
            </p>
            <ul className="mx-auto mt-8 max-w-xs space-y-3 text-left">
              {["Automatic review requests", "AI review responses", "Best reviews shared to social"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="size-5 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTA label="Start With a Free Audit" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA form */}
      <section id="audit" className="scroll-mt-20 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Get Your Free Review Audit</h2>
            <p className="mt-5 text-xl opacity-90">
              We'll look at your Google profile, compare you to local competitors, and show you exactly how to get more reviews. No cost, no pressure.
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold">
              <Phone className="size-5" /> Prefer to talk?{" "}
              <a href={`tel:${AGENCY_PHONE.replace(/[^0-9+]/g, "")}`} className="underline underline-offset-4">
                {AGENCY_PHONE}
              </a>
            </p>
          </div>
          <AuditForm />
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-base text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5">
          <img src={logoAsset.url} alt={AGENCY_NAME} className="h-7 w-auto" />
          <a
            href={`tel:${AGENCY_PHONE.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold text-primary"
          >
            <Phone className="size-4" /> {AGENCY_PHONE}
          </a>
          <p>© {new Date().getFullYear()} {AGENCY_NAME}</p>
        </div>
      </footer>
    </div>
  );
}

type Fields = "name" | "business_name" | "email" | "phone";

function AuditForm() {
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = auditSchema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<Fields, string>> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as Fields] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submitAudit({ data: parsed.data });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl bg-card p-10 text-center text-card-foreground shadow-soft">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary-soft text-primary">
          <Check className="size-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">Thanks! Your request is in.</h3>
        <p className="mt-2 text-muted-foreground">We'll reach out soon to go over your free review audit.</p>
      </div>
    );
  }

  const fields: { id: Fields; label: string; type: string; auto: string }[] = [
    { id: "name", label: "Your name", type: "text", auto: "name" },
    { id: "business_name", label: "Business name", type: "text", auto: "organization" },
    { id: "email", label: "Email", type: "email", auto: "email" },
    { id: "phone", label: "Phone", type: "tel", auto: "tel" },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl bg-card p-7 text-card-foreground shadow-soft sm:p-9">
      {fields.map((f) => (
        <div key={f.id} className="space-y-2">
          <Label htmlFor={f.id} className="text-base font-semibold">{f.label}</Label>
          <Input id={f.id} name={f.id} type={f.type} autoComplete={f.auto} className="h-13 rounded-xl text-lg" aria-invalid={!!errors[f.id]} />
          {errors[f.id] && <p className="text-sm text-destructive">{errors[f.id]}</p>}
        </div>
      ))}
      {status === "error" && <p className="text-base text-destructive">Something went wrong. Please try again or give us a call.</p>}
      <Button type="submit" size="lg" disabled={status === "sending"} className="h-14 w-full rounded-full text-lg font-semibold">
        {status === "sending" ? "Sending..." : "Get My Free Audit"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">We'll never share your info.</p>
    </form>
  );
}
