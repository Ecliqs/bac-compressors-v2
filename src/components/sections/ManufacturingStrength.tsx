import Image from 'next/image';
import Engineering from '@/assets/engineering.webp';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Cog, Zap, Target, ThermometerSun, Users } from 'lucide-react';

const points = [
  { icon: <ThermometerSun className="w-5 h-5" />, text: "In-house foundry and casting" },
  { icon: <Target className="w-5 h-5" />, text: "CNC machining centers" },
  { icon: <Cog className="w-5 h-5" />, text: "Precision manufacturing" },
  { icon: <Zap className="w-5 h-5" />, text: "Strict quality testing" },
  { icon: <Users className="w-5 h-5" />, text: "Experienced engineering team" },
];

export default function ManufacturingStrength() {
  const factoryImg = PlaceHolderImages.find(i => i.id === 'factory-floor');

  return (
    <section className="py-20 bg-red-600 text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
            src={Engineering}
            alt="Air Solutions Logo"
            width={1000}
            height={1000}
          />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Engineering Capability & Manufacturing Strength</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              At BAC Air Compressors, we don't just assemble; we engineer. Our vertically integrated manufacturing facility ensures that every component meets the highest standards of precision and durability.
            </p>
            <div className="grid gap-4">
              {points.map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-accent">{p.icon}</div>
                  <span className="font-bold tracking-wide uppercase text-sm">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}