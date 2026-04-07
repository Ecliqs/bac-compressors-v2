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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t shadow-lg md:bg-transparent md:border-0 md:bottom-8 md:right-8 md:left-auto md:max-w-xs">
      
      <div className="flex flex-col md:flex-col gap-3">

        {/* Request Price */}
        <Button 
          className="w-full bg-red-600 text-white hover:bg-red-700 gap-2 font-semibold py-3 text-sm"
          asChild
        >
          <a href="#inquiry">
            <MessageSquare className="w-5 h-5" />
            Request Price
          </a>
        </Button>

        {/* Call */}
        <Button 
          variant="outline" 
          className="w-full border-primary text-primary gap-2 font-semibold py-3 text-sm"
          asChild
        >
          <a href="tel:+919876543210">
            <Phone className="w-5 h-5" />
            Call Expert
          </a>
        </Button>

        {/* WhatsApp */}
        <Button 
          className="w-full bg-green-600 text-white hover:bg-green-700 gap-2 font-semibold py-3 text-sm"
          asChild
        >
          <a 
            href="https://wa.me/919876543210?text=Hi%20I%20want%20price%20details"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>

      </div>
    </div>
  );
}