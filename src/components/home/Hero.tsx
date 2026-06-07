"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-slate-50">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Cột Trái: Nội dung chính */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Status Badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
                                <span className="flex w-2.5 h-2.5 rounded-full bg-green-500 mr-2.5 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                <span className="text-sm font-semibold text-slate-700">Sẵn sàng nhận dự án mới</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            Giải pháp công nghệ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 relative">
                                Định hình tương lai
                                {/* Sparkle effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-overlay animate-shimmer pointer-events-none"></div>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl"
                        >
                            {portfolioData.personalInfo.bio}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#projects"
                                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1"
                            >
                                {/* Shimmer Sweep Effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer pointer-events-none"></div>
                                <span className="relative flex items-center">
                                    Khám Phá Dự Án
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                            {/* ĐÃ CẬP NHẬT: Trỏ đến file PDF trong thư mục public */}
                            <a
                                href="/CV_Nguyen_Trong_Nhan_Fullstack.pdf"
                                download="CV_Nguyen_Trong_Nhan_Fullstack.pdf"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 hover:text-blue-600 transition-all duration-300 shadow-sm hover:-translate-y-1"
                            >
                                <Download className="mr-2 w-4 h-4" />
                                Tải CV / Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Cột Phải: Tech Illustration (Code Mockup with Floating Animation) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            y: [0, -15, 0] // Floating effect
                        }}
                        transition={{
                            opacity: { duration: 0.7, delay: 0.4 },
                            scale: { duration: 0.7, delay: 0.4 },
                            filter: { duration: 0.7, delay: 0.4 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" } // Infinite float
                        }}
                        className="hidden lg:block relative w-full"
                    >
                        {/* Glow effect behind the card */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-3xl opacity-30 transform rotate-6 translate-y-4 translate-x-4"></div>

                        {/* Code Editor Mockup */}
                        <div className="relative w-full max-w-lg ml-auto bg-[#0d1117] border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                            {/* Window Header */}
                            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
                                </div>
                                <div className="mx-auto text-xs font-mono text-slate-400 flex items-center">
                                    <span className="mr-2 text-blue-400">TS</span> developer.ts
                                </div>
                            </div>

                            {/* Code Content with Line Numbers */}
                            <div className="p-4 text-sm font-mono leading-loose overflow-x-auto flex">
                                {/* Line Numbers */}
                                <div className="flex flex-col text-slate-600 text-right pr-4 border-r border-slate-800 select-none">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((line) => (
                                        <span key={line}>{line}</span>
                                    ))}
                                </div>
                                {/* Code Lines */}
                                <div className="pl-4 flex-1">
                                    <p><span className="text-pink-500">const</span> <span className="text-blue-400">profile</span> <span className="text-pink-500">=</span> {"{"}</p>
                                    <p className="ml-4">
                                        <span className="text-slate-300">name:</span> <span className="text-green-400">&apos;{portfolioData.personalInfo.name}&apos;</span>,
                                    </p>
                                    <p className="ml-4">
                                        <span className="text-slate-300">role:</span> <span className="text-green-400">&apos;{portfolioData.personalInfo.role}&apos;</span>,
                                    </p>
                                    <p className="ml-4">
                                        <span className="text-slate-300">skills:</span> [
                                    </p>
                                    <p className="ml-8 text-green-400">
                                        &apos;React&apos;, &apos;Next.js&apos;, &apos;TypeScript&apos;,
                                    </p>
                                    <p className="ml-8 text-green-400">
                                        &apos;Laravel&apos;, &apos;Domains&apos;,  &apos;Hosting&apos;, &apos;VPS&apos;
                                    </p>
                                    <p className="ml-4">],</p>
                                    <p className="ml-4">
                                        <span className="text-blue-300">execute</span>() {"{"}
                                    </p>
                                    <p className="ml-8">
                                        <span className="text-pink-500">return</span> <span className="text-green-400">&apos;Building scalable solutions🚀&apos;</span>;
                                    </p>
                                    <p className="ml-4">{"}"}</p>
                                    <p>{"};"}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Shape Divider - Nút thắt nghệ thuật kết nối Sang Dark Mode của Experience Section */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="w-full h-[40px] md:h-[80px]"
                >
                    <path d="M0,100 L1440,0 L1440,100 Z" fill="#0a0a0a"></path>
                </svg>
            </div>
        </section>
    );
}