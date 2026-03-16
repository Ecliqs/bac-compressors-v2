import { Award, Factory, Users, Settings, Landmark } from 'lucide-react';

const markers = [
  {
    icon: <Award className="w-8 h-8" />,
    label: "45+ Years",
    sub: "Manufacturing Experience"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    label: "8000+",
    sub: "Compressors Annually"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    label: "In-House",
    sub: "Foundry & CNC"
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    label: "ISO Quality",
    sub: "Manufacturing"
  },
  {
    icon: <Users className="w-8 h-8" />,
    label: "Strong Network",
    sub: "Dealers Across India"
  }
];

export default function TrustMarkers() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
          {markers.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
              <div className="p-3 rounded-xl bg-white/10 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <div className="text-xl font-bold font-headline">{item.label}</div>
                <div className="text-sm text-primary-foreground/70">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}