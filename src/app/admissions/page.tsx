"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { 
 CheckCircle, ChevronRight, ArrowLeft, 
 Upload, Loader2, FileText, 
 User, BookOpen, FileCheck, CheckCircle2, Globe, ChevronDown
} from "lucide-react";
import Footer from "@/components/landing/Footer";

// --- CONFIG ---
const PROGRAMS = {
 Undergraduate: ["B.Tech Computer Science", "BBA International Business", "B.Des UX/UI Design", "B.Sc Biotechnology", "BA LLB (Integrated)"],
 "Post Graduate": ["MBA Finance", "M.Tech Artificial Intelligence", "M.Sc Clinical Research"]
};

const LOCATIONS = {
 Maharashtra: ["Mumbai", "Pune", "Nagpur"],
 Karnataka: ["Bangalore", "Mysore", "Hubli"],
 Delhi: ["New Delhi", "North Delhi"],
 International: ["Dubai", "London", "Singapore", "New York"]
};

// --- CUSTOM SELECT COMPONENT ---
const CustomSelect = ({ options, value, onChange, placeholder, disabled }: { options: string[], value: string, onChange: (val: string) => void, placeholder: string, disabled?: boolean }) => {
 const [isOpen, setIsOpen] = useState(false);
 return (
 <div className="relative w-full">
 <button 
 type="button" disabled={disabled} onClick={() => setIsOpen(!isOpen)}
 className={`w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold outline-none transition-all text-left flex items-center justify-between ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'}`}
 >
 <span className={value ? "text-slate-900" : "text-slate-500"}>{value || placeholder}</span>
 <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
 </button>
 <AnimatePresence>
 {isOpen && !disabled && (
 <>
 <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
 <motion.div 
 initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }}
 className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden max-h-60 overflow-y-auto"
 >
 {options.map(opt => (
 <button
 key={opt} type="button" onClick={() => { onChange(opt); setIsOpen(false); }}
 className={`w-full text-left px-6 py-3 font-bold text-sm transition-colors ${value === opt ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
 >
 {opt}
 </button>
 ))}
 </motion.div>
 </>
 )}
 </AnimatePresence>
 </div>
 );
};

export default function AdmissionPage() {
 const [currentStep, setCurrentStep] = useState(0);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);
 
 const [formData, setFormData] = useState({
 // Personal
 fullName: "", email: "", phone: "", dob: null as Date | null, gender: "",
 // Address
 state: "", city: "", pincode: "",
 // Parental
 parentName: "",
 // Academic
 programType: "" as "Undergraduate" | "Post Graduate" | "",
 selectedCourse: "",
 // Docs
 doc10th: "", doc12th: "", docLC: "",
 docEntrance: ""
 });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
 const file = e.target.files?.[0];
 if (file) setFormData({ ...formData, [field]: file.name });
 };

 const canProgress = () => {
 if (currentStep === 0) return formData.fullName && formData.email && formData.phone && formData.dob && formData.state;
 if (currentStep === 1) return formData.programType && formData.selectedCourse;
 if (currentStep === 2) return formData.doc10th && formData.doc12th;
 return true;
 };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const newApp = {
        id: `VNG-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.fullName,
        course: formData.selectedCourse,
        status: "Applied",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        score: Math.floor(60 + Math.random() * 35),
        phone: formData.phone
      };
      
      const existingApps = JSON.parse(localStorage.getItem("vanguard_applications") || "[]");
      localStorage.setItem("vanguard_applications", JSON.stringify([newApp, ...existingApps]));
      
      setIsSuccess(true); 
      setIsSubmitting(false); 
    }, 2000);
  };

 const steps = [
 { title: "Identity", icon: <User size={18} /> },
 { title: "Academics", icon: <BookOpen size={18} /> },
 { title: "Documents", icon: <FileCheck size={18} /> },
 { title: "Review", icon: <CheckCircle2 size={18} /> }
 ];

 if (isSuccess) {
 return (
 <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
 {/* Background elements */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
 
 <motion.div 
 initial={{ scale: 0.9, opacity: 0, y: 20 }} 
 animate={{ scale: 1, opacity: 1, y: 0 }}
 transition={{ duration: 0.6, type: "spring" }}
 className="max-w-lg w-full bg-white rounded-[3rem] p-12 text-center shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-slate-100 relative z-10"
 >
 <motion.div 
 initial={{ scale: 0 }} 
 animate={{ scale: 1 }} 
 transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
 className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8"
 >
 <CheckCircle size={48} className="text-emerald-500" />
 </motion.div>
 <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-4">
 Application <br/><span className="text-emerald-500 italic">Received.</span>
 </h2>
 <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed">
 Your application for <span className="font-bold text-slate-900">{formData.selectedCourse}</span> has been successfully submitted. Our admissions team will contact you within 48 hours.
 </p>
 <button onClick={() => window.location.href = "/"} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors shadow-xl">
 Return to Homepage
 </button>
 </motion.div>
 </main>
 );
 }

 return (
 <main className="min-h-screen bg-slate-50">
 <style>{`
 .react-datepicker {
 font-family: inherit;
 border: 1px solid #e2e8f0;
 border-radius: 1.5rem;
 box-shadow: 0 20px 40px rgba(0,0,0,0.1);
 padding: 10px;
 }
 .react-datepicker__header {
 background: transparent;
 border-bottom: none;
 padding-top: 10px;
 }
 .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
 font-weight: 900;
 text-transform: uppercase;
 font-size: 0.8rem;
 letter-spacing: 0.1em;
 }
 .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
 background-color: #f97316 !important;
 color: white !important;
 border-radius: 50% !important;
 }
 .react-datepicker__day:hover {
 border-radius: 50% !important;
 background-color: #ffedd5 !important;
 }
 .react-datepicker__year-read-view {
 padding: 4px 8px;
 border-radius: 0.5rem;
 cursor: pointer;
 }
 .react-datepicker__year-read-view:hover {
 background-color: #f8fafc;
 }
 .react-datepicker__year-read-view--down-arrow {
 top: 5px;
 border-color: #94a3b8;
 }
 .react-datepicker__year-dropdown {
 background-color: white;
 border: 1px solid #e2e8f0;
 border-radius: 1rem;
 box-shadow: 0 20px 40px rgba(0,0,0,0.15);
 padding: 16px;
 width: min(300px, 85vw);
 display: grid !important;
 grid-template-columns: repeat(4, 1fr);
 gap: 8px;
 left: 50% !important;
 transform: translateX(-50%);
 z-index: 50;
 }
 .react-datepicker__year-option {
 padding: 10px 0;
 color: #475569;
 font-weight: bold;
 font-size: 0.8rem;
 line-height: 20px;
 text-align: center;
 border-radius: 0.5rem;
 cursor: pointer;
 transition: all 0.2s;
 }
 .react-datepicker__year-option:hover {
 background-color: #ffedd5;
 color: #f97316;
 }
 .react-datepicker__year-option--selected_year {
 color: white !important;
 background-color: #f97316 !important;
 }
 .react-datepicker__year-option:first-child,
 .react-datepicker__year-option:last-child {
 grid-column: 1 / -1;
 background-color: #f8fafc;
 border-radius: 0.5rem;
 color: #94a3b8;
 }
 .react-datepicker__year-option:first-child:hover,
 .react-datepicker__year-option:last-child:hover {
 background-color: #e2e8f0;
 color: #475569;
 }
 `}</style>
 
 {/* HERO BANNER */}
 <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
  
  {/* BACK BUTTON */}
  <div className="absolute top-8 left-6 md:left-12 z-20">
  <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-xs font-black text-white uppercase tracking-widest transition-all backdrop-blur-md">
  <ArrowLeft size={14} /> Home
  </Link>
  </div>
 <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
 <motion.h1 
 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase italic tracking-tighter text-white leading-none mb-4"
 >
 Admissions <span className="text-orange-500">Portal.</span>
 </motion.h1>
 <motion.p 
 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
 className="text-slate-400 font-medium max-w-xl mx-auto"
 >
 Take the first step towards your future. Complete your application for the 2026 academic cohort.
 </motion.p>
 </div>
 </section>

 {/* APPLICATION CONTAINER */}
 <section className="max-w-[1200px] mx-auto px-6 -mt-10 mb-32 relative z-20">
  <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row min-h-[700px] relative z-20">
  {/* LEFT SIDEBAR: PROGRESS TRACKER */}
  <div className="w-full md:w-[320px] shrink-0 bg-slate-50 md:border-r border-b md:border-b-0 border-slate-100 p-8 md:p-10 flex flex-col rounded-t-[3rem] md:rounded-tr-none md:rounded-l-[3rem]">
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-10">Application Progress</h3>
 
 <div className="flex flex-col gap-8 relative">
 {/* Connecting Line */}
 <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5 bg-slate-200 z-0 hidden md:block" />
 
 {steps.map((step, i) => (
 <div key={i} className="flex items-center gap-5 relative z-10">
 <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
 currentStep > i ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 
 currentStep === i ? 'bg-slate-900 text-white shadow-xl scale-110' : 
 'bg-white text-slate-400 border border-slate-200'
 }`}>
 {currentStep > i ? <CheckCircle size={20} /> : step.icon}
 </div>
 <div>
 <span className={`text-[10px] font-black uppercase tracking-widest ${currentStep === i ? 'text-slate-900' : 'text-slate-400'}`}>
 Step 0{i + 1}
 </span>
 <p className={`font-bold ${currentStep === i ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</p>
 </div>
 </div>
 ))}
 </div>
 
 <div className="mt-auto pt-10">
 <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
 <Globe className="text-orange-500 mb-3" size={24} />
 <h4 className="font-bold text-slate-900 text-sm mb-1">Need Assistance?</h4>
 <p className="text-xs text-slate-500 font-medium">Contact our admissions office at admissions@vanguard.edu</p>
 </div>
 </div>
 </div>

  {/* RIGHT CONTENT: FORM WIZARD */}
  <div className="flex-1 p-6 md:p-16 flex flex-col bg-white rounded-b-[3rem] md:rounded-bl-none md:rounded-r-[3rem]">
 <AnimatePresence mode="wait">
 <motion.div 
 key={currentStep} 
 initial={{ opacity: 0, x: 20 }} 
 animate={{ opacity: 1, x: 0 }} 
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.3 }}
 className="flex-1"
 >
 
 {/* STEP 0: IDENTITY */}
 {currentStep === 0 && (
 <div className="space-y-8">
 <div>
 <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Personal Identity</h2>
 <p className="text-slate-500 font-medium text-sm">Please provide your legal personal information.</p>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-1.5">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Full Legal Name *</label>
 <input name="fullName" placeholder="John Doe" onChange={handleInputChange} value={formData.fullName} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" />
 </div>
 <div className="space-y-1.5 flex flex-col">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Date of Birth *</label>
 <DatePicker 
 selected={formData.dob} 
 onChange={(date: Date | null) => setFormData({ ...formData, dob: date })} 
 placeholderText="Select Date"
 dateFormat="MMMM d, yyyy"
 showYearDropdown
 scrollableYearDropdown
 yearDropdownItemNumber={100}
 maxDate={new Date()}
 className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-slate-900"
 wrapperClassName="w-full"
 />
 </div>
 <div className="space-y-1.5">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Email Address *</label>
 <input name="email" type="email" placeholder="john@example.com" onChange={handleInputChange} value={formData.email} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" />
 </div>
 <div className="space-y-1.5">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Phone Number *</label>
 <input name="phone" placeholder="+1 (555) 000-0000" onChange={handleInputChange} value={formData.phone} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" />
 </div>
 <div className="space-y-1.5 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
 <div className="space-y-1.5">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Region/State *</label>
 <CustomSelect 
 options={Object.keys(LOCATIONS)}
 value={formData.state}
 onChange={(val) => setFormData({ ...formData, state: val, city: "" })}
 placeholder="Select Region"
 />
 </div>
 <div className="space-y-1.5">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">City</label>
 <CustomSelect 
 options={formData.state ? LOCATIONS[formData.state as keyof typeof LOCATIONS] : []}
 value={formData.city}
 onChange={(val) => setFormData({ ...formData, city: val })}
 placeholder="Select City"
 disabled={!formData.state}
 />
 </div>
 </div>
 </div>
 </div>
 )}

 {/* STEP 1: ACADEMICS */}
 {currentStep === 1 && (
 <div className="space-y-8">
 <div>
 <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Academic Selection</h2>
 <p className="text-slate-500 font-medium text-sm">Select your desired program level and course.</p>
 </div>

 <div className="space-y-4">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Program Level</label>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {Object.keys(PROGRAMS).map((type) => (
 <button 
 key={type} 
 onClick={() => setFormData({...formData, programType: type as any, selectedCourse: ""})}
 className={`p-6 rounded-2xl border-2 font-bold transition-all text-left flex items-center justify-between group ${
 formData.programType === type 
 ? 'border-orange-500 bg-orange-50/50 text-orange-600 shadow-sm' 
 : 'border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
 }`}
 >
 <span>{type}</span>
 <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.programType === type ? 'border-orange-500' : 'border-slate-300'}`}>
 {formData.programType === type && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
 </div>
 </button>
 ))}
 </div>
 </div>

 <AnimatePresence>
 {formData.programType && (
 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4 pt-4">
 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Specific Course</label>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {PROGRAMS[formData.programType].map((course) => (
 <button 
 key={course} 
 onClick={() => setFormData({...formData, selectedCourse: course})}
 className={`p-4 rounded-xl border-2 font-bold text-sm transition-all text-left ${
 formData.selectedCourse === course 
 ? 'border-slate-900 bg-slate-900 text-white shadow-xl' 
 : 'border-slate-100 text-slate-600 hover:border-slate-300'
 }`}
 >
 {course}
 </button>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 )}

 {/* STEP 2: DOCUMENTS */}
 {currentStep === 2 && (
 <div className="space-y-8">
 <div>
 <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Required Documents</h2>
 <p className="text-slate-500 font-medium text-sm">Upload clear PDF copies of your academic transcripts.</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {[
 { id: "doc10th", label: "High School / 10th Transcript *", val: formData.doc10th },
 { id: "doc12th", label: "Pre-University / 12th Transcript *", val: formData.doc12th },
 { id: "docLC", label: "Leaving Certificate / Transfer Cert", val: formData.docLC },
 { id: "docEntrance", label: "Entrance Exam Scorecard", val: formData.docEntrance }
 ].map((doc) => (
 <label 
 key={doc.id} 
 className={`relative p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all group overflow-hidden ${
 doc.val ? 'border-orange-500 bg-orange-50/30' : 'border-slate-200 hover:border-orange-400 hover:bg-slate-50'
 }`}
 >
 <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, doc.id)} />
 
 {doc.val ? (
 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-3">
 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
 <CheckCircle size={24} />
 </div>
 <div>
 <span className="block text-xs font-bold text-slate-900 truncate max-w-[200px]">{doc.val}</span>
 <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 mt-1 block">Uploaded Successfully</span>
 </div>
 </motion.div>
 ) : (
 <div className="flex flex-col items-center gap-3">
 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
 <Upload size={20} />
 </div>
 <div>
 <span className="block text-xs font-bold text-slate-600">{doc.label}</span>
 <span className="text-[10px] font-bold text-slate-400 mt-1 block">Click to browse (PDF only)</span>
 </div>
 </div>
 )}
 </label>
 ))}
 </div>
 </div>
 )}

 {/* STEP 3: REVIEW */}
 {currentStep === 3 && (
 <div className="space-y-8">
 <div>
 <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Final Review</h2>
 <p className="text-slate-500 font-medium text-sm">Please verify your details before final submission.</p>
 </div>

 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
 <div>
 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Personal Details</h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
 <div><span className="block text-xs text-slate-500 mb-1">Full Name</span><span className="font-bold text-slate-900">{formData.fullName}</span></div>
 <div><span className="block text-xs text-slate-500 mb-1">Email</span><span className="font-bold text-slate-900">{formData.email}</span></div>
 <div><span className="block text-xs text-slate-500 mb-1">Phone</span><span className="font-bold text-slate-900">{formData.phone}</span></div>
 <div><span className="block text-xs text-slate-500 mb-1">Region</span><span className="font-bold text-slate-900">{formData.state}</span></div>
 <div><span className="block text-xs text-slate-500 mb-1">Date of Birth</span><span className="font-bold text-slate-900">{formData.dob ? formData.dob.toLocaleDateString() : ""}</span></div>
 </div>
 </div>
 
 <div>
 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Academic Selection</h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
 <div><span className="block text-xs text-slate-500 mb-1">Program Type</span><span className="font-bold text-slate-900">{formData.programType}</span></div>
 <div><span className="block text-xs text-slate-500 mb-1">Selected Course</span><span className="font-bold text-orange-600">{formData.selectedCourse}</span></div>
 </div>
 </div>
 </div>
 </div>
 )}

 </motion.div>
 </AnimatePresence>

 {/* NAV CONTROLS */}
 <div className="mt-auto pt-10 flex items-center justify-between border-t border-slate-100">
 <button 
 onClick={() => setCurrentStep(s => s - 1)} 
 disabled={currentStep === 0} 
 className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 disabled:opacity-0 transition-colors flex items-center gap-2"
 >
 <ArrowLeft size={16}/> Back
 </button>
 
 <button 
 onClick={() => currentStep === 3 ? handleSubmit() : setCurrentStep(s => s + 1)}
 disabled={!canProgress() || isSubmitting}
 className={`px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all flex items-center gap-3 shadow-lg ${
 !canProgress() 
 ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' 
 : currentStep === 3 
 ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-emerald-500/20' 
 : 'bg-slate-900 text-white hover:bg-orange-600 hover:shadow-orange-600/20'
 }`}
 >
 {isSubmitting ? (
 <><Loader2 className="animate-spin" size={16}/> Processing...</>
 ) : currentStep === 3 ? (
 <><CheckCircle size={16}/> Submit Application</>
 ) : (
 <>Continue <ChevronRight size={16}/></>
 )}
 </button>
 </div>

 </div>
 </div>
 </section>

 <Footer />
 </main>
 );
}