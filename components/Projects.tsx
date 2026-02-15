'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, CATEGORIES } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section id="projects" className="py-24 container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest mb-3">PROJECTS</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">7 projects. 7 months.</h3>
                <p className="text-[var(--text-muted)] text-lg mt-3 max-w-2xl mx-auto">
                    Each one built to production standards. No tutorial clones.
                </p>
            </div>

            <div className="flex justify-center gap-3 flex-wrap mb-10">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveFilter(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeFilter === cat.id
                                ? 'bg-[var(--accent)] text-white border-transparent'
                                : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--border-hover)]'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filtered.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}
