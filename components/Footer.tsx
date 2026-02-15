import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-[var(--border)] py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Left: Copyright */}
                <p className="text-sm text-[var(--text-muted)]">
                    © 2025 Unni T A. All rights reserved.
                </p>

                {/* Center: Info */}
                <p className="text-sm text-[var(--text-muted)] font-mono">
                    Built with Next.js 15 · Deployed on Vercel
                </p>

                {/* Right: Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/unnita1235"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text)] transition"
                    >
                        <Github className="w-5 h-5 text-[var(--text-muted)] hover:text-[var(--text)] transition" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/unnita/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text)] transition"
                    >
                        <Linkedin className="w-5 h-5 text-[var(--text-muted)] hover:text-[var(--text)] transition" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
