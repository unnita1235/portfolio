'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-start container mx-auto px-6 relative"
        >
            {/* Background Gradient */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(99,102,241,0.07) 0%, transparent 60%)',
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start"
            >
                {/* Eyebrow badge */}
                <motion.div
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1"
                >
                    <span className="animate-pulse">●</span> Open to Work · Kerala, India
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-[var(--text)] leading-none mt-6"
                >
                    Unni T A
                </motion.h1>

                {/* Subheading */}
                <motion.h2
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-2xl md:text-3xl text-[var(--text-muted)] mt-3"
                >
                    Full-Stack AI Engineer
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="font-mono text-lg text-[var(--text-muted)] mt-4"
                >
                    7 projects. 7 months. 5 live deployments.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-row gap-4 mt-8"
                >
                    <Link
                        href="#projects"
                        className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition scroll-smooth"
                    >
                        View Projects
                    </Link>
                    <a
                        href="/resume.pdf"
                        download
                        target="_blank"
                        className="border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg font-medium hover:border-[var(--border-hover)] transition"
                    >
                        Download CV
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <ChevronDown className="w-8 h-8 text-[var(--text-muted)]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
