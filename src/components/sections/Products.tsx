import Image from "next/image";

import Reciprocating from "@/assets/compressor.webp";
import ScrewCompressor from "@/assets/screw-compressor.webp";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const products = [
  {
    id: "screw",
    title: "Rotary Screw Compressor VFD Equipped",
    description:
      "Energy-efficient rotary screw compressors designed for continuous industrial operations requiring high air volume and reliable performance.",
    features: [
      "Continuous operation capability",
      "High air output",
      "Lower noise levels",
      "Lower maintenance cost",
    ],
    image: ScrewCompressor,
    ctaText: "Request Price",
  },
  {
    id: "reciprocating",
    title: "Reciprocating Piston Compressors",
    description:
      "Heavy-duty piston compressors designed for demanding industrial environments. Built with high-quality cast iron components and precision machining for durability and long service life.",
    features: [
      "Heavy duty cast iron construction",
      "Suitable for workshops and small factories",
      "Low initial investment",
      "Reliable performance in harsh conditions",
    ],
    image: Reciprocating,
    ctaText: "Get Quote",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Industrial Product Range
          </h2>

          <p className="text-lg text-muted-foreground">
            Engineering excellence in every unit. Choose the compressor type
            that best fits your operational requirements.
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button className="w-full py-6 font-bold" asChild>
                  <a href="#inquiry">{product.ctaText}</a>
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}