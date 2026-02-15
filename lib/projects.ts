
export type Project = {
    id: string
    name: string
    description: string
    longDescription: string
    techStack: string[]
    category: 'ai' | 'saas' | 'realtime' | 'marketplace'
    githubUrl: string
    liveUrl: string | undefined
    images: string[]
    highlight: string
    featured: boolean
}

export const projects: Project[] = [
    {
        id: 'quickbite',
        name: 'QuickBite',
        description: 'RAG-based AI food recommendation system with vector retrieval pipeline.',
        longDescription: 'A production-grade food recommendation engine built on Retrieval-Augmented Generation. Uses LangChain to orchestrate a vector retrieval pipeline over food data, powered by Google Gemini for response generation. Full-stack Next.js 15 application with PostgreSQL for persistence.',
        techStack: ['Next.js 15', 'LangChain', 'PostgreSQL', 'Gemini API', 'TypeScript'],
        category: 'ai',
        githubUrl: 'https://github.com/unnita1235/QuickBite',
        liveUrl: undefined,
        images: ['/projects/quickbite-1.svg'],
        highlight: 'Production RAG pipeline — not a tutorial project',
        featured: true,
    },
    {
        id: 'ai-resume-parser',
        name: 'AI Resume Parser',
        description: 'Automated PDF resume analysis with structured JSON extraction via LLM pipeline.',
        longDescription: 'End-to-end AI pipeline that takes raw PDF resumes as input and outputs structured JSON. Uses Python and LangChain for document parsing and LLM extraction, with a Next.js frontend for upload and results display.',
        techStack: ['Python', 'LangChain', 'Gemini API', 'Next.js 15', 'TypeScript'],
        category: 'ai',
        githubUrl: 'https://github.com/unnita1235/AI-Resume-Parser',
        liveUrl: undefined,
        images: ['/projects/ai-resume-parser-1.svg'],
        highlight: 'End-to-end AI pipeline from raw PDF to structured output',
        featured: true,
    },
    {
        id: 'matchlink',
        name: 'MatchLink',
        description: 'AI-powered matchmaking platform with algorithm-driven connection logic.',
        longDescription: 'A matchmaking platform using AI-driven algorithms to connect users based on compatibility scoring. Next.js 15, TypeScript, PostgreSQL. Implements real user data flows with proper handling.',
        techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'React 18'],
        category: 'ai',
        githubUrl: 'https://github.com/unnita1235/MatchLink',
        liveUrl: undefined,
        images: ['/projects/matchlink-1.svg'],
        highlight: 'Algorithm-driven matching with production data handling',
        featured: true,
    },
    {
        id: 'tenantverse',
        name: 'TenantVerse',
        description: 'Multi-tenant SaaS platform with isolated data architecture and RBAC.',
        longDescription: 'Demonstrates proper tenant isolation, role-based access control, and shared infrastructure with data boundaries. Shows understanding of scalable SaaS architecture used by production B2B products.',
        techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'React 18'],
        category: 'saas',
        githubUrl: 'https://github.com/unnita1235/TenantVerse',
        liveUrl: undefined,
        images: ['/projects/tenantverse-1.svg'],
        highlight: 'Multi-tenancy architecture — production SaaS patterns',
        featured: false,
    },
    {
        id: 'stockpilot',
        name: 'StockPilot',
        description: 'Real-time inventory management with live sync and production-grade CRUD.',
        longDescription: 'Real-time inventory system with live stock updates, multi-item tracking, and responsive dashboard. Next.js 15 with real-time data layer backed by PostgreSQL.',
        techStack: ['Next.js 15', 'React 18', 'PostgreSQL', 'TypeScript'],
        category: 'realtime',
        githubUrl: 'https://github.com/unnita1235/StockPilot',
        liveUrl: undefined,
        images: ['/projects/stockpilot-1.svg'],
        highlight: 'Real-time sync with production-grade data layer',
        featured: false,
    },
    {
        id: 'vendorconnect',
        name: 'VendorConnect',
        description: 'B2B vendor marketplace with multi-party roles and access control.',
        longDescription: 'B2B marketplace connecting vendors and buyers with separate role-based flows. Multi-party access control, listing management, transactional architecture.',
        techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'React 18'],
        category: 'marketplace',
        githubUrl: 'https://github.com/unnita1235/VendorConnect',
        liveUrl: undefined,
        images: ['/projects/vendorconnect-1.svg'],
        highlight: 'Multi-role B2B platform with RBAC',
        featured: false,
    },
    {
        id: 'connectnow',
        name: 'ConnectNow',
        description: 'Real-time messaging app with low-latency WebSocket communication.',
        longDescription: 'WebSocket-based real-time messaging with room support, user presence, and message history. Demonstrates real-time system design beyond polling-based solutions.',
        techStack: ['Next.js 15', 'React 18', 'WebSockets', 'TypeScript'],
        category: 'realtime',
        githubUrl: 'https://github.com/unnita1235/ConnectNow',
        liveUrl: undefined,
        images: ['/projects/connectnow-1.svg'],
        highlight: 'Low-latency real-time communication layer',
        featured: false,
    },
]

export const getCategoryLabel = (category: Project['category']): string => {
    switch (category) {
        case 'ai': return 'AI / GenAI'
        case 'saas': return 'SaaS'
        case 'realtime': return 'Real-time'
        case 'marketplace': return 'Marketplace'
        default: return category
    }
}

export const CATEGORIES = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI / GenAI' },
    { id: 'saas', label: 'SaaS' },
    { id: 'realtime', label: 'Real-time' },
    { id: 'marketplace', label: 'Marketplace' },
]
