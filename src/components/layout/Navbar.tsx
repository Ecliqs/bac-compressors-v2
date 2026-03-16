import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Air Solutions Logo"
            width={130}
            height={100}
          />
          {/* <span className="font-headline font-bold text-xl tracking-tight text-primary">
            Air Solutions
          </span> */}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#products" className="hover:text-accent transition-colors">Products</Link>
          <Link href="#education" className="hover:text-accent transition-colors">Compare</Link>
          <Link href="#industries" className="hover:text-accent transition-colors">Industries</Link>
          {/* <Link href="#advisor" className="hover:text-accent transition-colors">AI Advisor</Link> */}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-primary text-primary">
            <PhoneCall className="w-4 h-4" />
            <span className="font-bold">+91  63910 10314</span>
          </Button>

          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#inquiry">Get Quote</a>
          </Button>
        </div>

      </div>
    </nav>
  );
}