import Button from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 dark:bg-neutral-950/60 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4 w-full">
        <div className="text-2xl font-black italic tracking-tighter text-orange-500 dark:text-orange-500 font-headline uppercase">
          ELITE KINETIC
        </div>
        <div className="hidden md:flex items-center space-gap-8 gap-8">
          <a
            className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1 font-label text-sm tracking-widest uppercase"
            href="#"
          >
            Home
          </a>
          <a
            className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors font-label text-sm tracking-widest uppercase"
            href="#"
          >
            About
          </a>
          <a
            className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors font-label text-sm tracking-widest uppercase"
            href="#"
          >
            Services
          </a>
          <a
            className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors font-label text-sm tracking-widest uppercase"
            href="#"
          >
            Plans
          </a>
          <a
            className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors font-label text-sm tracking-widest uppercase"
            href="#"
          >
            Trainers
          </a>
          <a
            className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors font-label text-sm tracking-widest uppercase"
            href="#"
          >
            Contact
          </a>
        </div>
        <Button className="kinetic-gradient text-on-primary-fixed font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 uppercase text-xs tracking-tighter">
          Join Now
        </Button>
      </div>
    </nav>
  );
}

