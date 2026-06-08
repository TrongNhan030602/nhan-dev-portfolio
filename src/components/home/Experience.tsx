"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data";
import { Building2, Calendar, CheckCircle2, Code2, Server, Database, Terminal } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Dark Mode Background Elements for Ultra-Premium Tech Feel */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Subtle Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center text-center mb-10 md:mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium mb-6">
                            <Terminal className="w-4 h-4 text-blue-400" />
                            <span>Work_History.exe</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Experience</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {portfolioData.experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Separate Card Component to manage local state (Mouse position)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ExperienceCard({ exp, index }: { exp: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Handle Spotlight Effect following mouse
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Define standard Type Variants to fix TypeScript errors
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-slate-900/40 rounded-3xl p-1 md:p-[1px] border border-slate-800 hover:border-slate-700 transition-colors duration-500 overflow-hidden"
        >
            {/* Spotlight Gradient - Only visible on Hover */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out pointer-events-none"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.15), transparent 40%)`
                }}
            />

            {/* Inner Content Container */}
            <div className="relative z-10 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[23px] p-8 md:p-12 h-full">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Meta Information */}
                    <div className="lg:col-span-4 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                            Current Role
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4 tracking-tight">
                            {exp.role}
                        </h3>

                        <div className="flex items-center text-lg font-bold text-slate-400 mb-10 group-hover:text-slate-300 transition-colors">
                            <Building2 className="w-5 h-5 mr-3 text-slate-500" />
                            {exp.company}
                        </div>

                        <div className="mt-auto inline-flex items-center px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-semibold shadow-inner w-full lg:w-auto justify-center lg:justify-start backdrop-blur-md">
                            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                            {exp.startDate} - {exp.endDate}
                        </div>
                    </div>

                    {/* Right Column: Descriptions & Tech Stack */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-8 flex flex-col justify-center"
                    >
                        <div className="flex items-center mb-8">
                            <h4 className="text-sm font-black text-slate-100 uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500">
                                Responsibilities & Achievements
                            </h4>
                            <div className="ml-6 flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent"></div>
                        </div>

                        <ul className="space-y-6">
                            {exp.description.map((desc: string, idx: number) => (
                                <motion.li variants={itemVariants} key={idx} className="flex items-start group/item">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mr-5 mt-0.5 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/50 group-hover/item:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-blue-400 transition-colors duration-300" />
                                    </div>
                                    <span className="text-slate-400 leading-relaxed text-[15px] font-medium group-hover/item:text-slate-200 transition-colors duration-300">
                                        {desc}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Real-world Tech Stack Row */}
                        <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-slate-800/80">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Technology Stack</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:border-slate-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-default backdrop-blur-sm">
                                    <Code2 className="w-4 h-4 mr-2 text-white" /> Next.js 16
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-xs font-bold text-slate-300 hover:bg-rose-950/40 hover:border-rose-500/50 hover:text-rose-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.1)] transition-all duration-300 cursor-default backdrop-blur-sm">
                                    <Database className="w-4 h-4 mr-2 text-rose-500" /> Laravel 12
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-xs font-bold text-slate-300 hover:bg-green-950/40 hover:border-green-500/50 hover:text-green-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 cursor-default backdrop-blur-sm">
                                    <Server className="w-4 h-4 mr-2 text-green-500" /> VPS & Linux
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
}