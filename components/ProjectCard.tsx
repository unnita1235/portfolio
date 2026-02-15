'use client'

import { Project, getCategoryLabel } from '@/lib/projects'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectImageFallback from './ProjectImageFallback'

type ProjectCardProps = {
    project: Project
    index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false)

    const categoryColors = {
        ai: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
        saas: 'bg-green-500/10 text-green-400 border border-green-500/20',
        realtime: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
        marketplace: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
    }

    const hasImage = project.images && project.images.length > 0 && project.images[0] !== ''
    const showFallback = imageError || !hasImage

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
            className="group border border-[var(--border)] rounded-xl overflow-hidden flex flex-col hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 cursor-pointer h-full"
        >
            {/* TOP — Image container */}
            <div className="relative h-48 overflow-hidden rounded-t-xl bg-[var(--bg-card)]">
                {project.liveUrl ? (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
                        {showFallback ? (
                            <ProjectImageFallback name={project.name} category={project.category} />
                        ) : (
                            <Image
                                src={project.images[0]}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={() => setImageError(true)}
                            />
                        )}
                    </Link>
                ) : (
                    <>
                        {showFallback ? (
                            <ProjectImageFallback name={project.name} category={project.category} />
                        ) : (
                            <Image
                                src={project.images[0]}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={() => setImageError(true)}
                            />
                        )}
                    </>
                )}
            </div>

            {/* BODY */}
            <div className="bg-[var(--bg-card)] p-5 rounded-b-xl flex flex-col gap-3 flex-1">
                {/* Row 1: Name and Category */}
                <div className="flex justify-between items-start">
                    {project.liveUrl ? (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link shrink-0"
                        >
                            <h3 className="font-semibold text-lg text-[var(--text)] group-hover/link:text-[var(--accent)] transition-colors flex items-center gap-1">
                                {project.name}
                                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </h3>
                        </Link>
                    ) : (
                        <h3 className="font-semibold text-lg text-[var(--text)]">{project.name}</h3>
                    )}
                    <span className={`pill text-xs px-2 py-0.5 rounded-full ${categoryColors[project.category]}`}>
                        {getCategoryLabel(project.category)}
                    </span>
                </div>

                {/* Row 2: Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {project.description}
                </p>

                {/* Row 3: Highlight */}
                <div className="italic text-xs text-[var(--accent)]">
                    ✦ {project.highlight}
                </div>

                {/* Row 4: Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-xs bg-[var(--bg)] border border-[var(--border)] rounded px-2 py-0.5 text-[var(--text-muted)]">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Row 5: Links */}
                <div className="mt-auto pt-3 border-t border-[var(--border)] flex gap-3">
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition"
                    >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                    </Link>

                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm bg-[var(--accent)] text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition ml-auto"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
