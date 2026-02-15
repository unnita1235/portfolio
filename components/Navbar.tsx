'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${isScrolled ? 'backdrop-blur-md border-b border-border bg-bg/80' : 'bg-transparent'
                }`}
        >
            <div className="container-wide flex items-center justify-between w-full">
                <Link
                    href="#hero"
                    className="text-xl font-outfit font-semibold tracking-tight hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    Unni T A
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-accent' : 'text-text-muted hover:text-text'
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-text focus-visible:ring-2 focus-visible:ring-accent rounded-md focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 bg-bg/98 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 h-[calc(100vh-4rem)]"
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-2xl font-outfit font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-muted'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
