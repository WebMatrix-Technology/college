"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  PieChart as LucidePieChart, Search, Download, Filter, FileText, 
  ChevronDown, Calendar, FileSpreadsheet, BarChart3, PieChartIcon
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from 'recharts';

const allReports = [
  { id: "REP-001", name: "Q1 Tuition Fee Collection", type: "Revenue", department: "Computer Science", course: "B.Tech", year: "1st Year", date: "2026-04-15", status: "Generated" },
  { id: "REP-002", name: "Hostel Fee Defaulters", type: "Dues", department: "All", course: "All", year: "All", date: "2026-05-01", status: "Pending" },
  { id: "REP-003", name: "Faculty Payroll Summary", type: "Expense", department: "Electronics", course: "All", year: "All", date: "2026-05-31", status: "Generated" },
  { id: "REP-004", name: "Library Fines Collected", type: "Revenue", department: "All", course: "All", year: "All", date: "2026-06-05", status: "Generated" },
  { id: "REP-005", name: "MBA Placement Drive Expenses", type: "Expense", department: "Business", course: "MBA", year: "2nd Year", date: "2026-06-10", status: "Generated" },
  { id: "REP-006", name: "Annual Scholarship Disbursement", type: "Expense", department: "All", course: "All", year: "All", date: "2026-06-12", status: "Processing" },
  { id: "REP-007", name: "Semester 3 Examination Fees", type: "Revenue", department: "Mechanical", course: "B.Tech", year: "2nd Year", date: "2026-06-15", status: "Generated" },
];

const reportsTrendData = [
  { month: "Jan", Reports: 12 },
  { month: "Feb", Reports: 18 },
  { month: "Mar", Reports: 15 },
  { month: "Apr", Reports: 22 },
  { month: "May", Reports: 29 },
  { month: "Jun", Reports: 41 },
];

const reportTypeData = [
  { name: "Revenue Analysis", value: 45, color: "#059669" },
  { name: "Expense Tracking", value: 35, color: "#ea580c" },
  { name: "Pending Dues", value: 20, color: "#3b82f6" },
];

export default function AccountantReports() {
  const [filters, setFilters] = useState({
    search: "",
    department: "",
    course: "",
    year: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredReports = allReports.filter(report => {
    const matchSearch = report.name.toLowerCase().includes(filters.search.toLowerCase()) || report.id.toLowerCase().includes(filters.search.toLowerCase());
    const matchDept = filters.department ? report.department === filters.department || report.department === "All" : true;
    const matchCourse = filters.course ? report.course === filters.course || report.course === "All" : true;
    const matchYear = filters.year ? report.year === filters.year || report.year === "All" : true;
    return matchSearch && matchDept && matchCourse && matchYear;
  });

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <LucidePieChart size={36} className="text-emerald-600" />
          Financial <span className="text-emerald-600">Reports</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Filter, analyze, and download institutional financial reports</p>
      </div>

      {/* Visual Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* Reports Trend Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <BarChart3 size={16} className="text-blue-600" /> Reports Generated
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">Monthly trend of financial reports analyzed</p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reportsTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dx={-10} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                />
                <Bar dataKey="Reports" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Report Distribution Donut Chart */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 flex flex-col">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-1">
            <PieChartIcon size={16} className="text-orange-600" /> Report Distribution
          </h3>
          <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">By Financial Category</p>
          
          <div className="flex-1 w-full min-h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reportTypeData}
                  innerRadius="60%"
                  outerRadius="80%"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {reportTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-20px]">
              <span className="text-2xl font-black italic text-slate-900">100</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Total</span>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Filters Bar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col xl:flex-row items-center gap-4">
          
          <div className="relative w-full xl:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search reports by ID or Name..." 
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="flex-1 w-full flex flex-col sm:flex-row gap-4">
            <div className="relative w-full">
              <select 
                value={filters.department}
                onChange={(e) => handleFilterChange("department", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer"
              >
                <option value="">All Departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Business">Business</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative w-full">
              <select 
                value={filters.course}
                onChange={(e) => handleFilterChange("course", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer"
              >
                <option value="">All Courses</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative w-full">
              <select 
                value={filters.year}
                onChange={(e) => handleFilterChange("year", e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-600 outline-none focus:border-emerald-500 appearance-none cursor-pointer"
              >
                <option value="">All Years</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          
          <button className="w-full xl:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shrink-0">
            <Filter size={14} /> Clear Filters
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Report ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Report Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Context</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Status</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <motion.tr 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={report.id} 
                    className="bg-white hover:bg-slate-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">
                        {report.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          report.type === 'Revenue' ? 'bg-emerald-100 text-emerald-600' :
                          report.type === 'Expense' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          <FileSpreadsheet size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{report.name}</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{report.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-slate-700">{report.department}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{report.course} • {report.year}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                        <Calendar size={14} /> {report.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                        report.status === 'Generated' ? 'bg-emerald-100 text-emerald-700' :
                        report.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        disabled={report.status !== 'Generated'}
                        className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-emerald-600 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <Download size={14} /> Export
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <FileText size={48} className="text-slate-200 mx-auto mb-4" />
                    <h3 className="text-lg font-black uppercase tracking-tighter text-slate-900">No Reports Found</h3>
                    <p className="text-xs font-bold text-slate-500 mt-1">Adjust your filters to see more results.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
