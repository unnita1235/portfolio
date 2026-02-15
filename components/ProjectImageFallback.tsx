'use client'

interface ProjectImageFallbackProps {
    name: string
    category: string
}

export default function ProjectImageFallback({ name, category }: ProjectImageFallbackProps) {
    const gradients: Record<string, string> = {
        ai: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        saas: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
        realtime: 'linear-gradient(135deg, #431407 0%, #7c2d12 100%)',
        marketplace: 'linear-gradient(135deg, #500724 0%, #881337 100%)',
    }

    const initials = name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()

    return (
        <div
            className="w-full h-full relative overflow-hidden flex items-center justify-center"
            style={{
                background: gradients[category] || 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
            }}
        >
            {/* Dot grid overlay */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Name initials */}
            <span className="text-4xl font-bold text-white/80 z-10 select-none">
                {initials}
            </span>

            {/* Category badge at bottom-right */}
            <span className="absolute bottom-3 right-3 text-xs font-mono text-white/50 z-10">
                {category.toUpperCase()}
            </span>
        </div>
    )
}
