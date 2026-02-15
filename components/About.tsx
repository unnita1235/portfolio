'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-24" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-[40%] flex justify-center md:justify-start"
                    >
                        <div
                            className="inline-block"
                            style={{ boxShadow: '0 0 60px rgba(99,102,241,0.12)' }}
                        >
                            <Image
                                src="/avatar.svg"
                                alt="Unni T A"
                                width={320}
                                height={320}
                                className="rounded-2xl border border-[var(--border)] object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full md:w-[60%]"
                    >
                        <div className="text-xs font-mono text-[var(--accent)] tracking-widest mb-3">
                            ABOUT ME
                        </div>
                        <h2 className="text-3xl font-bold mb-6">
                            Building AI-powered systems that actually ship.
                        </h2>

                        <p className="mb-4">
                            I&apos;m a Full-Stack AI Engineer based in Kerala, India, with an
                            MCA from APJ Abdul Kalam Technological University (2023). I build
                            production-quality applications that integrate AI as core
                            infrastructure — not as a surface-level feature.
                        </p>

                        <p className="mb-6">
                            In the past 7 months I&apos;ve shipped 7 projects with 5 live
                            deployments, specializing in Next.js 15, TypeScript, LangChain,
                            and Google Gemini. I work as an AI-assisted developer — using AI
                            tools strategically to build faster, not as a substitute for
                            engineering judgment.
                        </p>

                        {/* Stats Row */}
                        <div className="flex gap-4 mt-6">
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-center flex-1">
                                <div className="text-2xl font-bold">7</div>
                                <div className="text-sm text-[var(--text-muted)]">
                                    Projects Shipped
                                </div>
                            </div>
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-center flex-1">
                                <div className="text-2xl font-bold">5</div>
                                <div className="text-sm text-[var(--text-muted)]">
                                    Live Deployments
                                </div>
                            </div>
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-center flex-1">
                                <div className="text-2xl font-bold">2023</div>
                                <div className="text-sm text-[var(--text-muted)]">
                                    MCA Graduate
                                </div>
                            </div>
                        </div>

                        {/* Education Card */}
                        <div className="mt-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 flex items-start gap-3">
                            <GraduationCap className="w-6 h-6 mt-1 shrink-0" />
                            <div>
                                <div className="font-bold">
                                    MCA — Master of Computer Applications
                                </div>
                                <div className="text-sm text-[var(--text-muted)]">
                                    APJ Abdul Kalam Technological University · Kerala, India ·
                                    2023
                                </div>
                            </div>
                        </div>

                        {/* CV Link */}
                        <div className="mt-6">
                            <a
                                href="/resume.pdf"
                                download
                                target="_blank"
                                className="text-[var(--accent)] hover:underline font-medium inline-flex items-center gap-1"
                                rel="noreferrer"
                            >
                                Download Resume →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
