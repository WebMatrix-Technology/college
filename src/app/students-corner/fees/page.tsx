"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
 ArrowLeft, CreditCard, History, ShieldCheck, 
 Download, AlertCircle, CheckCircle2, Receipt, 
 Wallet, ArrowUpRight, Lock, Loader2, QrCode,
 Smartphone, Info
} from "lucide-react";
import VanguardHeader from "@/components/VanguardHeader";

// --- INITIAL MOCK DATA ---
const INITIAL_FEES = [
 { id: "T-01", head: "Tuition Fee", amount: 198000, status: "Paid", date: "2025-07-15" },
 { id: "H-01", head: "Hostel & Mess", amount: 125000, status: "Paid", date: "2025-07-20" },
 { id: "L-01", head: "Lab & Library Security", amount: 15000, status: "Pending", date: "-" },
 { id: "E-01", head: "Exam Fee (Fall Sem)", amount: 5500, status: "Pending", date: "-" },
];

export default function FeesPortalPage() {
 const [fees, setFees] = useState(INITIAL_FEES);
 const [isProcessing, setIsProcessing] = useState(false);
 const [showSuccess, setShowSuccess] = useState(false);
 const [paymentMethod, setPaymentMethod] = useState<"card" | "qr">("card");

 const pendingAmount = useMemo(() => {
 return fees
 .filter(f => f.status === "Pending")
 .reduce((acc, curr) => acc + curr.amount, 0);
 }, [fees]);

 const handlePayment = () => {
 setIsProcessing(true);
 setTimeout(() => {
 const updatedFees = fees.map(fee => 
 fee.status === "Pending" 
 ? { ...fee, status: "Paid", date: new Date().toISOString().split('T')[0] } 
 : fee
 );
 setFees(updatedFees);
 setIsProcessing(false);
 setShowSuccess(true);
 }, 2500);
 };

 // UPI Link generation for the QR Code
 const upiLink = `upi://pay?pa=vanguard.univ@bank&pn=VanguardUniversity&am=${pendingAmount}&cu=INR`;
 const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

 return (
 <main className="min-h-screen bg-[#F8FAFC] selection:bg-orange-500 selection:text-white">
 
 <VanguardHeader 
    title="Finance" 
    subtitle="Node." 
    tag="Payment Portal" 
    TagIcon={CreditCard} 
    primaryColor="orange"
    showBack={true}
    backHref="/students-corner"
  >
    <motion.div 
    key={pendingAmount}
    initial={{ scale: 1.1, borderColor: "#ea580c" }}
    animate={{ scale: 1, borderColor: "transparent" }}
    className="mt-12 bg-white border border-slate-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)] rounded-2xl md:absolute md:right-0 md:bottom-0 md:mb-12 md:mr-6 min-w-[280px]"
    >
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Outstanding</p>
    <p className="text-4xl font-black text-slate-900 italic">₹{pendingAmount.toLocaleString()}</p>
    </motion.div>
  </VanguardHeader>

  <section className="py-12 max-w-7xl mx-auto px-6 relative z-20 -mt-8">

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  
  <div className="lg:col-span-2 space-y-8">
  <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden relative">
  <div className="absolute top-0 left-0 w-1 h-full bg-orange-600"></div>
  <div className="bg-slate-900 p-6 text-white flex justify-between items-center rounded-t-2xl">
  <h3 className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
  <Receipt size={14} className="text-orange-500" /> Current Dues Breakdown
  </h3>
  </div>
 
 <div className="divide-y divide-slate-100">
 {fees.map((item) => (
 <motion.div layout key={item.id} className="p-6 flex flex-col md:flex-row justify-between items-center hover:bg-slate-50 transition-colors">
 <div className="flex items-center gap-4 mb-4 md:mb-0">
 <div className={`p-3 rounded-full transition-colors duration-500 ${item.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
 {item.status === 'Paid' ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}
 </div>
 <div>
 <h4 className="font-black uppercase italic text-slate-800 tracking-tight">{item.head}</h4>
 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ref ID: {item.id}</p>
 </div>
 </div>
 <div className="text-right flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
 <div>
 <p className="text-lg font-black text-slate-900">₹{item.amount.toLocaleString()}</p>
 <p className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'Paid' ? 'text-emerald-500' : 'text-orange-500'}`}>
 {item.status} {item.date !== '-' && `on ${item.date}`}
 </p>
 </div>
 {item.status === 'Paid' && (
 <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-2 hover:bg-slate-200 text-slate-400 hover:text-slate-900 transition-all">
 <Download size={18} />
 </motion.button>
 )}
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-emerald-600 p-8 text-white relative overflow-hidden group rounded-2xl shadow-xl">
 <Wallet className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform" size={100} />
 <h4 className="text-xl font-black uppercase italic mb-2">Scholarship Status</h4>
 <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Merit waiver: Active (10%)</p>
 </div>
 <div className="bg-slate-50 p-8 border border-slate-200 relative rounded-2xl shadow-xl">
 <History className="absolute -right-4 -bottom-4 opacity-5 text-slate-900" size={100} />
 <h4 className="text-xl font-black uppercase italic mb-2 text-slate-900">Tax Benefits</h4>
 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Download 80C Certificates</p>
 </div>
 </div>
 </div>

 {/* RIGHT: UPDATED PAYMENT GATEWAY WITH QR TOGGLE */}
 <div className="space-y-6">
 <div className="bg-white border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl sticky top-24">
 <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
 <h3 className="text-xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-2">
 <Lock className="text-orange-600" size={18} /> Secure Checkout
 </h3>
 </div>

 {/* Payment Method Switcher */}
 <div className="flex gap-2 mb-8 bg-slate-50 p-1 rounded-2xl border border-slate-100">
 <button 
 onClick={() => setPaymentMethod("card")}
 className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-xl ${paymentMethod === 'card' ? 'bg-white shadow-sm text-slate-900 border border-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
 >
 <CreditCard size={14} /> Card
 </button>
 <button 
 onClick={() => setPaymentMethod("qr")}
 className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-xl ${paymentMethod === 'qr' ? 'bg-white shadow-sm text-slate-900 border border-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
 >
 <QrCode size={14} /> QR Scan
 </button>
 </div>

 {/* Dynamic Payment Content */}
 <AnimatePresence mode="wait">
 {paymentMethod === "card" ? (
 <motion.div 
 key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
 className="space-y-6 mb-8"
 >
 <div className="space-y-2">
 <p className="text-[9px] font-black uppercase text-slate-400">Card Number</p>
 <div className="h-12 w-full border border-slate-200 bg-slate-50 flex items-center px-4 text-slate-400 italic text-xs rounded-xl">
 XXXX XXXX XXXX XXXX
 </div>
 </div>
 </motion.div>
 ) : (
 <motion.div 
 key="qr" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
 className="flex flex-col items-center mb-8"
 >
 {pendingAmount > 0 ? (
 <>
 <div className="p-4 border border-slate-200 mb-4 bg-white rounded-2xl">
 <img src={qrCodeUrl} alt="Payment QR" className="w-40 h-40" />
 </div>
 <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
 <Smartphone size={14} className="text-orange-600" /> Scan with UPI App
 </p>
 </>
 ) : (
 <div className="h-40 flex items-center justify-center text-slate-300 italic text-xs">
 No pending amount
 </div>
 )}
 </motion.div>
 )}
 </AnimatePresence>

 <div className="pt-4 border-t border-slate-100 flex justify-between items-end mb-8 mt-4">
 <p className="text-[10px] font-black uppercase text-slate-400">Grand Total</p>
 <p className="text-3xl font-black text-orange-600 italic leading-none">₹{pendingAmount.toLocaleString()}</p>
 </div>

 <button 
 onClick={handlePayment}
 disabled={isProcessing || pendingAmount === 0}
 className="w-full bg-slate-900 text-white py-5 font-black rounded-2xl uppercase text-xs tracking-[0.3em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:bg-slate-100 disabled:text-slate-400 shadow-xl"
 >
 {isProcessing ? (
 <><Loader2 className="animate-spin" size={18} /> Verifying...</>
 ) : pendingAmount === 0 ? (
 <><CheckCircle2 size={18} /> Dues Settled</>
 ) : (
 <>{paymentMethod === 'card' ? 'Authorize Payment' : 'Confirm QR Payment'}</>
 )}
 </button>

 <div className="mt-8 flex items-center gap-2 bg-blue-50/50 p-4 border border-blue-100 rounded-2xl">
 <Info size={16} className="text-blue-600 shrink-0" />
 <p className="text-[8px] font-bold text-blue-800 uppercase leading-tight">
 After scanning the QR and paying on your mobile, click "Confirm QR Payment" to sync your ledger.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* --- SUCCESS MODAL --- */}
 <AnimatePresence>
 {showSuccess && (
 <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />
 <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white w-full max-w-md p-12 text-center relative z-10 rounded-2xl border-t-8 border-emerald-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
 <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
 <CheckCircle2 size={40} />
 </div>
 <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-2">Ledger Updated.</h3>
 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-10">Your transaction has been confirmed on the Vanguard node.</p>
 <button onClick={() => setShowSuccess(false)} className="w-full bg-slate-900 py-4 font-black rounded-2xl text-white uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all shadow-xl">Return to Dashboard</button>
 </motion.div>
 </div>
 )}
 </AnimatePresence>
 </main>
 );
}