"use client"
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:bottom-8 md:right-8 md:left-auto md:max-w-xs transition-all animate-in slide-in-from-bottom-5">
      <div className="bg-white rounded-xl shadow-2xl border p-4 flex md:flex-col gap-3">

        {/* Request Price */}
        <Button className="flex-1 bg-red-600 text-white hover:bg-red-700 gap-2 font-bold" asChild>
          <a href="#inquiry">
            <MessageSquare className="w-4 h-4" />
            Request Price
          </a>
        </Button>

        {/* Call */}
        <Button variant="outline" className="flex-1 border-primary text-primary gap-2 font-bold" asChild>
          <a href="tel:+919876543210">
            <Phone className="w-4 h-4" />
            Call Expert
          </a>
        </Button>

        {/* WhatsApp (Lucide Style) */}
        <Button className="flex-1 bg-green-600 text-white hover:bg-green-700 gap-2 font-bold" asChild>
          <a 
            href="https://wa.me/919876543210?text=Hi%20I%20want%20price%20details"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </Button>

      </div>
    </div>
  );
}