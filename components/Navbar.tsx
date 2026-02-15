'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle active section tracking
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#hero"
                    className="text-xl font-semibold tracking-wide hover:text-[var(--accent)] transition-colors"
                    onClick={() => {
                        setActiveSection('hero');
                        setIsOpen(false);
                    }}
                >
                    Unni T A
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${isActive
                                        ? 'text-[var(--accent)] underline underline-offset-4'
                                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                                    }`}
                                onClick={() => setActiveSection(link.href.substring(1))}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[var(--text)] focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-16 bg-[var(--bg)]/95 backdrop-blur-md z-40 md:hidden flex flex-col items-center justify-center space-y-8 h-[calc(100vh-4rem)]" // adjust for header height
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-2xl font-medium transition-colors ${isActive
                                            ? 'text-[var(--accent)] underline underline-offset-4'
                                            : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                                        }`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setActiveSection(link.href.substring(1));
                                    }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
