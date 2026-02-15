'use client';

import { motion, Variants } from 'framer-motion';
import { Brain, Server, ShieldCheck, Layers } from 'lucide-react';

const capabilities = [
    {
        title: 'Production GenAI',
        description: 'Implementing RAG pipelines that move beyond simple chat. Expertise in vector retrieval orchestration, agentic reasoning, and LLM observability.',
        icon: Brain,
        tags: ['LangChain', 'Vector DBs', 'RAG'],
    },
    {
        title: 'Scalable Architecture',
        description: 'Building performance-first applications using Next.js 15 and React 19. Focused on minimal bundle sizes, efficient hydration, and server-side optimization.',
        icon: Layers,
        tags: ['Next.js 15', 'Full-Stack', 'Performance'],
    },
    {
        title: 'Mission-Critical Reliability',
        description: 'Hardening applications for production. implementing robust CI/CD, extensive type-safety, and resilience patterns to ensure 24/7 stability.',
        icon: ShieldCheck,
        tags: ['Production-Grade', 'CI/CD', 'Resilience'],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Capabilities() {
    return (
        <section id="capabilities" className="section-padding container-tight">
            <div className="flex flex-col gap-4 mb-12">
                <span className="text-accent font-outfit font-medium text-sm uppercase tracking-widest">
                    Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-outfit font-semibold tracking-tight">
                    What I Build
                </h2>
                <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
                    Moving beyond tutorials. I specialize in engineering systems that are
                    operationally sound, performant, and technically defensible.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
                {capabilities.map((cap, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="glass-surface p-8 rounded-2xl flex flex-col items-start hover:border-accent/40 transition-colors group"
                    >
                        <div className="p-3 bg-accent/5 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
                            <cap.icon className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-outfit font-semibold mb-3">
                            {cap.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-6">
                            {cap.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                            {cap.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-wider font-semibold text-text/60 bg-border/40 px-2 py-0.5 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
