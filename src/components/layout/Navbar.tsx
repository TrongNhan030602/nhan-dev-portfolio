"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data";
import { Menu, X, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, ZaloIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle Scroll-awareness logic (Optimize performance with passive listener)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-1 text-2xl font-black tracking-tighter text-slate-900 z-50 relative"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {portfolioData.personalInfo.name.split(" ")[2]}
                    <span className="text-blue-600 group-hover:text-cyan-500 transition-colors">.dev</span>
                </Link>

                {/* Desktop Navigation (Framer Motion Shared Layout) */}
                <nav className="hidden md:flex items-center p-1.5 bg-slate-100/60 rounded-full border border-slate-200/50 backdrop-blur-sm">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative px-5 py-2 text-sm font-bold text-slate-600 transition-colors hover:text-blue-700 z-10"
                        >
                            {hoveredIndex === idx && (
                                <motion.div
                                    layoutId="navbar-active-pill"
                                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/50 -z-10"
                                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Social Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href={portfolioData.personalInfo.github}
                        target="_blank"
                        className="p-2.5 text-slate-500 hover:text-white hover:bg-slate-900 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20"
                        aria-label="GitHub"
                    >
                        <GithubIcon className="w-4 h-4" />
                    </Link>
                    <Link
                        href={portfolioData.personalInfo.linkedin}
                        target="_blank"
                        className="p-2.5 text-slate-500 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </Link>

                    <div className="w-px h-6 bg-slate-200 mx-1"></div>

                    {/* Zalo button replacing Email */}
                    <Link
                        href={portfolioData.personalInfo.zalo}
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#0068ff] hover:bg-blue-700 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-600/30"
                        aria-label="Zalo Chat"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span>Zalo Chat</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden relative z-50 p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Mobile Menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="flex items-center gap-4 pt-4 mt-2 border-t border-slate-100">
                                <Link
                                    href={portfolioData.personalInfo.github}
                                    target="_blank"
                                    className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-colors"
                                >
                                    <GithubIcon className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={portfolioData.personalInfo.linkedin}
                                    target="_blank"
                                    className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <LinkedinIcon className="w-5 h-5" />
                                </Link>

                                {/* Zalo button replacing Email on Mobile */}
                                <Link
                                    href={portfolioData.personalInfo.zalo}
                                    target="_blank"
                                    className="flex-1 flex justify-center items-center gap-2 p-3 bg-[#0068ff] text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    <ZaloIcon className="w-5 h-5" />
                                    Zalo Chat
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}