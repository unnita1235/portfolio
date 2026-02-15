'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setFormState('success');
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => setFormState('idle'), 3000);
            } else {
                setFormState('error');
                setTimeout(() => setFormState('idle'), 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormState('error');
            setTimeout(() => setFormState('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[var(--bg)]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono text-[var(--accent)] tracking-widest mb-3 block">
                        CONTACT
                    </span>
                    <h2 className="text-4xl font-bold text-[var(--text)]">
                        Let&apos;s talk.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* LEFT COLUMN - Info */}
                    <div>
                        <p className="text-[var(--text-muted)] text-lg mb-8">
                            I respond to every message. Usually within 24 hours.
                        </p>

                        <div className="flex flex-col">
                            {/* Email Item */}
                            <div
                                onClick={handleCopyEmail}
                                className="flex items-center gap-3 py-3 border-b border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition cursor-pointer group"
                            >
                                <Mail size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition" />
                                <span className="font-medium">
                                    {copied ? "Copied!" : "unnita1235@gmail.com"}
                                </span>
                            </div>

                            {/* GitHub Item */}
                            <a
                                href="https://github.com/unnita1235"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 py-3 border-b border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition group"
                            >
                                <Github size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition" />
                                <span className="font-medium">github.com/unnita1235</span>
                            </a>

                            {/* LinkedIn Item */}
                            <a
                                href="https://www.linkedin.com/in/unnita/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 py-3 border-b border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition group"
                            >
                                <Linkedin size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition" />
                                <span className="font-medium">linkedin.com/in/unnita</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Name Field */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-sm font-medium text-[var(--text-muted)]">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={formState === 'sending' || formState === 'success'}
                                    className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 w-full text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors duration-150"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-[var(--text-muted)]">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={formState === 'sending' || formState === 'success'}
                                    className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 w-full text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors duration-150"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--text-muted)]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    placeholder="What are you working on? I'd like to hear about it."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={formState === 'sending' || formState === 'success'}
                                    className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 w-full text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors duration-150 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-2">
                                {formState === 'idle' && (
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition w-full md:w-fit"
                                    >
                                        Send Message <Send size={18} />
                                    </button>
                                )}

                                {formState === 'sending' && (
                                    <button
                                        disabled
                                        className="flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium opacity-70 w-full md:w-fit cursor-not-allowed"
                                    >
                                        Sending...
                                    </button>
                                )}

                                {formState === 'success' && (
                                    <div className="flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-6 py-3 rounded-lg font-medium w-full">
                                        <CheckCircle2 size={20} />
                                        Message sent! I&apos;ll get back to you soon.
                                    </div>
                                )}

                                {formState === 'error' && (
                                    <div className="flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 px-6 py-3 rounded-lg font-medium w-full">
                                        <AlertCircle size={20} />
                                        Something went wrong. Email me directly.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
