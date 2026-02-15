'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


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
                                src="/avatar.jpg"
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
                            01. THE MISSION
                        </div>
                        <h2 className="text-3xl font-bold mb-6">
                            Engineering Intelligence into the Modern Web.
                        </h2>

                        <p className="mb-4 text-lg leading-relaxed">
                            I specialize in architecting intelligent systems where AI isn&apos;t just a feature, but the core infrastructure. Based in Kerala, India, I bridge the gap between complex backend logic and seamless, AI-driven user experiences.
                        </p>

                        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
                            My approach is defined by **Velocity-First Engineering** — leveraging advanced AI tools to accelerate development cycles while maintaining the rigorous precision of production-grade software. In 7 months, I have moved 7 distinct concepts into the build phase, with 5 production-ready deployments.
                        </p>

                        {/* Stats Row */}
                        <div className="flex gap-4 mt-6">
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-center flex-1">
                                <div className="text-2xl font-bold text-[var(--text)]">7</div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] mt-1">
                                    Rapid Iterations
                                </div>
                            </div>
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-center flex-1">
                                <div className="text-2xl font-bold text-[var(--text)]">5</div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] mt-1">
                                    Live Productions
                                </div>
                            </div>
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-center flex-1">
                                <div className="text-2xl font-bold text-[var(--text)]">MCA</div>
                                <div className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] mt-1">
                                    Technical Depth
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
