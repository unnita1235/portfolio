'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const OpenTo = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const roles = [
        "AI Engineer",
        "GenAI Engineer",
        "Full-Stack AI Engineer"
    ];

    return (
        <section
            ref={ref}
            className="w-full py-24 bg-[var(--bg-card)] border-y border-[var(--border)]"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl mx-auto px-6 flex flex-col gap-6"
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1 text-sm w-fit">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Open to Work
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">
                    Currently looking for my next role.
                </h2>

                {/* Subtext */}
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                    Open to AI Engineer, GenAI Engineer, and Full-Stack AI Engineer roles.
                    <br className="hidden md:block" />
                    Based in Kerala, India — open to remote opportunities.
                </p>

                {/* Role pills */}
                <div className="flex flex-wrap gap-3">
                    {roles.map((role) => (
                        <span
                            key={role}
                            className="font-mono text-sm bg-[var(--bg)] border border-[var(--border)] rounded-full px-4 py-2 text-[var(--text-muted)]"
                        >
                            {role}
                        </span>
                    ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-2">
                    <a
                        href="https://github.com/unnita1235"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                    >
                        <Github size={20} />
                        View GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/unnita/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg font-medium hover:border-[var(--border-hover)] transition"
                    >
                        <Linkedin size={20} />
                        Connect on LinkedIn
                    </a>
                    <a
                        href="mailto:unnita1235@gmail.com"
                        className="flex items-center gap-2 border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg font-medium hover:border-[var(--border-hover)] transition"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default OpenTo;
