import Image from "next/image";

import Card from "@/components/ui/card";

export default function TrainersSection() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline font-black text-5xl uppercase italic mb-16 text-center">
          The <span className="text-primary-fixed-dim">Engineers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group relative overflow-hidden rounded-xl bg-surface-container">
            <div className="relative w-full h-[450px]">
              <Image
                alt="Trainer Name"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5abEyDSeS3ZO4qaY2k06ELnB0-Vh1TE4PhxB2lX8lgXQbj3-f9j_eQIFlL38KWEd8t4YD8VAg5Iz9hmxFq1nAS5A35NJF6UlVZNXpPGLD0fc6LvvIcAU3XCEeOdANhFanc0rYiaKXoN2VRiyZe7cI7wEQYfB9-vZWr5M0-leQR61vsJvLXvcdLNpw7Dl2RJK1MlhrMHiS3GTuvkGQ31wtbI6P8F2NSp_W-HcgYVdqldQfp0TDJLoZqxNoJb4SACAAoiwbS-nJRYty"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary-fixed-dim font-bold uppercase text-xs tracking-widest mb-1">
                Lead Strength Coach
              </p>
              <h4 className="text-2xl font-black uppercase mb-2">Marcus Vance</h4>
              <div className="flex items-center gap-4 text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <span>8+ Yrs Exp.</span>
                <span className="w-1 h-1 bg-primary-fixed-dim rounded-full"></span>
                <span>IFBB Pro</span>
              </div>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-xl bg-surface-container">
            <div className="relative w-full h-[450px]">
              <Image
                alt="Trainer Name"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAuGa_LIyX0hq5ICseDYUfeI-byLgp2ATQ3zqPcEwmi3AFosMinjBDGfH2YAMS9XoTLVgVW8qJtP__sX7tl2HIApY9Z2UJUBK3v9nlLthEPyh5kKA-sDUg2mDyJ5hdHRWJlrxdnDi2JxoJqKKxw2F7Z9VnQz6m453R8rdNOD5XMRGcAqLCbI5Jji47mCaBciu3MrDa4-ZcoqzAvt6mTQmWRV2IsOi90iWbtZq0jfDzahuPgtt48dWeVHtdDTSSLcqcFLeTJCTiU7EC"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary-fixed-dim font-bold uppercase text-xs tracking-widest mb-1">
                Yoga &amp; Mobility
              </p>
              <h4 className="text-2xl font-black uppercase mb-2">Elena Rossi</h4>
              <div className="flex items-center gap-4 text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <span>6+ Yrs Exp.</span>
                <span className="w-1 h-1 bg-primary-fixed-dim rounded-full"></span>
                <span>Flexibility Specialist</span>
              </div>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-xl bg-surface-container">
            <div className="relative w-full h-[450px]">
              <Image
                alt="Trainer Name"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfoXdQmld4xCQ9fVv2wLQoc-6VxCQ3F-H0JECv0d17Zteu9tNCzP8sBnqap8M1pvA84HhaBzU1_0mBfd0VH_bAZCTq-_a6scm-vHjaoSh0DRFVrBtqlUpE5pXIAvgDw-sY9qAP_z7Aa1uB3mVWWThQb59eVZyHuO0_ozLcTR9i_9jz-JTwc2WP8UyqmxEuHAHCI5bFYzuL3FelzqSOjqz4WuxEFK9D2XQeva5vOBd7VTFhg85MYo-sAGLfQxBJFT0pNdh-8ysd8HPZ"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary-fixed-dim font-bold uppercase text-xs tracking-widest mb-1">
                Conditioning Specialist
              </p>
              <h4 className="text-2xl font-black uppercase mb-2">David Kovar</h4>
              <div className="flex items-center gap-4 text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <span>10+ Yrs Exp.</span>
                <span className="w-1 h-1 bg-primary-fixed-dim rounded-full"></span>
                <span>HIIT Master</span>
              </div>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-xl bg-surface-container">
            <div className="relative w-full h-[450px]">
              <Image
                alt="Trainer Name"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPrrHGVbYmEG5V6QG81i0Vx7UdAB2Y50ocNUuITKiPD5cf-dZXY66aT8BGH8kFF1RNEDQq5F-QlDm3W7nXIS2p4SBdY-ZFd-qJyle57qiUU-QFiboOZIe0XBSEESPRprxb02HV3r0UnQSbiNrzE2k4Ufm91a-ZG5db80Wwb3tUVyQRV10A97Bc0FInaWLVSLfKryfTjqdWK3JzRouk7ds_s0VA-t8u6XBYg5WpKxe6xBLqwNC1v2BB_GOUJtWmnzM3v4qdxpWbeuIs"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary-fixed-dim font-bold uppercase text-xs tracking-widest mb-1">
                Body Composition
              </p>
              <h4 className="text-2xl font-black uppercase mb-2">Sasha Mendez</h4>
              <div className="flex items-center gap-4 text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <span>7+ Yrs Exp.</span>
                <span className="w-1 h-1 bg-primary-fixed-dim rounded-full"></span>
                <span>Nutritionist</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

