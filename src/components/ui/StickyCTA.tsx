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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t shadow-lg 
                    md:bg-transparent md:border-0 md:bottom-8 md:right-8 md:left-auto md:max-w-xs">

      {/* Wrapper */}
      <div className="flex flex-col gap-3 md:bg-white md:p-4 md:rounded-xl md:shadow-2xl">

        {/* Request Price (Full Width Always) */}
        <Button 
          className="w-full bg-red-600 text-white hover:bg-red-700 font-semibold py-3 text-sm"
          asChild
        >
          <a href="#inquiry" className="flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Request Price
          </a>
        </Button>

        {/* Call + WhatsApp */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">

          {/* Call */}
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary font-semibold py-3 text-sm"
            asChild
          >
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call
            </a>
          </Button>

          {/* WhatsApp */}
          <Button 
            className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold py-3 text-sm"
            asChild
          >
            <a 
              href="https://wa.me/919443316946?text=Hi%20I%20want%20price%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>

        </div>

      </div>
    </div>
  );
}