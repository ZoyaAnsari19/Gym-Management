import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

function Icon({
  name,
  className = "",
}: {
  name: "check_circle" | "cancel";
  className?: string;
}) {
  const common = `inline-block ${className}`;

  if (name === "cancel") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline font-black text-5xl uppercase italic mb-6">
            Choose Your <span className="text-primary-fixed-dim">Tier</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Investment in yourself is the only return that is guaranteed. Pick the level that
            matches your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col">
            <span className="text-on-surface-variant font-bold uppercase tracking-widest text-xs mb-4">
              Standard Entry
            </span>
            <h3 className="font-headline font-bold text-3xl uppercase mb-6">Basic</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-black text-white">$49</span>
              <span className="text-on-surface-variant ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                24/7 Access
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                All Machine Access
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Locker Room &amp; Showers
              </li>
              <li className="flex items-center gap-3 text-neutral-600">
                <Icon name="cancel" className="text-neutral-600 w-5 h-5" />{" "}
                Personal Training
              </li>
            </ul>
            <Button className="w-full border border-outline-variant py-4 rounded-xl font-bold uppercase hover:bg-white hover:text-black transition-colors">
              Select Plan
            </Button>
          </Card>

          <Card className="bg-surface-container-high p-10 rounded-xl border-2 border-primary-fixed-dim relative flex flex-col transform scale-105 shadow-2xl shadow-primary-dim/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 kinetic-gradient text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
              Most Popular
            </div>
            <span className="text-primary-fixed-dim font-bold uppercase tracking-widest text-xs mb-4">
              Elite Performer
            </span>
            <h3 className="font-headline font-bold text-3xl uppercase mb-6">Standard</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-black text-white">$89</span>
              <span className="text-on-surface-variant ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-on-surface">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Everything in Basic
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                2 Personal Sessions/mo
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Nutritional Blueprint
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Group Class Pass
              </li>
            </ul>
            <Button className="w-full kinetic-gradient py-4 rounded-xl font-bold uppercase text-white hover:opacity-90 transition-opacity">
              Engage Now
            </Button>
          </Card>

          <Card className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col">
            <span className="text-on-surface-variant font-bold uppercase tracking-widest text-xs mb-4">
              Pro Athlete
            </span>
            <h3 className="font-headline font-bold text-3xl uppercase mb-6">Premium</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-black text-white">$149</span>
              <span className="text-on-surface-variant ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Everything in Standard
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Unlimited PT Sessions
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Recovery Suite Access
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-primary-fixed-dim w-5 h-5" />{" "}
                Guest Passes (3/mo)
              </li>
            </ul>
            <Button className="w-full border border-outline-variant py-4 rounded-xl font-bold uppercase hover:bg-white hover:text-black transition-colors">
              Select Plan
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

