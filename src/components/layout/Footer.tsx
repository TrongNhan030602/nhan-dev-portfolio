import Link from "next/link";
import { portfolioData } from "@/data";
import { Mail, ArrowRight, MapPin, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, ZaloIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0a0a0a] pt-32 pb-12 overflow-hidden border-t border-slate-900">
            {/* Abstract Tech Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Big Call To Action (CTA) */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-bold mb-8 backdrop-blur-md shadow-lg">
                        <span className="flex w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                        Ready for new challenges
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
                        Have a project to <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">bring to life?</span>
                    </h2>
                    <a
                        href={portfolioData.personalInfo.zalo}
                        target="_blank"
                        className="group flex items-center justify-center px-10 py-5 text-base font-bold text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] hover:-translate-y-1"
                    >
                        Let&apos;s chat on Zalo
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                    </a>
                </div>

                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-800/60 pt-16 pb-12">

                    {/* Brand & Location */}
                    <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="group flex items-center gap-1 text-3xl font-black tracking-tighter text-white mb-4">
                            {portfolioData.personalInfo.name.split(" ")[2]}
                            <span className="text-blue-500 group-hover:text-cyan-400 transition-colors">.dev</span>
                        </Link>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-8">
                            {portfolioData.personalInfo.role}. Specializing in robust backend system architecture and optimizing user interface experiences.
                        </p>
                        <div className="inline-flex items-center gap-2 text-slate-300 text-sm font-semibold bg-slate-800/50 px-5 py-2.5 rounded-xl border border-slate-700/50 shadow-inner">
                            <MapPin className="w-4 h-4 text-blue-400" />
                            Can Tho, Vietnam (Remote & On-site)
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start">
                        <h4 className="text-slate-100 font-black tracking-widest uppercase mb-6 text-sm">Navigation</h4>
                        <nav className="flex flex-col gap-4 text-slate-400 font-medium">
                            <Link href="#experience" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3"></span> Experience
                            </Link>
                            <Link href="#skills" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3"></span> Professional Skills
                            </Link>
                            <Link href="#projects" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3"></span> Featured Projects
                            </Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-end">
                        <h4 className="text-slate-100 font-black tracking-widest uppercase mb-6 text-sm">Connect</h4>
                        <div className="flex flex-wrap justify-center md:justify-end gap-3">
                            <a
                                href={portfolioData.personalInfo.github}
                                target="_blank"
                                className="p-3.5 bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 rounded-xl transition-all duration-300 shadow-sm"
                                aria-label="GitHub"
                            >
                                <GithubIcon className="w-5 h-5" />
                            </a>
                            <a
                                href={portfolioData.personalInfo.linkedin}
                                target="_blank"
                                className="p-3.5 bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/50 rounded-xl transition-all duration-300 shadow-sm"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                            <a
                                href={portfolioData.personalInfo.zalo}
                                target="_blank"
                                className="p-3.5 bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 rounded-xl transition-all duration-300 shadow-sm"
                                aria-label="Zalo"
                            >
                                <ZaloIcon className="w-5 h-5" />
                            </a>
                            <a
                                href={`mailto:${portfolioData.personalInfo.email}`}
                                className="p-3.5 bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-rose-400 hover:bg-rose-900/30 hover:border-rose-500/50 rounded-xl transition-all duration-300 shadow-sm"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright & Tech Stack Badge */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/60 text-sm text-slate-500">
                    <p className="font-medium mb-4 md:mb-0">
                        © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 font-bold px-4 py-2 bg-slate-900 rounded-lg border border-slate-800">
                        <Terminal className="w-4 h-4 text-blue-500" />
                        <span>Next.js 15</span>
                        <span className="text-slate-700 mx-1">•</span>
                        <span>Tailwind v4</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}