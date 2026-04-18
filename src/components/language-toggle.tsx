"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-[#d6dbe1] bg-[#fbfcfd] p-1 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
      {(["en", "fr"] as const).map((value) => {
        const active = value === locale;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
              active
                ? "bg-[#1f2937] text-[#f8fafc]"
                : "text-[#5f6b78] hover:bg-[#eef2f6]"
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
