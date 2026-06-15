"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const toast = (message: string) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent('show-toast', { detail: message });
    window.dispatchEvent(event);
  }
};

export default function ToastContainer() {
  const [messages, setMessages] = useState<{id: number, text: string}[]>([]);

  useEffect(() => {
    const handleToast = (e: any) => {
      const id = Date.now();
      setMessages((prev) => [...prev, { id, text: e.detail }]);
      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }, 3000);
    };
    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800"
          >
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
            <span className="text-xs font-black uppercase tracking-widest">{msg.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
