import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold font-headline max-w-4xl mx-auto">
          Request a Customized Quote for Your Industrial Air Compressor Needs
        </h2>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Over 45+ years of engineering expertise is just a phone call away. Get the best pricing for heavy-duty industrial units.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-xl font-bold" asChild>
            <a href="#inquiry">Get Quote</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white bg-blue-500 hover:bg-white hover:text-primary px-10 py-7 text-xl font-bold gap-3" asChild>
            <a href="tel:+919876543210">
              <PhoneCall className="w-6 h-6" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}