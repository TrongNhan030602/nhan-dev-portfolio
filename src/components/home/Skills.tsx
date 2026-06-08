"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data";
import { MonitorSmartphone, Terminal, Database, Sparkles } from "lucide-react";

export default function Skills() {
    // Map Icon for each category based on index
    const getCategoryIcon = (index: number) => {
        switch (index) {
            case 0: return <MonitorSmartphone className="w-6 h-6 text-blue-500" />;
            case 1: return <Terminal className="w-6 h-6 text-rose-500" />;
            case 2: return <Database className="w-6 h-6 text-emerald-500" />;
            default: return <Sparkles className="w-6 h-6 text-purple-500" />;
        }
    };

    // Standard Animation Variants for strict TypeScript
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    const tagVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 15 }
        }
    };

    return (
        <section id="skills" className="relative pt-12 pb-32 bg-white overflow-hidden">

            {/* Shape Divider - Smooth transition connecting to the Dark Mode of Experience above */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 -translate-y-[1px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="w-full h-[40px] md:h-[80px]"
                >
                    <path d="M0,0 L1440,100 L1440,0 Z" fill="#0a0a0a"></path>
                </svg>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 mt-16 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Core Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Stack</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl">
                        The tools and frameworks I have mastered and use daily to architect Enterprise-grade products.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {portfolioData.skills.map((skillGroup, index) => (
                        <motion.div
                            variants={cardVariants}
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            {/* Magic Top Gradient Line on Hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Header */}
                            <div className="flex items-center mb-8 pb-5 border-b border-slate-100">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border border-slate-200/60 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md transition-all duration-500">
                                    {getCategoryIcon(index)}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            {/* Tags Container */}
                            <motion.div
                                variants={containerVariants}
                                className="flex flex-wrap gap-2.5"
                            >
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.span
                                        variants={tagVariants}
                                        key={idx}
                                        className="inline-flex items-center px-3.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-300 hover:shadow-[0_2px_10px_-3px_rgba(59,130,246,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}