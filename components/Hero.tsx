'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1], // ease-standard
        },
    },
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[90vh] flex flex-col justify-center items-start container-tight relative overflow-hidden"
        >
            {/* Background Aesthetic */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle at 20% 50%, hsla(var(--accent), 0.08) 0%, transparent 50%)',
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10"
            >
                {/* Micro-proof Strip */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-3 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full mb-6"
                >
                    <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        7+ Production-Ready Projects
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-outfit font-semibold tracking-tight text-text leading-[1.1]"
                >
                    Building the <br />
                    <span className="text-accent underline decoration-accent/20 underline-offset-8">Production GenAI</span> Stack
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-text-muted mt-8 max-w-2xl leading-relaxed"
                >
                    Full-Stack AI Engineer specializing in <span className="text-text font-medium">Next.js 15</span> and <span className="text-text font-medium">RAG Architectures</span>. I build systems that move beyond tutorials into real-world performance.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-4 mt-10"
                >
                    <Link
                        href="#projects"
                        className="group bg-accent text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
                    >
                        Explore Shipped Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 border border-border text-text px-8 py-3.5 rounded-full font-medium hover:border-border-hover hover:bg-bg-card transition-all"
                    >
                        Download CV
                        <Download className="w-4 h-4" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="flex items-center gap-3 text-sm text-text-muted font-medium">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                    <span>Scroll to explore</span>
                </div>
            </motion.div>
        </section>
    );
}
