import Image from "next/image";

import Reciprocating from "@/assets/compressor.webp";
import ScrewCompressor from "@/assets/screw-compressor.webp";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

// ✅ Client Logos (External URLs)
const clients = [
  {
    name: "MRF Tyres",
    logo: "https://www.bac-compressors.com/images/customer-images/mrf-logo.webp",
  },
  {
    name: "Can-Pack",
    logo: "https://www.bac-compressors.com/images/customer-images/can-pack-logo-sa.webp",
  },
  {
    name: "Schlumberger Asia",
    logo: "https://www.bac-compressors.com/images/customer-images/slb-logo.webp",
  },
  {
    name: "IDEX Pumps (Ireland)",
    logo: "https://www.bac-compressors.com/images/customer-images/idex-corporation-logo.webp",
  },
  {
    name: "Tata Hitachi",
    logo: "https://www.bac-compressors.com/images/customer-images/tata-hitachi-logo.webp",
  },
  {
    name: "KYB Conmat",
    logo: "https://www.bac-compressors.com/images/customer-images/kyb-conmat-logo.webp",
  },
  {
    name: "CRI Pumps",
    logo: "https://www.bac-compressors.com/images/customer-images/cri-pumps-logo.webp",
  },
  {
    name: "Greaves Cotton Limited",
    logo: "https://www.bac-compressors.com/images/customer-images/greaves-cotton-logo.webp",
  },
  {
    name: "Schwing Stetter",
    logo: "https://www.bac-compressors.com/images/customer-images/schwing-stetter-logo.webp",
  },
  {
    name: "Indo Shell Cast",
    logo: "https://www.bac-compressors.com/images/customer-images/indo-shell-cast-logo.webp",
  },
  {
    name: "Wasan Toyota",
    logo: "https://www.bac-compressors.com/images/customer-images/toyota-logo.webp",
  },
  {
    name: "Bharat Petroleum",
    logo: "https://www.bac-compressors.com/images/customer-images/bharat-petroleum-logo.webp",
  },
  // {
  //   name: "HP",
  //   logo: "https://www.bac-compressors.com/images/customer-images/hp-logo.webp",
  // },
];

// ✅ Products Data
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
      "Price: ₹2,00,000 – ₹10,00,000+",
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
      "Price: ₹50,000 – ₹2,00,000",
    ],
    image: Reciprocating,
    ctaText: "Get Quote",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-background">

      {/* ✅ Trusted Clients Section */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Trusted by Leading Businesses Across India
          </h2>

          {/* Logo Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center bg-white/60 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                />

                {/* Hover Name */}
                <span className="text-xs mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Product Section */}
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

                {/* Overlay */}
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
                <Button className="w-full py-6 font-bold bg-red-600" asChild>
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