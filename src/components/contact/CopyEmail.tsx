import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * The address is a mailto link first: that is what most people want and it
 * works without JavaScript. Copying is a separate, clearly labelled button
 * beside it, not a trick hidden on the link itself.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
      <a
        href={`mailto:${email}`}
        className="display break-all text-[clamp(1.5rem,7vw,2.5rem)] underline decoration-rule decoration-1 underline-offset-[0.2em] transition-colors hover:text-vermilion hover:decoration-vermilion lg:text-[clamp(2rem,3.4vw,3.25rem)]"
      >
        {email}
      </a>

      <button
        type="button"
        onClick={copy}
        className="group inline-flex shrink-0 items-center gap-2 border-b border-rule pb-1 font-mono text-label uppercase text-graphite transition-colors hover:border-vermilion hover:text-vermilion"
      >
        {copied ? (
          <Check aria-hidden className="h-3.5 w-3.5 text-vermilion" />
        ) : (
          <Copy aria-hidden className="h-3.5 w-3.5" />
        )}
        {copied ? "Copied" : "Copy"}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
