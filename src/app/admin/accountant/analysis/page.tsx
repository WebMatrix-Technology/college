"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, TrendingUp, Percent, 
  Users, Target, Activity, PieChartIcon, LineChartIcon,
  ChevronDown, Filter
} from "lucide-react";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell 
} from 'recharts';

const performanceData = [
  { month: 'Jan', Income: 4.2, Expenditure: 2.4 },
  { month: 'Feb', Income: 3.8, Expenditure: 2.1 },
  { month: 'Mar', Income: 5.1, Expenditure: 2.8 },
  { month: 'Apr', Income: 4.8, Expenditure: 2.2 },
  { month: 'May', Income: 7.2, Expenditure: 3.1 },
  { month: 'Jun', Income: 8.5, Expenditure: 3.4 },
  { month: 'Jul', Income: 9.1, Expenditure: 3.8 },
];

const expenseBreakdown = [
  { name: 'Payroll', value: 45, color: '#3b82f6' },
  { name: 'Infrastructure', value: 25, color: '#ea580c' },
  { name: 'Software/IT', value: 15, color: '#059669' },
  { name: 'Events', value: 10, color: '#8b5cf6' },
  { name: 'Misc', value: 5, color: '#64748b' },
];

const projectedData = [
  { quarter: 'Q1', Projected: 12.0, Actual: 13.1 },
  { quarter: 'Q2', Projected: 14.5, Actual: 15.2 },
  { quarter: 'Q3', Projected: 10.0, Actual: 9.8 },
  { quarter: 'Q4', Projected: 18.0, Actual: 19.5 },
];

export default function FinancialAnalysis() {
  const [filters, setFilters] = useState({
    department: "",
    course: "",
    academicYear: "",
    year: "",
    quarter: ""
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <BarChart3 size={36} className="text-emerald-600" />
            Financial <span className="text-emerald-600">Analysis</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Deep dive into institutional financial efficiency</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <div className="relative w-full sm:w-48 xl:w-40">
              <select 
                value={filters.department}
                onChange={(e) => handleFilterChange("department", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer shadow-sm"
              >
                <option value="">All Depts</option>
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electronics</option>
                <option value="ME">Mechanical</option>
                <option value="BUS">Business</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative w-full sm:w-40 xl:w-32">
              <select 
                value={filters.course}
                onChange={(e) => handleFilterChange("course", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer shadow-sm"
              >
                <option value="">All Courses</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative w-full sm:w-40 xl:w-32">
              <select 
                value={filters.academicYear}
                onChange={(e) => handleFilterChange("academicYear", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer shadow-sm"
              >
                <option value="">Ac. Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative w-full sm:w-40 xl:w-32">
              <select 
                value={filters.year}
                onChange={(e) => handleFilterChange("year", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer shadow-sm"
              >
                <option value="">FY 26-27</option>
                <option value="FY 25-26">FY 25-26</option>
                <option value="FY 24-25">FY 24-25</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative w-full sm:w-40 xl:w-36">
              <select 
                value={filters.quarter}
                onChange={(e) => handleFilterChange("quarter", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer shadow-sm"
              >
                <option value="">All Quarters</option>
                <option value="Q1">Q1 (Apr-Jun)</option>
                <option value="Q2">Q2 (Jul-Sep)</option>
                <option value="Q3">Q3 (Oct-Dec)</option>
                <option value="Q4">Q4 (Jan-Mar)</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            
            <button 
              onClick={() => setFilters({ department: "", course: "", academicYear: "", year: "", quarter: "" })}
              className="w-full sm:w-auto bg-slate-900 text-white px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-lg"
            >
              <Filter size={14} /> Clear
            </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Operating Margin", value: "34.5%", icon: Percent, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Cost Per Student", value: "₹48,500", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Fee Recovery Rate", value: "92.4%", icon: Target, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
        ].map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className={`bg-white p-6 rounded-[2rem] border ${stat.border} shadow-xl relative overflow-hidden group`}
          >
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <stat.icon className={stat.color} size={24} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black italic text-slate-900">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Income vs Expenditure Line Chart */}
        <div className="xl:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <LineChartIcon size={16} className="text-emerald-600" /> Performance Over Time
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">Granular comparison of Income vs Expenditure (in Cr)</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
                <Line type="monotone" dataKey="Income" stroke="#059669" strokeWidth={4} dot={{ r: 4, fill: '#059669', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Expenditure" stroke="#ea580c" strokeWidth={4} dot={{ r: 4, fill: '#ea580c', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown Donut Chart */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 flex flex-col">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-1">
            <PieChartIcon size={16} className="text-blue-600" /> Operational Expenses
          </h3>
          <p className="text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-widest">Where funds are allocated</p>
          
          <div className="flex-1 w-full min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseBreakdown}
                  innerRadius="50%"
                  outerRadius="80%"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                  label={({ name, percent }) => `${((percent || 0) * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Projected vs Actual Bar Chart */}
        <div className="xl:col-span-3 bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2 mb-1">
              <TrendingUp size={16} className="text-emerald-400" /> Forecast Accuracy
            </h3>
            <p className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">Projected vs Actual Revenue per Quarter (in Cr)</p>
            
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectedData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <XAxis dataKey="quarter" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dx={-10} />
                  <Tooltip 
                    cursor={{ fill: '#1e293b' }}
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid #1e293b', color: '#f8fafc', fontWeight: 'bold' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', color: '#f8fafc', paddingTop: '20px' }} />
                  <Bar dataKey="Projected" fill="#475569" radius={[6, 6, 0, 0]} barSize={30} />
                  <Bar dataKey="Actual" fill="#10b981" radius={[6, 6, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
