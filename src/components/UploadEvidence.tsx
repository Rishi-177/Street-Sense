import { Camera, MapPin, Upload, Verified, Star, CloudUpload, Image as ImageIcon, Video, Timer, ChevronRight, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function UploadEvidence({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-32">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Step 1 of 3: Evidence</span>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-background tracking-tight">Upload Evidence</h1>
          <p className="text-on-surface-variant max-w-xl text-lg">Submit clear visual proof to help our Civic Sentinel AI process the violation. High-quality reports earn up to ₹500 in rewards.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
          <div className="w-16 h-1 bg-primary-fixed rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-primary"></div>
          </div>
          <div className="w-12 h-12 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-bold">2</div>
          <div className="w-16 h-1 bg-surface-container-highest rounded-full"></div>
          <div className="w-12 h-12 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-bold">3</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-8 rounded-[2rem] space-y-8">
            <h3 className="text-xl font-headline font-bold text-on-background">Guidelines</h3>
            <div className="space-y-8">
              {[
                { icon: Camera, title: "1. Capture", desc: "Ensure the vehicle's license plate and the specific traffic violation are clearly visible in the frame." },
                { icon: MapPin, title: "2. Metadata", desc: "Our system will automatically extract GPS coordinates and the timestamp from your original file's EXIF data." },
                { icon: Upload, title: "3. Upload", desc: "Drag and drop high-resolution JPG, PNG, or MP4 files. Maximum file size allowed is 50MB." },
                { icon: Verified, title: "4. Verify", desc: "Review the AI-detected details like plate number and violation type before final submission." },
              ].map((g, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background mb-1">{g.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-outline-variant/20">
              <div className="bg-secondary/10 p-4 rounded-xl flex items-start gap-3">
                <Star className="text-secondary w-5 h-5 fill-current" />
                <div>
                  <p className="text-sm font-bold text-secondary">Earn Rewards</p>
                  <p className="text-xs text-on-surface-variant">Successful prosecutions reward you with credits redeemable for up to ₹500 in petrol vouchers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-48 rounded-[2rem] overflow-hidden group">
            <img 
              alt="Instructional Context" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBPrGuSgJQ1PhrzbnOiRMiH9Et09eGhpwnJ45gNNqt_uhJlzpZ4MIbS9Jh99-XgRGnNamVtTWmxIfAdCW8uYvzhp4mee-mlMRbQcQatvtdx7UgMCh7CHym3jH_2QZRMztxXr0y4Rwe8araNk2tV7DIU3qOzAiyvZCx3TOCDvo8QOcTxWdK3jxZ-Zr4-94v64jpQOvBBIVZ9rNjcAZRiRTGnxBzREeZuDgEPeZDi4rCRGkkzOZcdaTP55-rsqv5YA5CHetVGMwN9Uk"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-end p-4">
              <span className="text-white text-xs font-semibold px-2 py-1 bg-black/40 backdrop-blur-md rounded-lg">Citizen Guardian Perspective</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest p-12 rounded-[2rem] shadow-sm border border-outline-variant/10 flex flex-col items-center justify-center min-h-[500px] text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#6433e5 1px, transparent 1px)", backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
              <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-surface">
                <CloudUpload className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-headline font-bold text-on-background mb-2">Drag and drop files here</h2>
                <p className="text-on-surface-variant">Capture or upload images and videos of the incident</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-3 bg-secondary text-white font-bold rounded-xl hover:opacity-90 transition-opacity active:scale-95">
                  Select Files
                </button>
                <span className="text-outline text-sm font-medium">or</span>
                <button className="w-full sm:w-auto px-8 py-3 bg-primary-container text-white font-bold rounded-xl hover:opacity-90 transition-opacity active:scale-95">
                  Open Camera
                </button>
              </div>
              <div className="flex justify-center gap-8 pt-8 border-t border-outline-variant/20">
                <div className="flex flex-col items-center gap-1">
                  <ImageIcon className="text-outline w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-outline">JPG/PNG</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Video className="text-outline w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-outline">MP4/MOV</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Timer className="text-outline w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-outline">Max 30s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container-highest">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa3_crVsVYyhqJfEK-z9Cw88nvy5THxIgACXrtbujKaABkFabwpUXvc2VlZFukZSttfT0CMXVak47rt4Me_J9d0Q3wH1qpdNdNzhV4IZkk43mjXNzmAtlV8mfi1bREsLTEC1ief4OksjSkk66P7c8coSQSNqojtL9uhqU4Wb3zDw34xeTsJ7czmnVO_5-HEtwurC8vLpT6HGf3nMtzRTARE8a-u1vkjmRrpyaaqna5fSQNyDjbOzGDFUtd9HU7A1aRgZGmRGLdlaA" alt="Sample" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-on-background text-sm">Reviewing Guidelines</p>
                  <p className="text-xs text-on-surface-variant">See what makes a valid report</p>
                </div>
              </div>
              <ChevronRight className="text-outline group-hover:translate-x-1 transition-transform w-5 h-5" />
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-on-background text-sm">Need help capturing?</p>
                  <p className="text-xs text-on-surface-variant">Common violation examples</p>
                </div>
              </div>
              <ChevronRight className="text-outline group-hover:translate-x-1 transition-transform w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
