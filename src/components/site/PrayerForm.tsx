import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { prayerTopics, site } from "@/config/site";

type PrayerFormProps = {
  /** Home shows topic chips; the Pray page shows phone and audience choice. */
  variant?: "compact" | "full";
};

type Audience = "pastors" | "team";

const audienceNotes: Record<Audience, string> = {
  pastors: "Only our pastors will read this. It stays private.",
  team: "Our small prayer team will also pray over it. Your last name is never shared.",
};

const PrayerForm = ({ variant = "compact" }: PrayerFormProps) => {
  const [topics, setTopics] = useState<string[]>([]);
  const [audience, setAudience] = useState<Audience>("pastors");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const toggleTopic = (topic: string) =>
    setTopics((current) => (current.includes(topic) ? current.filter((t) => t !== topic) : [...current, topic]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      request: form.get("request"),
      name: form.get("name") || "",
      phone: form.get("phone") || "",
      topics: topics.join(", "),
      audience: variant === "full" ? audience : form.get("private") ? "pastors" : "team",
    };

    if (!site.prayerFormEndpoint) {
      console.info("Prayer request (no endpoint configured yet, nothing was sent):", payload);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.prayerFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setTopics([]);
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="px-2 py-12 text-center" role="status">
        <h3 className="mb-3 font-serif text-4xl font-medium text-ink sm:text-5xl">Thank you. We're praying.</h3>
        <p className="mb-7 text-[17px] leading-relaxed text-slate">
          "The Lord is near to all who call on him." · Psalm 145:18
        </p>
        <button type="button" className="pill pill-outline" onClick={reset}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 text-ink">
      {variant === "full" && <h2 className="font-serif text-4xl font-medium sm:text-[44px]">Send a prayer request</h2>}

      {variant === "compact" && (
        <fieldset>
          <legend className="mb-3.5 text-[15px] font-bold">What can we pray about?</legend>
          <div className="flex flex-wrap gap-2.5">
            {prayerTopics.map((topic) => {
              const on = topics.includes(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleTopic(topic)}
                  className={cn(
                    "min-h-11 rounded-full border-[1.5px] px-[18px] text-[15px] font-medium transition-colors",
                    on ? "border-ink bg-ink text-ivory" : "border-[#cbbfd3] text-ink hover:border-ink",
                  )}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor={`${variant}-request`} className="mb-2.5 block text-[15px] font-bold">
          {variant === "full" ? "What would you like prayer for?" : "Your request"}
        </label>
        <textarea
          id={`${variant}-request`}
          name="request"
          required
          rows={variant === "full" ? 6 : 5}
          placeholder="Write it in your own words…"
          className="field resize-y"
        />
      </div>

      <div className={cn("grid gap-5", variant === "full" && "sm:grid-cols-2")}>
        <div>
          <label htmlFor={`${variant}-name`} className="mb-2.5 block text-[15px] font-bold">
            First name <span className="font-medium text-[#6d6275]">(optional)</span>
          </label>
          <input id={`${variant}-name`} name="name" type="text" autoComplete="given-name" className="field" />
        </div>
        {variant === "full" && (
          <div>
            <label htmlFor="full-phone" className="mb-2.5 block text-[15px] font-bold">
              Phone or WhatsApp <span className="font-medium text-[#6d6275]">(optional)</span>
            </label>
            <input id="full-phone" name="phone" type="tel" autoComplete="tel" className="field" />
          </div>
        )}
      </div>

      {variant === "compact" ? (
        <label className="flex min-h-11 items-center gap-3 text-[15px] text-[#3b2f43]">
          <input type="checkbox" name="private" defaultChecked className="h-5 w-5 accent-violet" />
          Keep this between me and the pastors
        </label>
      ) : (
        <fieldset>
          <legend className="mb-2.5 text-[15px] font-bold">Who should see it?</legend>
          <div className="flex gap-1.5 rounded-2xl bg-[#efe6f3] p-1.5">
            {(["pastors", "team"] as Audience[]).map((a) => (
              <button
                key={a}
                type="button"
                aria-pressed={audience === a}
                onClick={() => setAudience(a)}
                className={cn(
                  "min-h-12 flex-1 rounded-xl px-3 text-[15px] font-semibold transition-colors",
                  audience === a ? "bg-ink text-ivory" : "text-[#3b2f43]",
                )}
              >
                {a === "pastors" ? "Pastors only" : "The prayer team"}
              </button>
            ))}
          </div>
          <p className="mt-2.5 text-sm text-[#6d6275]">{audienceNotes[audience]}</p>
        </fieldset>
      )}

      {status === "error" && (
        <p className="text-[15px] font-semibold text-[#a3123a]" role="alert">
          Sorry, that didn't send. Please try again, or message us on WhatsApp.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="pill pill-violet self-start disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send my prayer request"}
      </button>
    </form>
  );
};

export default PrayerForm;
