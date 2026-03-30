import Image from "next/image";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Elite Gym"
          className="object-cover opacity-40"
          fill
          preload
          sizes="100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZLrBAssEhjrGEXA7jua5zjGB7Pvy54DE1G46JgQIGZSnQA0b0IClMSzBSk28uErukB6xxCyN9_gCsFcVh7wIdXfOZJp--7oQKJTj-8y-8Y-98_8WNsayWf07QmzL-AjUTLl0lMUMTObbpAlysTL5tyg0_Xg75ZzePm6K4gAatLh9RUQXjwqNqv3h5BpGk900WM-NpOABs5LycuoYDxl6RHL5kf81b8C0PKv574osjIpX3aGIPhwE_jzdKLkGBCAOmYMRkdtbczDLm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center mt-20">
        <Badge className="inline-block px-4 py-1 rounded-full bg-primary-fixed-dim/20 text-primary-fixed-dim font-bold text-xs uppercase tracking-widest mb-6">
          Redefine Your Limits
        </Badge>
        <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tighter mb-8 italic">
          Transform <br />
          <span className="text-primary-fixed-dim">Your Body</span> <br />
          Today
        </h1>
        <p className="text-on-secondary-container text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-medium">
          Engineered for those who demand more. Join the kinetic forge and sculpt your peak physical
          form.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button className="kinetic-gradient text-white font-bold px-10 py-5 rounded-xl text-lg hover:scale-105 transition-transform duration-300 w-full md:w-auto uppercase shadow-lg shadow-primary-dim/20">
            Join The Elite
          </Button>
          <Button className="bg-surface-container-highest border border-outline-variant/30 text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-surface-bright transition-colors w-full md:w-auto uppercase">
            View Training Plans
          </Button>
        </div>
      </div>
    </section>
  );
}

