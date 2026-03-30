import Image from "next/image";

import Card from "@/components/ui/card";

function Stars() {
  return (
    <div className="flex gap-1 text-primary-fixed-dim mb-6">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
      </svg>
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
      </svg>
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
      </svg>
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
      </svg>
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
      </svg>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline font-black text-5xl uppercase italic mb-16 text-center">
          Elite <span className="text-primary-fixed-dim">Feedback</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <Stars />
            <p className="text-on-surface text-lg italic mb-8">
              &quot;The atmosphere here is unlike any other gym. It&apos;s focused, intense, and
              professional. I&apos;ve seen more progress in 3 months than I did in 3 years
              elsewhere.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image
                  alt="Reviewer"
                  className="object-cover"
                  fill
                  sizes="48px"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2WV7eKXgenf8MBI7FWUDxTTOnoTol8l0mWXIulbiFIjZAIXPeZ0xYZIgbx2Oa8pw3axfDNmWSA7O_8i9uRaiFWdkLv2vsO23EjBpouVOXgSrvL3KzdTgUpJBBaC0lbejXzhbUywLaFVsuKVAFd1FVVDIZvQFytdU8fVJY14Pi831J-aPfjmnAn10XNoYYCfn5crxK1-7ADPJU88CV2FEee7PUpeKaS8xlDxxlXNakuv6ihZctUqc8ypjHJDQdSFv9PGLde1VuH2pD"
                />
              </div>
              <div>
                <h5 className="font-bold text-white uppercase text-sm">Sarah Jenkins</h5>
                <p className="text-on-surface-variant text-xs">Marathon Runner</p>
              </div>
            </div>
          </Card>

          <Card className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <Stars />
            <p className="text-on-surface text-lg italic mb-8">
              &quot;Elite Kinetic is a true forge. The trainers are top-tier and the equipment is
              always in perfect condition. Best investment I&apos;ve made for my health.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image
                  alt="Reviewer"
                  className="object-cover"
                  fill
                  sizes="48px"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd3ueK0NNtwypCUGiMg8vYOWePNbdZl4lRzStHY-2lcTKEYxupUFhjISalo6PemHQRoek0kXwQTYD3D3r-AkZ2fsWPOY-LQgaeu3L6MNe6JKYQ5ELAjlM1uWPV2WumR84Opyfg61cZdFb1EPPPo2Egrv8-kTaoXiXMabKXeYJZSr9Kr83kNR1Y53TUyojh89Qv-S7OTKzoFrUcThzXUwL-m22-RvwrwwZm5gpfRVgRXGX6QO7BQ3A7v_tCTcB7xUgmOhT6wMLq8hsQ"
                />
              </div>
              <div>
                <h5 className="font-bold text-white uppercase text-sm">James Peterson</h5>
                <p className="text-on-surface-variant text-xs">Corporate Executive</p>
              </div>
            </div>
          </Card>

          <Card className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <Stars />
            <p className="text-on-surface text-lg italic mb-8">
              &quot;The data-driven approach changed how I lift. Seeing the metrics every session
              keeps me motivated. Highly recommend the personal training program.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image
                  alt="Reviewer"
                  className="object-cover"
                  fill
                  sizes="48px"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV1tesAgl_Zdc-DG5PURhoz-5TjKZFh-KsuYHC7GA92ad5OKrFcUHjzNdy1fNAkjezd9TcEyjkCOgoC-vVdjJ_J4aE1QUOY4j_pHOP4Xtm2m-A_BkcPFUZugOWQJ6SCZUWk5_zBSEEEuOllmiGo4Ichxgoq1Qgq-yuoZvo27JvmRGs_K-Xb0FvSgunaTkv5BOV0SFq0YklmvHBopj6PNyy9v57_rE60rZxdR5nJKcFVq3GOvgdwOpD3FyDNJxB2Q_TNQE_C5Rt1XqF"
                />
              </div>
              <div>
                <h5 className="font-bold text-white uppercase text-sm">Mia Thorne</h5>
                <p className="text-on-surface-variant text-xs">Professional Athlete</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

