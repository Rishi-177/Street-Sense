import { Search, Bell, User, Menu } from "lucide-react";

export default function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <nav className="glass-nav border-b border-outline-variant/10">
      <div className="flex justify-between items-center h-16 px-6 lg:px-12 max-w-screen-2xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('landing')}
            className="text-2xl font-black tracking-tight text-on-background flex items-center gap-2"
          >
            <img 
              alt="Street Sense India Logo" 
              className="h-8 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Pzb82XxTAfjeJ0AzWNiv1GVaRdeiQXHX1jTqUrT5ZMdNprCbTnE1-3I6cUr8pdYnmjLKJNVg-mrXbpHcCwoGe2PnZSlbq846lYDtD95lKmwow3TkW3nEWf90HFwPM4R1XoiCF9rEPqpZ_F--VWrA9N5gxU_R76rXJqgyJxOd0l-kLy6MQM8x4ITw7StgLwB3qVFd_RoROVw-gtZF5a83OQXW9WR0vLCpLTt9ffihQoIYLwFLA7PNC7OvUgchoTmt5HunqNZBc6w" 
            />
            <span className="hidden sm:inline">Street Sense India</span>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => onNavigate('dashboard')} className="text-primary font-bold border-b-2 border-primary pb-1">Violations</button>
            <button className="text-on-surface-variant font-medium hover:text-primary transition-colors">Solutions</button>
            <button className="text-on-surface-variant font-medium hover:text-primary transition-colors">Rewards</button>
            <button className="text-on-surface-variant font-medium hover:text-primary transition-colors">Leaderboard</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center px-4 bg-surface-container-low rounded-lg h-10">
            <Search className="w-4 h-4 text-outline mr-2" />
            <input 
              type="text" 
              placeholder="Search plate..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-32 xl:w-48"
            />
          </div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('signup')}
            className="bg-primary text-white px-5 py-2 rounded-lg font-bold scale-95 hover:scale-100 active:opacity-80 transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
