'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Github, ExternalLink, AlertCircle, BarChart3, Database } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const categoryColors = {
    ai: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    saas: 'bg-green-500/10 text-green-400 border border-green-500/20',
    realtime: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    marketplace: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
};

const ProjectImageFallback = ({ name, category }: { name: string; category: string }) => (
    <div className={`w-full h-full flex items-center justify-center ${categoryColors[category as keyof typeof categoryColors] || 'bg-muted'}`}>
        <div className="text-center p-4">
            <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs font-medium uppercase tracking-wider opacity-70">{name}</p>
        </div>
    </div>
);

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, margin: "-50px" }}
            className="group flex flex-col glass-surface rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-colors h-full"
        >
            {/* Image Section - Locked Aspect Ratio for Stability */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                {imageError || !project.images?.[0] ? (
                    <ProjectImageFallback name={project.name} category={project.category} />
                ) : (
                    <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                        onError={() => setImageError(true)}
                    />
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm ${categoryColors[project.category]}`}>
                        {project.category}
                    </span>
                    {project.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent text-white shadow-sm">
                            Featured
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-outfit font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {project.name}
                    </h3>
                    <div className="flex gap-3">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors" aria-label="GitHub Repository">
                            <Github size={18} />
                        </a>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="Live Demo">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Why This Exists - Product Thinking */}
                {project.whyThisExists && (
                    <p className="text-xs font-medium text-accent italic mb-3">
                        {project.whyThisExists}
                    </p>
                )}

                <p className="text-sm text-text-muted line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Metrics & Arch Notes - Technical Depth */}
                <div className="flex flex-col gap-3 mb-6 mt-auto">
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-x-4 gap-y-1 py-3 border-y border-border/50">
                            {project.metrics.map((metric) => (
                                <div key={metric} className="flex items-center gap-1.5">
                                    <BarChart3 size={12} className="text-accent" />
                                    <span className="text-[11px] font-medium text-text/80">{metric}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {project.architectureNotes && (
                        <div className="flex items-start gap-2 text-[11px] text-text-muted bg-accent/5 p-2 rounded-lg border border-accent/10">
                            <Database size={12} className="mt-0.5 text-accent shrink-0" />
                            <span>{project.architectureNotes}</span>
                        </div>
                    )}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono tracking-tight bg-bg border border-border px-2 py-0.5 rounded text-text-muted">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
