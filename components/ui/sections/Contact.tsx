"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle2, Radio } from "lucide-react";
import { useState } from "react";

// 1. Validation Schema (The "Checker")
const contactSchema = z.object({
  name: z.string().min(2, "NAME_REQUIRED"),
  email: z.string().email("INVALID_EMAIL_FORMAT"),
  message: z.string().min(10, "MINIMUM_10_CHARS_REQUIRED"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("TRANSMISSION_FAILED:", error);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-32 px-4 max-w-3xl mx-auto w-full">
      <div className="flex flex-col mb-16 items-center text-center">
        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase mb-2 animate-pulse">
          Transmission_Link // Active_Signal
        </span>
        <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
      </div>

      <div className="p-8 md:p-12 border border-white/10 bg-[#020617]/95 backdrop-blur-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Name Field - Updated with font-mono and tracking */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/40 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <input 
                  {...register("name")}
                  autoComplete="off"
                  placeholder="ENTER_NAME"
                  className="w-full bg-white/5 border border-white/10 p-5 pl-14 text-white font-mono text-xs tracking-[0.2em] focus:border-cyan-400/80 focus:bg-cyan-400/5 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] outline-none transition-all placeholder:text-gray-500/30 uppercase"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-5}} className="text-red-500 font-mono text-[10px] mt-2 uppercase tracking-widest pl-1">
                      [!] {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field - Updated for clarity */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/40 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <input 
                  {...register("email")}
                  autoComplete="off"
                  placeholder="ENTER_EMAIL"
                  className="w-full bg-white/5 border border-white/10 p-5 pl-14 text-white font-mono text-xs tracking-[0.1em] focus:border-cyan-400/80 focus:bg-cyan-400/5 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] outline-none transition-all placeholder:text-gray-500/30"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-5}} className="text-red-400 font-mono text-[10px] mt-2 uppercase tracking-widest pl-1">
                      [!] {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field - Updated for readability */}
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-7 text-cyan-400/40 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <textarea 
                  {...register("message")}
                  placeholder="TRANSMIT_MESSAGE_DATA..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 p-5 pl-14 text-white font-mono text-xs tracking-wider leading-relaxed focus:border-cyan-400/80 focus:bg-cyan-400/5 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] outline-none transition-all resize-none placeholder:text-gray-500/30"
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-5}} className="text-red-400 font-mono text-[10px] mt-2 uppercase tracking-widest pl-1">
                      [!] {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-cyan-400 text-black font-mono font-black py-6 tracking-[0.5em] flex items-center justify-center gap-4 transition-all disabled:opacity-50 group hover:bg-cyan-300"
              >
                {isSubmitting ? (
                  <>
                    <Radio className="w-5 h-5 animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    SEND_SIGNAL
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div 
              key="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center h-[400px] space-y-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <CheckCircle2 className="w-24 h-24 text-cyan-400" />
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-cyan-500/30 rounded-full z-[-1]"
                />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Signal Locked</h3>
                <p className="text-cyan-400 font-mono text-xs mt-3 tracking-[0.4em]">DATA_ENCRYPTED // TRANSMISSION_CONFIRMED</p>
              </div>
              <p className="text-gray-500 font-mono text-[10px] max-w-sm uppercase tracking-widest leading-loose">
                Your credentials have been verified and logs successfully stored. Stand by for contact.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{ top: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.5)] pointer-events-none"
        />
      </div>
    </section>
  );
}