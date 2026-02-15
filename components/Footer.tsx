import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-border/50">
            <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Brand / Copyright */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <p className="text-sm font-outfit font-semibold tracking-tight">
                        Unni T A
                    </p>
                    <p className="text-[11px] text-text-muted font-mono uppercase tracking-widest">
                        © {currentYear} · Full-Stack AI Engineer
                    </p>
                </div>

                {/* Tech Info */}
                <div className="hidden lg:flex items-center gap-2 text-[11px] text-text-muted font-mono uppercase tracking-widest">
                    <span>Next.js 15</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>Tailwind CSS</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>Framer Motion</span>
                </div>

                {/* Socials / Signature */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 border-r border-border/50 pr-6">
                        <a
                            href="https://github.com/unnita1235"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-text transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/unnita/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <p className="text-[10px] text-text-muted font-mono flex items-center gap-1.5 uppercase tracking-tighter">
                        Built with <Heart size={10} className="text-red-500 fill-red-500" /> by Unni
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
