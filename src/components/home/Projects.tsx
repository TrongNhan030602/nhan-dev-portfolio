"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { ExternalLink, ArrowUpRight, Link2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-[#fafafa] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Dự Án <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Nổi Bật</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl mb-6">
                        Từ ý tưởng thiết kế đến triển khai hệ thống lõi. Đây là minh chứng cho tư duy giải quyết vấn đề và năng lực kỹ thuật của tôi.
                    </p>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </motion.div>

                {/* 1. FEATURED PROJECTS BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
                    {portfolioData.projects.map((project, index) => {
                        const isFeatured = index === 0;
                        const targetUrl = project.liveUrl || project.githubUrl || "#";

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn(
                                    "group bg-white rounded-[32px] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col",
                                    isFeatured ? "md:col-span-2 lg:flex-row" : "col-span-1"
                                )}
                            >
                                <Link
                                    href={targetUrl}
                                    target={targetUrl !== "#" ? "_blank" : "_self"}
                                    className={cn(
                                        "relative block overflow-hidden bg-slate-100 cursor-pointer",
                                        isFeatured ? "lg:w-3/5 h-72 lg:h-auto" : "w-full h-64 md:h-72"
                                    )}
                                >
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500 z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 z-20 pointer-events-none">
                                        <div className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-full shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-500">
                                            Xem chi tiết <ArrowUpRight className="w-4 h-4 text-blue-600" />
                                        </div>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </Link>

                                <div className={cn("flex flex-col flex-1 p-4 md:p-10", isFeatured ? "lg:w-2/5 justify-center" : "")}>
                                    {isFeatured && (
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="flex w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                                            <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Featured Project</span>
                                        </div>
                                    )}

                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        <Link href={targetUrl} target={targetUrl !== "#" ? "_blank" : "_self"}>
                                            {project.title}
                                        </Link>
                                    </h3>

                                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 text-[13px] font-bold text-slate-700 bg-slate-100 border border-slate-200/60 rounded-lg cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                                        {project.githubUrl && (
                                            <Link href={project.githubUrl} target="_blank" className="flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                                                <GithubIcon className="w-5 h-5 mr-2" /> Source Code
                                            </Link>
                                        )}
                                        {project.liveUrl && (
                                            <Link href={project.liveUrl} target="_blank" className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors ml-auto">
                                                Live Preview <ExternalLink className="w-4 h-4 ml-2" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 2. ARCHIVE / OTHER WEBSITES LIST VIEW */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                            <Link2 className="w-6 h-6 mr-3 text-blue-500" /> Web/Sản phẩm khác
                        </h3>
                    </div>

                    <div className="flex flex-col border-t border-slate-200">
                        {portfolioData.archiveProjects.map((archive) => (
                            <a
                                key={archive.id}
                                href={archive.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-slate-200 hover:border-blue-300 transition-colors gap-4"
                            >
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors flex items-center">
                                        {archive.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2 sm:hidden">
                                        {archive.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden sm:flex items-center gap-4">
                                    <div className="flex items-center gap-2 mr-4">
                                        {archive.techStack.map((tech, i) => (
                                            <span key={i} className="text-sm font-medium text-slate-500">{tech}{i < archive.techStack.length - 1 ? <span className="mx-1 opacity-50">•</span> : ""}</span>
                                        ))}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-slate-400">
                                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}