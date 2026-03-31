import { ArrowUp, Search, Filter, MoreHorizontal, MapPin, Camera } from "lucide-react";
import { motion } from "motion/react";

export default function Dashboard({ onNavigate }: { onNavigate: (page: string) => void }) {
  const reports = [
    { plate: "MH 01 AB 1234", type: "Wrong-way Driving", level: "Level 2 Hazard", city: "Mumbai", loc: "Marine Drive", time: "Oct 24, 2024 · 14:20", status: "Approved" },
    { plate: "DL 08 CA 5678", type: "No-Helmet Detection", level: "Safety Violation", city: "Delhi", loc: "Connaught Place", time: "Oct 24, 2024 · 11:45", status: "Pending" },
    { plate: "KA 03 MG 9012", type: "Red Light Jump", level: "Signal Violation", city: "Bangalore", loc: "Silk Board Junction", time: "Oct 23, 2024 · 18:10", status: "Rejected" },
    { plate: "MH 12 XY 4422", type: "Footpath Parking", level: "Parking Violation", city: "Mumbai", loc: "Bandra Reclamation", time: "Oct 22, 2024 · 09:30", status: "Approved" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-background mb-2">Reporter Dashboard</h1>
        <p className="text-on-surface-variant max-w-2xl">Real-time overview of your submitted civic violations and earned rewards across metropolitan India.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-3 p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
          <span className="text-xs font-bold uppercase tracking-wider text-outline mb-2 block">Total Reports</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-primary">1,248</span>
            <span className="text-xs font-bold text-tertiary flex items-center"><ArrowUp className="w-3 h-3" /> 12%</span>
          </div>
          <p className="text-xs text-on-surface-variant mt-2">Submitted in last 30 days</p>
        </div>

        <div className="lg:col-span-3 p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
          <span className="text-xs font-bold uppercase tracking-wider text-outline mb-2 block">Rewards Earned</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-secondary">₹14,500</span>
            <span className="text-xs font-bold text-tertiary flex items-center"><ArrowUp className="w-3 h-3" /> 8%</span>
          </div>
          <p className="text-xs text-on-surface-variant mt-2">Redeemable through RTO credit</p>
        </div>

        <div className="lg:col-span-6 p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-outline mb-1 block">Activity Trend</span>
              <span className="text-xl font-bold">Submission Volume</span>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary"></span>
              <span className="w-3 h-3 rounded-full bg-secondary/20 border border-secondary"></span>
            </div>
          </div>
          <div className="h-16 flex items-end gap-1.5">
            {[40, 60, 85, 45, 70, 95, 55, 40, 60, 85, 45, 70, 95, 55].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05 }}
                className={`w-full rounded-t-sm ${h > 90 ? 'bg-secondary' : 'bg-primary'}`}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
        <div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-container">
          <h2 className="text-xl font-bold">Recent Violation Reports</h2>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-full md:w-64" placeholder="Search plate or city..." type="text"/>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline">License Plate</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline">Violation Type</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline">Location</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline">Date & Time</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline">Status</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {reports.map((r, i) => (
                <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="violation-plate">{r.plate}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-semibold text-on-background">{r.type}</span>
                    <span className="block text-xs text-outline">{r.level}</span>
                  </td>
                  <td className="px-8 py-6 text-sm">
                    <span className="font-medium">{r.city}</span>
                    <span className="block text-xs text-outline">{r.loc}</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant">{r.time}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      r.status === 'Approved' ? 'bg-tertiary/10 text-tertiary' : 
                      r.status === 'Pending' ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        r.status === 'Approved' ? 'bg-tertiary' : 
                        r.status === 'Pending' ? 'bg-primary' : 'bg-error'
                      }`}></span>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-primary hover:underline text-sm font-bold">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 flex items-center justify-between bg-surface-container-low/30">
          <span className="text-xs font-medium text-outline">Showing 1 to 4 of 1,248 entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-surface-container rounded text-xs font-bold">Previous</button>
            <button className="px-3 py-1 bg-primary text-white rounded text-xs font-bold">1</button>
            <button className="px-3 py-1 bg-surface-container rounded text-xs font-bold">2</button>
            <button className="px-3 py-1 bg-surface-container rounded text-xs font-bold">3</button>
            <button className="px-3 py-1 bg-surface-container rounded text-xs font-bold">Next</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 bg-primary rounded-xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA-6NWsx5PjIbPxw67m-AyIkxTK4w39TWt9ExIJYvO2s9ZdX3Efdf4moxiTuKs1EolKtpUFlAcaxsT8x-3OL2DWbAlOkRKdmzSAGHuI-Zj3Z51Q0wIrPJSdfiJanKkduw8xLfJRrcyoMDpwFmOUj2cXVHPF4EutCg6kg3DPmAmW2Q9DA1QawXq6WV_y93G72tk2ErhxvZf4GUTno7WGHKbEQgZCPA8-dby5DsXTMNHrD7IgXdXBNtwquEcNSbrzZQSMqkX57UhEGQ')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">Become a Top Sentinel.<br/>Help Clean Our Streets.</h3>
            <p className="text-white/70 max-w-md mb-8">Users with over 90% approval rating on reports receive verified status and double reward points for severe safety violations.</p>
            <button 
              onClick={() => onNavigate('upload')}
              className="px-8 py-3 bg-secondary text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform active:opacity-90"
            >
              Submit New Violation
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <h3 className="text-lg font-bold mb-6">Hotspot Analysis</h3>
          <div className="space-y-6">
            {[
              { id: '01', name: 'Western Express Hwy', city: 'Mumbai', count: 42 },
              { id: '02', name: 'Outer Ring Road', city: 'Bangalore', count: 38 },
              { id: '03', name: 'MG Road', city: 'Gurgaon', count: 29 },
            ].map((h, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-xs">{h.id}</span>
                  <div>
                    <span className="block font-bold text-sm">{h.name}</span>
                    <span className="block text-xs text-outline">{h.city}</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{h.count} Reports</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3 border border-outline-variant text-primary font-bold text-sm rounded-lg hover:bg-surface-container-low transition-colors">View Map Details</button>
        </div>
      </div>

      <button 
        onClick={() => onNavigate('upload')}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-secondary text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all"
      >
        <Camera className="w-6 h-6" />
      </button>
    </div>
  );
}
