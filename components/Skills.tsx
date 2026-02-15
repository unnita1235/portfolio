'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillGroups } from '@/lib/skills';

const SkillCard = ({ group, index }: { group: typeof skillGroups[0]; index: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--border-hover)] transition-colors duration-200"
        >
            <div className="flex items-center gap-2 mb-4">
                <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: group.color }}
                />
                <h3 className="font-semibold text-sm capitalize">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1 rounded-full border"
                        style={{
                            borderColor: `${group.color}4d`,
                            color: group.color,
                            backgroundColor: `${group.color}14`,
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-[var(--accent)] tracking-widest mb-3 block uppercase">
                        STACK
                    </span>
                    <h2 className="text-4xl font-bold">What I build with</h2>
                    <p className="text-[var(--text-muted)] text-lg mt-3 max-w-2xl mx-auto">
                        Verified by shipping 7 real projects.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <SkillCard key={group.category} group={group} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
