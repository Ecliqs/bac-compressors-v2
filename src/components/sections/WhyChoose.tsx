import { Shield, Battery, Gauge, Wrench, HelpCircle, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-10 h-10 text-accent" />,
    title: "Long Lasting Components",
    desc: "Built with heavy-duty cast iron and high-grade materials for extreme durability."
  },
  {
    icon: <Battery className="w-10 h-10 text-accent" />,
    title: "Energy Efficient Design",
    desc: "Optimized air-ends and motor designs to minimize electricity consumption."
  },
  {
    icon: <Gauge className="w-10 h-10 text-accent" />,
    title: "Reliable Performance",
    desc: "Consistent air pressure and delivery even in harsh factory conditions."
  },
  {
    icon: <Wrench className="w-10 h-10 text-accent" />,
    title: "Low Maintenance",
    desc: "Designed for easy accessibility and reduced frequency of service interventions."
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-accent" />,
    title: "Nationwide Support",
    desc: "Strong dealer and service network across India for fast response."
  },
  {
    icon: <MapPin className="w-10 h-10 text-accent" />,
    title: "Indian Factory Conditions",
    desc: "Engineered specifically for the dust and temperature levels of Indian factories."
  }
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Why Choose BAC Compressors?</h2>
          <p className="text-lg text-muted-foreground">More than just a machine, it's a partner in your factory's productivity.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}