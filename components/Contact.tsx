'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Copy, ExternalLink } from 'lucide-react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formState, setFormState] = useState<FormState>('idle');
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const emailToCopy = "unnita1235@gmail.com";
        navigator.clipboard.writeText(emailToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setFormState('success');
                setName(''); setEmail(''); setMessage('');
                setTimeout(() => setFormState('idle'), 4000);
            } else {
                setFormState('error');
                setTimeout(() => setFormState('idle'), 5000);
            }
        } catch (_error) {
            setFormState('error');
            setTimeout(() => setFormState('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Info Column */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-accent font-outfit font-medium text-sm uppercase tracking-widest">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-outfit font-semibold tracking-tight leading-tight">
                            Let&apos;s build <br />
                            <span className="text-text-muted">something impactful.</span>
                        </h2>
                    </div>

                    <p className="text-lg text-text-muted leading-relaxed max-w-sm">
                        I respond to every message personally. Usually within one business day.
                    </p>

                    <div className="flex flex-col gap-2 mt-4">
                        <button
                            onClick={handleCopyEmail}
                            className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/40 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-accent" />
                                <span className="font-medium text-text/80">unnita1235@gmail.com</span>
                            </div>
                            {copied ? (
                                <span className="text-xs font-bold text-accent uppercase tracking-tighter">Copied!</span>
                            ) : (
                                <Copy size={16} className="text-text-muted group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                            )}
                        </button>

                        <div className="flex gap-2">
                            <a
                                href="https://github.com/unnita1235"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/40 transition-all group"
                            >
                                <Github size={20} className="text-text-muted group-hover:text-text transition-colors" />
                                <span className="text-sm font-medium">GitHub</span>
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/unnita/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-muted/30 border border-border hover:border-accent/40 transition-all group"
                            >
                                <Linkedin size={20} className="text-text-muted group-hover:text-text transition-colors" />
                                <span className="text-sm font-medium">LinkedIn</span>
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-surface p-8 rounded-3xl border border-border shadow-2xl shadow-black/5"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Unni T A"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={formState === 'sending' || formState === 'success'}
                                    className="bg-bg/50 border border-border rounded-xl px-4 py-3 placeholder:text-text-muted/50 focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="hello@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={formState === 'sending' || formState === 'success'}
                                    className="bg-bg/50 border border-border rounded-xl px-4 py-3 placeholder:text-text-muted/50 focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                placeholder="What's on your mind?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={formState === 'sending' || formState === 'success'}
                                className="bg-bg/50 border border-border rounded-xl px-4 py-3 placeholder:text-text-muted/50 focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all outline-none resize-none"
                            />
                        </div>

                        <div className="mt-2">
                            {formState === 'idle' && (
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 active:scale-[0.98] transition-all w-full md:w-fit"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            )}

                            {formState === 'sending' && (
                                <button
                                    disabled
                                    className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold opacity-70 w-full md:w-fit cursor-not-allowed"
                                >
                                    Sending...
                                </button>
                            )}

                            {formState === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-3 bg-green-500/10 text-green-500 border border-green-500/20 px-6 py-4 rounded-xl font-medium w-full"
                                >
                                    <CheckCircle2 size={24} />
                                    <span>Message sent! Expect a reply soon.</span>
                                </motion.div>
                            )}

                            {formState === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-3 bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-4 rounded-xl font-medium w-full"
                                >
                                    <AlertCircle size={24} />
                                    <span>Something went wrong. Reach out manually.</span>
                                </motion.div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
