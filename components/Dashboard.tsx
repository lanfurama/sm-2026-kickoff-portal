import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { STRATEGIC_PILLARS, GROUP_PERFORMANCE, TOP_IDEAS } from '../constants';
import { Trophy, Lightbulb, Target, TrendingUp } from 'lucide-react';

// Neon & Ocean Palette
const CHART_COLORS = ['#00f0ff', '#3b82f6', '#8b5cf6', '#10b981']; // Cyan, Blue, Violet, Emerald

export const Dashboard: React.FC = () => {
  return (
    <div className="w-full space-y-8 animate-fade-in">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Trophy, label: "Top Performer", value: "Gamma Growth", color: "text-yellow-400" },
          { icon: Lightbulb, label: "Total Ideas", value: "142", color: "text-brand-accent" },
          { icon: Target, label: "Feasibility", value: "87%", color: "text-emerald-400" },
          { icon: TrendingUp, label: "Engagement", value: "98%", color: "text-purple-400" }
        ].map((stat, idx) => (
          <div key={idx} className="glass-card p-5 rounded-lg border-l-2 border-brand-accent/50 flex items-center justify-between">
            <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full bg-brand-deep border border-white/10 ${stat.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                <stat.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Chart 1 */}
        <div className="glass-card p-6 rounded-lg lg:col-span-1 flex flex-col">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-2">Strategic Focus</h3>
          <div className="flex-grow min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={STRATEGIC_PILLARS}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {STRATEGIC_PILLARS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#38bdf8', borderRadius: '4px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="rect"
                    formatter={(value) => <span style={{ color: '#9ca3af', fontSize: '10px', textTransform: 'uppercase' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="glass-card p-6 rounded-lg lg:col-span-2">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-2">Team Scores</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={GROUP_PERFORMANCE} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#38bdf8', borderRadius: '4px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                    {GROUP_PERFORMANCE.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="url(#barGradient)" />
                    ))}
                </Bar>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Idea List */}
      <div className="glass-card p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Consolidated Ideas</h3>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Live Sync</span>
            </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="text-[10px] uppercase text-brand-glow font-bold tracking-widest border-b border-white/10 bg-white/5">
              <tr>
                <th className="py-3 pl-4 rounded-tl-lg">Group</th>
                <th className="py-3">Topic</th>
                <th className="py-3">Votes</th>
                <th className="py-3 text-right pr-4 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {TOP_IDEAS.map((idea, index) => (
                <tr key={idea.id} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                  <td className="py-4 pl-4 font-bold text-white">{idea.groupName}</td>
                  <td className="py-4 text-gray-300">{idea.topic}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-accent shadow-[0_0_10px_#00f0ff]" style={{ width: `${(idea.votes / 50) * 100}%` }}></div>
                      </div>
                      <span className="text-xs font-mono text-brand-accent">{idea.votes}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right pr-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${
                      idea.status === 'Approved' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                      idea.status === 'Review' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                      'bg-gray-500/10 text-gray-400 border-gray-500/30'
                    }`}>
                      {idea.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};