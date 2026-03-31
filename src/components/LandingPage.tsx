import { Search, Shield, Verified, Banknote, ArrowRight, Camera, Wallet, Trophy, Star, Users } from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight text-on-background mb-6 leading-[1.1]">
              Enforce Road Safety <span className="text-primary italic">Professionally.</span>
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              The ultimate civic investigative tool for reporting traffic violations across India. Earn rewards, ensure safety, and build a disciplined nation.
            </p>
            
            <div className="bg-surface-container-lowest p-2 rounded-xl shadow-xl flex flex-col md:flex-row gap-2 max-w-2xl border border-outline-variant/20">
              <div className="flex-1 flex items-center px-4 bg-surface-container-low rounded-lg">
                <Search className="text-primary mr-3 w-5 h-5" />
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 py-4 font-bold text-lg placeholder:font-normal placeholder:text-outline" 
                  placeholder="Enter License Plate (e.g. MH 01 AB 1234)" 
                  type="text"
                />
              </div>
              <button 
                onClick={() => onNavigate('upload')}
                className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Submit Violation
              </button>
            </div>
            
            <div className="mt-6 flex items-center gap-4 text-sm text-on-surface-variant/70">
              <span className="flex items-center gap-1"><Verified className="w-4 h-4" /> AI-Verified Evidence</span>
              <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> Rewards in 24 Hours</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] rotate-3 -z-10"></div>
            <img 
              alt="Indian traffic street scene" 
              className="rounded-[32px] shadow-2xl w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_N2EbXPW2olVgN2fFBDOUuzaZDRMRjA8TsV3cPwBcswX6UEaQ7GcDIhzbmMcuTLBKUZFbZ2KrfKX3_83YbAjTLA2hqH0wuBguNSc1sEotVt9-KgEhHWjs8i-AUJ1xweHtTo9F0mXBWod-C9I_z0527_ftIaR_sWAwcvTvBhYSHmQdHNJiZIVjNYPmBWuuenaLFmrdOYgLo2wFbHZRGr8IdBQ6aLH-QwriWHPA1wDc7OnmbPMoqpk0dnDTdM0hrsVIveHhDfWFus"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border border-outline-variant/20 max-w-[240px]">
              <div className="text-primary font-headline text-3xl font-black mb-1">₹4.2 Cr</div>
              <div className="text-xs font-medium uppercase tracking-widest text-on-surface-variant">Total Rewards Distributed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Municipal Partners */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Trusted Municipal Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-headline font-bold text-xl"><Shield className="text-primary" /> Mumbai Police</div>
            <div className="flex items-center gap-3 font-headline font-bold text-xl"><Shield className="text-primary" /> Delhi Traffic</div>
            <div className="flex items-center gap-3 font-headline font-bold text-xl"><Shield className="text-primary" /> Bengaluru Traffic</div>
            <div className="flex items-center gap-3 font-headline font-bold text-xl"><Shield className="text-primary" /> Pune Police</div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-background mb-4">India's Leading Traffic Intelligence Platform</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">Join thousands of Citizen Sentinels making our roads safer while earning financial incentives.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group">
              View All Features <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-xl transition-shadow border border-outline-variant/10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">Precision Evidence Capture</h3>
                <p className="text-on-surface-variant text-lg max-w-md">Our AI-powered camera module automatically detects license plates and timestamps violations with 99.4% accuracy.</p>
              </div>
              <div className="mt-12 bg-surface-container p-4 rounded-xl flex items-center gap-4">
                <div className="bg-white px-4 py-2 rounded shadow-sm font-headline font-bold text-sm tracking-tighter">MH 01 CR 5521</div>
                <div className="h-2 flex-1 bg-surface-dim rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%" }}
                    className="h-full bg-primary"
                  ></motion.div>
                </div>
                <span className="text-xs font-bold text-primary animate-pulse">SCANNING...</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary p-10 rounded-[2rem] text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8">
                  <Wallet className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">Direct UPI Rewards</h3>
                <p className="text-white/80 text-lg">Earn up to ₹500 for every verified reporting. Rewards are credited instantly to your linked UPI ID.</p>
              </div>
              <div className="mt-8">
                <span className="text-5xl font-black">₹500 <span className="text-lg font-normal opacity-60">/ violation</span></span>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container-low p-10 rounded-[2rem] flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Sentinel Leaderboard</h3>
              <p className="text-on-surface-variant">Climb the ranks and earn exclusive badges like 'Road Guardian' and 'Civic Hero'.</p>
            </div>

            <div className="md:col-span-8 bg-secondary-container/10 p-10 rounded-[2rem] flex flex-col lg:flex-row items-center gap-8 text-on-background">
              <div className="flex-1">
                <h3 className="font-headline text-3xl font-bold mb-4 text-secondary">Zero Contact Reporting</h3>
                <p className="text-on-surface-variant text-lg">Your identity is never shared. Report anonymously and let the municipal authorities handle the rest through our secure encrypted channel.</p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-2">
                <div className="w-20 h-20 bg-primary/10 rounded-xl"></div>
                <div className="w-20 h-20 bg-secondary/10 rounded-xl"></div>
                <div className="w-20 h-20 bg-secondary/10 rounded-xl"></div>
                <div className="w-20 h-20 bg-primary/10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold mb-4">Voices of the Sentinels</h2>
            <p className="text-on-surface-variant">Real stories from citizens making a difference.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arvind Kumar",
                role: "Bangalore, IT Professional",
                quote: "I reported a recurring signal jumping spot in Koramangala. Within a week, cameras were installed and the rewards I earned covered my commute for a month!",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB60m93MRmrV1-it0rTDZIyf8n_jcsyco8m9YvQOF_Uj1IAvInODRHRQVlvv7rOTf2woAgS3y0X1xJ6RqGKi4tclEJ7Z7K8eEyZZDTUsiNjiRlhwi2uID5zc1G_TBXKwun31cPsD_MXU7knVZLzoafjFl9I8SbRXGYcZijHtOh7mwSICA31YnLfun9EBXLBniGBKw7fA3UGPJvvHimlxnbNdtCGku61fY3nhnjXU4uXQsXLmdu8ub9bw1VKQN9Fuf7Pald3YFFERIo"
              },
              {
                name: "Priya Sharma",
                role: "Mumbai, Social Worker",
                quote: "Street Sense gives us the power to actually do something about the chaos on roads. It's not just about rewards; it's about the discipline we deserve as a country.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-0CzzdAMdq67ums9PqoLLM80loNzzRgvVUH8_6Hbb5KZIHyfKGncq5hzTPdScaq9CwIBDtiIqAlv_djG7IxgTLFS50wZwBvgtgd6mpnX2days0WuaqZlJdtmh1UD8u1s5nujDSIAZyvSb9ZBah-TQMdnt7fdoJ-3VvADoXXVVrzyPldLcYB3JcxmR3RxtDrVhEHb-w7H2z6li5cqrn01zk2zDlPhyQkfTdX7ChkOpv0WEFTkofZnpbcKx17cU-ei4XNXg6s2JF2U",
                featured: true
              },
              {
                name: "Rajesh Singh",
                role: "Delhi, Retired Officer",
                quote: "The license plate detection is incredibly fast. I take a quick photo while walking, and by the time I reach home, my report is already processing.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Buz9WkzKv45q6fh3DOjmhNXL1h_nGem9gAxc7SXh_mSGZ89tjpdSYwxLvJH9wXS73cfcHck12JV2jLSYyojH9_PlMs3JJMEKpX9XYzM9sJhQMM-Ba0gKBOMt1YqUq1xbKW1vC-xehy-6Vhku5j9OA7DZ5NNcAUFrKOKpoMPjEiiwyhq6gWg1hz0YH0kJEmQsDLZtvlqbZhl0IZyLiGc3bJle1Ua1OnN8iqYtJuQPphrCOX0jrPGSuN3RvR2RYyjRd0vHaePL4AA"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 ${t.featured ? 'lg:scale-110 lg:z-10 shadow-xl' : ''}`}
              >
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg italic text-on-surface mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-on-surface-variant">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-headline text-5xl lg:text-6xl font-black mb-8">Ready to reclaim our streets?</h2>
          <p className="text-xl text-white/80 mb-12">Join 200k+ Indian citizens who are already part of the Street Sense community.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('signup')}
              className="bg-secondary text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all scale-100 hover:scale-105"
            >
              Get Started Free
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all border border-white/20">
              Talk to Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
