import { Eye, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function SignUp({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen flex items-stretch bg-surface">
      {/* Left Panel: Form Section */}
      <main className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24 xl:px-32 bg-surface-container-lowest">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <img 
              className="h-10 w-auto cursor-pointer" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWaIxl8eXhnNGvE9YxxIOsCqY2ZraLolbzlXghcTN4cbCp-AeOvaJAwJ9RWsx5JktB9gPANZ5M-7effKcgphJd9CcV0ny7fPF87jwCQOqPuaw26ZpAVCrIojE3aBPsv2d9Hp954tk-1NN_gZVeTLpbZ4Ihy4EtmJn25M3jT27lXOrX6AnLfMFEgkYidpy_3_-1Zv_lUJi_8J5_Ko4yihlqZ1tjOD5LJoJPWpiLnIiod1escLn7tFpzSVzkPxezoWtjM8hkzMkVVOs" 
              onClick={() => onNavigate('landing')}
            />
          </div>
          
          <header className="mb-8">
            <h1 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface mb-2">Create your account</h1>
            <p className="text-on-surface-variant">Join the movement for safer Indian roads. Sign up to report violations and earn rewards.</p>
          </header>

          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors font-semibold text-on-surface">
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM9r42vnfnDrUnge5NLYVJO5YWcInU3ZLyy-X5nRcacRM9PhK94evABU7hHQ548p1ZZ0Zr2DQ3_77_5gq_YLQRpcCt5CjG3r9NggDxtAiGdQSlxB3sGDk_DPpWgNEumZBV913n0KDImCDTGRPII3Tz7t1Q6rDU1fCJj-OJmcaH7r5h6XouMFqqFywAbtRB9Muhmj6RBAVnPsEC_y2N4DNdxdb5O9DUnuKJf6Wp0YRXw0iEyOg3RPqmMTYkG7FuDMDASn6oiT98Yr4" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors font-semibold text-on-surface">
              <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              Continue with Facebook
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant opacity-30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface-container-lowest text-on-surface-variant font-medium">OR</span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Email address</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline" 
                placeholder="e.g. rahul.sharma@domain.in" 
                type="email" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Password</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-high border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline" 
                  placeholder="Min. 8 characters" 
                  type="password"
                  required
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-2">
              <input className="mt-1 rounded text-primary focus:ring-primary border-outline-variant" id="terms" type="checkbox" required />
              <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                By creating an account, I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>, including the receipt of civic alerts.
              </label>
            </div>
            <button className="w-full py-4 px-6 bg-secondary text-on-secondary font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all text-lg" type="submit">
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-on-surface-variant font-medium">
            Already have an account? <button onClick={() => onNavigate('dashboard')} className="text-primary font-bold hover:underline">Log In</button>
          </p>
        </div>
      </main>

      {/* Right Panel: Brand Imagery */}
      <aside className="hidden lg:flex lg:w-[45%] xl:w-[50%] bg-primary relative overflow-hidden flex-col">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXtus4KPivr0pwf0hATig4f1eDSyraqM3mppaCyU4ExE6FeBi5oB7l1TCD88NFgVuanpxrsUiqgvgz4Pa9TVg6rq52-EIeLMpIloNk3EmEZNHi8kQZf8u4_cOVb8w4KydXyW8qDPniAPBOuUT9VVIIThTYGUp21f4MYkQN8xfWJm0D2tf-VSAh4fjmb4dlfJR4Jlvimty71q64sej5-5DQZR2xbI_jaJ4CaLrl8Ny7moJMsDtb82FbBpg1c8zf1_WAT7qNU8rJc4" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col justify-end p-16 xl:p-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Active Civic Community</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-headline font-black text-white leading-tight mb-6">
              Be the guardian <br/>your city deserves.
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-12">
              Join 50,000+ citizens across India making our streets safer. Log violations, track resolutions, and help build a smarter urban ecosystem.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="text-3xl font-headline font-bold text-white mb-1">12k+</div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Reports Resolved</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="text-3xl font-headline font-bold text-white mb-1">₹5.2M</div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Rewards Distributed</div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6">Endorsed by Civic Bodies in</p>
              <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale invert brightness-0">
                <span className="text-white font-headline font-extrabold text-xl tracking-tighter">BENGALURU</span>
                <span className="text-white font-headline font-extrabold text-xl tracking-tighter">MUMBAI</span>
                <span className="text-white font-headline font-extrabold text-xl tracking-tighter">DELHI</span>
                <span className="text-white font-headline font-extrabold text-xl tracking-tighter">PUNE</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
