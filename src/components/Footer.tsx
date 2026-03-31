import { Globe, Share2, Smartphone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8 border-t border-outline-variant/10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-2">
          <span className="text-xl font-bold text-on-background mb-4 block">Street Sense India</span>
          <p className="text-on-surface-variant max-w-xs leading-relaxed mb-6">
            Empowering citizens to become active guardians of Indian roads through technology and accountability.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-4">Platform</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Traffic Laws</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Violations Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-4">Support</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">RTO Directory</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-4">Download</h4>
          <div className="flex flex-col gap-2">
            <button className="bg-black text-white p-2 px-4 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Smartphone className="w-5 h-5" />
              <div className="text-[10px] text-left leading-none">Download on the <div className="text-sm font-bold">App Store</div></div>
            </button>
            <button className="bg-black text-white p-2 px-4 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Smartphone className="w-5 h-5" />
              <div className="text-[10px] text-left leading-none">Get it on <div className="text-sm font-bold">Google Play</div></div>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-outline-variant/10 text-center text-outline flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Street Sense India. A Civic Sentinel Initiative.</p>
        <div className="flex gap-6">
          <Globe className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <Smartphone className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <ShieldCheck className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </footer>
  );
}
