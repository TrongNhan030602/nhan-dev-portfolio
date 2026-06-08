"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data";
import { Mail, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";

export default function Contact() {
    // Form state management
    const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("LOADING");

        const form = e.currentTarget;
        const formData = new FormData(form);
        // Convert FormData to JSON Object to send via FormSubmit AJAX
        const data = Object.fromEntries(formData.entries());

        // Get personal email from data file
        const targetEmail = portfolioData.personalInfo.email;
        const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${targetEmail}`;

        try {
            const response = await fetch(FORMSUBMIT_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch {
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-slate-950">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Call to action info */}
                    <div className="lg:col-span-5 flex flex-col space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                Contact.md
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                                Kickstart <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Your Project</span>
                            </h2>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                Need system optimization, Next.js/Laravel solutions, or hands-on engineering talent? Drop a message, and I&apos;ll respond within 24 hours.
                            </p>
                        </div>

                        {/* Quick connect cards */}
                        <div className="space-y-4 pt-4">
                            <a
                                href={portfolioData.personalInfo.zalo}
                                target="_blank"
                                className="flex items-center p-4 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-blue-500/40 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zalo Hotline</div>
                                    <div className="text-sm font-bold text-slate-200 mt-0.5">0334 323 707</div>
                                </div>
                            </a>

                            <a
                                href={`mailto:${portfolioData.personalInfo.email}`}
                                className="flex items-center p-4 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-rose-500/40 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email</div>
                                    <div className="text-sm font-bold text-slate-200 mt-0.5">{portfolioData.personalInfo.email}</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-4 md:p-10 backdrop-blur-xl relative">

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                        <input
                                            type="text" id="name" name="name" required placeholder="John Doe"
                                            className="w-full px-4 py-3.5 bg-[#0a0a0a]/60 border border-slate-800 focus:border-blue-500 rounded-xl text-slate-100 font-medium placeholder-slate-600 outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email" id="email" name="email" required placeholder="partner@domain.com"
                                            className="w-full px-4 py-3.5 bg-[#0a0a0a]/60 border border-slate-800 focus:border-blue-500 rounded-xl text-slate-100 font-medium placeholder-slate-600 outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject / Inquiry</label>
                                    <input
                                        type="text" id="subject" name="subject" required placeholder="Web application development collaboration..."
                                        className="w-full px-4 py-3.5 bg-[#0a0a0a]/60 border border-slate-800 focus:border-blue-500 rounded-xl text-slate-100 font-medium placeholder-slate-600 outline-none transition-colors"
                                    />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message Content</label>
                                    <textarea
                                        id="message" name="message" required rows={4} placeholder="Briefly describe your requirements or project details..."
                                        className="w-full px-4 py-3.5 bg-[#0a0a0a]/60 border border-slate-800 focus:border-blue-500 rounded-xl text-slate-100 font-medium placeholder-slate-600 outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* FormSubmit Configuration - Hidden fields for custom Formsubmit UX */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <button
                                    type="submit"
                                    disabled={status === "LOADING"}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 cursor-pointer select-none"
                                >
                                    {status === "LOADING" ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Toast Alert Feedback */}
                            <AnimatePresence>
                                {status === "SUCCESS" && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center z-30"
                                    >
                                        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-slate-400 text-sm max-w-sm">
                                            Thank you. Your information has been forwarded to Nhan&apos;s inbox. I will get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={() => setStatus("IDLE")}
                                            className="mt-6 text-xs font-bold text-blue-400 hover:underline cursor-pointer"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}

                                {status === "ERROR" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="mt-4 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-semibold"
                                    >
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span>System error occurred. Please double-check your Email verification process!</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}