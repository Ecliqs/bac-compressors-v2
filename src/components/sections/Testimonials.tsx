"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: "Durable compressors that work reliably in our manufacturing unit. We've been using their reciprocating model for over 5 years without major downtime.",
    author: "Rajesh Kumar",
    company: "Standard Gears Ltd."
  },
  {
    text: "Good performance and strong after-sales support. Their service team in Pune is very responsive and knowledgeable about screw compressor maintenance.",
    author: "Amit Sharma",
    company: "Techno Fabricators"
  },
  {
    text: "BAC Compressors are significantly more efficient than our previous equipment. Our electricity bills have dropped by 15% since upgrading to their screw units.",
    author: "Sanjay Patel",
    company: "Patel Food Processing"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary">What Our Clients Say</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {reviews.map((rev, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-none bg-white shadow-md">
                    <CardContent className="p-12 text-center flex flex-col items-center">
                      <Quote className="w-12 h-12 text-accent/20 mb-6" />
                      <p className="text-xl italic text-muted-foreground mb-8">"{rev.text}"</p>
                      <div>
                        <div className="font-bold text-primary">{rev.author}</div>
                        <div className="text-sm text-accent font-semibold">{rev.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white" />
              <CarouselNext className="bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}