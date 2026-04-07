import Image from "next/image";

// import Reciprocating from "@/assets/compressor.webp";
// import ScrewCompressor from "@/assets/screw-compressor.webp";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle2 } from "lucide-react";

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


export default function Clients() {
  return (
    <section className="pt-20 bg-background">

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
                  width={200}
                  height={80}
                  className="object-contain h-25 w-auto group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                />

                {/* Hover Name */}
                {/* <span className="text-xs mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition text-center">
                  {client.name}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}