import Button from "@/components/ui/button";

function Icon({
  name,
  className = "",
}: {
  name: "public" | "alternate_email" | "share";
  className?: string;
}) {
  const common = `inline-block ${className}`;

  if (name === "alternate_email") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M16 8a4 4 0 10-7.6 1.7M8 12a4 4 0 104.7-3.9M21 12a9 9 0 11-3.3-7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "share") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M15 8a3 3 0 10-6 0v8a3 3 0 106 0"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7 12h10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  // public (globe-ish)
  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 w-full rounded-t-[3rem] mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-xl font-black text-white uppercase italic tracking-tighter">
            ELITE KINETIC
          </div>
          <p className="body-lg font-inter text-neutral-400">
            Superior biomechanics, data-driven results, and an atmosphere built for the relentless.
            Join the forge today.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-fixed-dim transition-colors"
              href="#"
            >
              <Icon name="public" className="w-5 h-5 text-white" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-fixed-dim transition-colors"
              href="#"
            >
              <Icon name="alternate_email" className="w-5 h-5 text-white" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-fixed-dim transition-colors"
              href="#"
            >
              <Icon name="share" className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-white uppercase text-sm tracking-widest">Navigation</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                Training Plans
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-white uppercase text-sm tracking-widest">Resources</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                The Forge Blog
              </a>
            </li>
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                Trainers API
              </a>
            </li>
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-neutral-500 hover:text-orange-400 transition-colors" href="#">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-white uppercase text-sm tracking-widest">Newsletter</h5>
          <p className="text-neutral-500 text-sm">
            Get performance engineering tips and class updates directly in your inbox.
          </p>
          <div className="flex">
            <input
              className="bg-neutral-800 border-none rounded-l-xl px-4 py-2 w-full text-white text-xs"
              placeholder="EMAIL"
              type="email"
            />
            <Button className="kinetic-gradient px-4 rounded-r-xl font-bold text-xs uppercase">
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-600 text-xs font-bold tracking-widest uppercase">
          © 2024 ELITE KINETIC. ENGINEERED FOR PERFORMANCE.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-600">
          <a href="#">Security</a>
          <a href="#">Compliance</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

