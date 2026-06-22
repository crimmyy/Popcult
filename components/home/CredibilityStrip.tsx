import { locationCount, stateCount } from "@/data/locations";

const facts = [
  { value: String(locationCount), label: "Locations" },
  { value: String(stateCount), label: "States" },
  { value: "Major", label: "Mall destinations" },
  {
    value: "Anime • Gundam • Sanrio • Figures • Plush • Gifts",
    label: "In store",
  },
];

export function CredibilityStrip() {
  return (
    <section aria-label="Pop Cult at a glance" className="bg-[#171717] text-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/15 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-[0.55fr_0.55fr_0.9fr_2fr] lg:px-8">
        {facts.map((fact) => (
          <div key={fact.label} className="px-5 py-6 first:pl-0 sm:py-7">
            <p className="text-xl font-black tracking-tight text-[#ffe200]">
              {fact.value}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
