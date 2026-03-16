import { Car, Utensils, Scissors, Hammer, Drill, Factory } from 'lucide-react';

const industries = [
  { name: "Manufacturing plants", icon: <Factory className="w-10 h-10" /> },
  { name: "Automotive workshops", icon: <Car className="w-10 h-10" /> },
  { name: "Food processing", icon: <Utensils className="w-10 h-10" /> },
  { name: "Textile industry", icon: <Scissors className="w-10 h-10" /> },
  { name: "Engineering factories", icon: <Hammer className="w-10 h-10" /> },
  { name: "Fabrication workshops", icon: <Drill className="w-10 h-10" /> },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">Our compressors power operations across a diverse range of industrial sectors in India.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-border flex flex-col items-center text-center gap-4 hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="text-primary group-hover:text-accent">
                {ind.icon}
              </div>
              <span className="font-bold text-sm text-primary">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}