import Image from "next/image";

function Icon({
  name,
  className = "",
}: {
  name: "fitness_center" | "monitoring" | "arrow_forward";
  className?: string;
}) {
  const common = `inline-block ${className}`;

  if (name === "arrow_forward") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M13 5l7 7-7 7M4 12h15"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "monitoring") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 19V5m4 14V9m4 10V12m4 7V7m4 12V10"
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
        d="M4 10v4m16-4v4M7 9v6m10-6v6M9 12h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-fixed-dim/10 rounded-full blur-3xl"></div>
          <div className="rounded-xl w-full h-[600px] relative z-10 overflow-hidden">
            <Image
              alt="Trainer"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbzgO17Ve6_aiErFoCPEhUyzVsSEQvwWhNAWy17PauXziEC0-hByoPBJoTjbBAxpQT0-VnH9_hTsFyQdOREIRKiCRI977hVEG2sD-1QmQuMXti8C4OHhEhtE00PcYWW4Ue0UnxF6iCPrMHHie7N7-_bqNO_MgQ798Gk2xbssUEpo_w-uSSe4GeN2XTl_fKOZuLNeKY8RosDzj9lowkaF5OdWowq6M8rJoQofAsmcXqtR1ZV8NCdj5tAHmOVTbufn0LPvo9syfOJB3o"
            />
          </div>
          <div className="absolute bottom-8 right-8 glass-panel p-8 rounded-xl z-20 border border-outline-variant/20">
            <span className="text-primary-fixed-dim font-black text-5xl">15+</span>
            <p className="text-on-surface font-bold uppercase tracking-tight">
              Expert Performance <br />
              Engineers
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-headline font-black text-5xl uppercase italic leading-none">
            The <span className="text-primary-fixed-dim">Kinetic Forge</span> <br /> Concept
          </h2>
          <div className="w-20 h-1 bg-primary-fixed-dim"></div>
          <p className="text-on-secondary-container text-lg leading-relaxed">
            At Elite Kinetic, we don&apos;t just train; we engineer performance. Our facility is a
            &quot;Forge&quot; where willpower meets state-of-the-art biomechanics. We&apos;ve
            stripped away the fluff of commercial gyms to provide a high-octane atmosphere focused
            on results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="flex items-start gap-4">
              <Icon name="fitness_center" className="text-primary-fixed-dim w-8 h-8" />
              <div>
                <h4 className="font-bold text-white uppercase text-sm mb-1">Elite Equipment</h4>
                <p className="text-on-surface-variant text-sm">
                  Competition-grade racks and biometric tracking.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="monitoring" className="text-primary-fixed-dim w-8 h-8" />
              <div>
                <h4 className="font-bold text-white uppercase text-sm mb-1">Data Driven</h4>
                <p className="text-on-surface-variant text-sm">
                  Personalized analytics for every single lift.
                </p>
              </div>
            </div>
          </div>
          <button className="text-primary font-bold uppercase tracking-widest flex items-center gap-2 group">
            Our Mission Statement
            <Icon
              name="arrow_forward"
              className="w-6 h-6 group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

