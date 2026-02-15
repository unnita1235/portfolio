'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, CATEGORIES } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projects.filter((project) =>
        filter === 'all' ? true : project.category === filter
    );

    return (
        <section id="projects" className="section-padding container-wide">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-outfit font-medium text-sm uppercase tracking-widest">
                        Selected Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl font-outfit font-semibold tracking-tight">
                        Shipped & Production Work
                    </h2>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === cat.id
                                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                                    : 'bg-border/40 text-text-muted hover:bg-border/60 hover:text-text'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full py-20 text-center glass-surface rounded-2xl"
                        >
                            <p className="text-text-muted">No projects found in this category.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
