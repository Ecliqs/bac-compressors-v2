"use client"
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';
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
        <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 font-bold" asChild>
          <a href="#inquiry">
            <MessageSquare className="w-4 h-4" />
            Request Price
          </a>
        </Button>
        <Button variant="outline" className="flex-1 border-primary text-primary gap-2 font-bold" asChild>
          <a href="tel:+919876543210">
            <Phone className="w-4 h-4" />
            Call Expert
          </a>
        </Button>
      </div>
    </div>
  );
}