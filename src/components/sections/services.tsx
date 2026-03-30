import Card from "@/components/ui/card";

function Icon({
  name,
  className = "",
}: {
  name: "exercise" | "speed" | "weight" | "self_improvement";
  className?: string;
}) {
  const common = `inline-block ${className}`;

  if (name === "speed") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 7v6l4 2M4.5 19.5a9 9 0 1115 0"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "weight") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M9 7h6l1 2h-8l1-2Zm-2 2h10l2 12H5L7 9Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "self_improvement") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 7a3 3 0 100-6 3 3 0 000 6Zm0 0c-4.4 0-8 3-8 6.5C4 18 7.6 22 12 22s8-4 8-8.5C20 10 16.4 7 12 7Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  // exercise (dumbbell-ish)
  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
      <path
        d="M4 10v4m16-4v4M7 9v6m10-6v6M9 12h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline font-black text-5xl uppercase italic mb-4">
              Core <span className="text-primary-fixed-dim">Disciplines</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl">
              Specialized training programs designed to push your limits and achieve targeted
              physical breakthroughs.
            </p>
          </div>
          <button className="bg-surface-container-high px-8 py-4 rounded-full text-white font-bold hover:bg-surface-bright transition-colors uppercase text-xs tracking-widest">
            Explore All Programs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-highest transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-primary-fixed-dim/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Icon name="exercise" className="text-primary-fixed-dim w-10 h-10" />
            </div>
            <h3 className="font-headline font-bold text-2xl uppercase mb-4">Personal Training</h3>
            <p className="text-on-surface-variant mb-8">
              One-on-one sessions with masters of human performance engineering.
            </p>
            <div className="h-1 w-0 bg-primary-fixed-dim group-hover:w-full transition-all duration-500"></div>
          </Card>

          <Card className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-highest transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-primary-fixed-dim/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Icon name="speed" className="text-primary-fixed-dim w-10 h-10" />
            </div>
            <h3 className="font-headline font-bold text-2xl uppercase mb-4">Fat Metabolism</h3>
            <p className="text-on-surface-variant mb-8">
              Science-backed protocols to optimize your body composition efficiently.
            </p>
            <div className="h-1 w-0 bg-primary-fixed-dim group-hover:w-full transition-all duration-500"></div>
          </Card>

          <Card className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-highest transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-primary-fixed-dim/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Icon name="weight" className="text-primary-fixed-dim w-10 h-10" />
            </div>
            <h3 className="font-headline font-bold text-2xl uppercase mb-4">Hypertrophy</h3>
            <p className="text-on-surface-variant mb-8">
              High-intensity strength training focused on maximum muscle growth.
            </p>
            <div className="h-1 w-0 bg-primary-fixed-dim group-hover:w-full transition-all duration-500"></div>
          </Card>

          <Card className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-highest transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-primary-fixed-dim/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Icon name="self_improvement" className="text-primary-fixed-dim w-10 h-10" />
            </div>
            <h3 className="font-headline font-bold text-2xl uppercase mb-4">Kinetic Flow</h3>
            <p className="text-on-surface-variant mb-8">
              Advanced mobility and recovery sessions to maintain peak flexibility.
            </p>
            <div className="h-1 w-0 bg-primary-fixed-dim group-hover:w-full transition-all duration-500"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}

