import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className=" bg-white rounded flex items-center justify-center">
               <Image
                           src={logo}
                           alt="Air Solutions Logo"
                           width={200}
                           height={200}
                         />
              </div>
              {/* <span className="font-headline font-bold text-lg text-white">Air Solutions</span> */}
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Industrial air compressor manufacturers since 1980. Engineering excellence for the heavy duty factory floor.
            </p>
          </div>
          {/* <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><Link href="#products" className="hover:text-accent">Reciprocating Compressors</Link></li>
              <li><Link href="#products" className="hover:text-accent">Screw Compressors</Link></li>
              <li><Link href="#products" className="hover:text-accent">Custom Air Solutions</Link></li>
              <li><Link href="#products" className="hover:text-accent">OEM Spares</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><Link href="#" className="hover:text-accent">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent">Manufacturing Facility</Link></li>
              <li><Link href="#" className="hover:text-accent">Service Network</Link></li>
              <li><Link href="#" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><Link href="#" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent">Cookie Policy</Link></li>
            </ul>
          </div> */}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} BAC Air Compressors. All rights reserved.</p>
          <p>ISO 9001:2015 Certified Manufacturing</p>
        </div>
      </div>
    </footer>
  );
}