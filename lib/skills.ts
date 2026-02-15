export type SkillGroup = {
    category: string;
    color: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        category: 'AI / ML',
        color: '#818cf8',
        skills: ['LangChain', 'Google Genkit', 'Gemini API', 'RAG Pipelines', 'LangGraph', 'Vector Databases'],
    },
    {
        category: 'Frontend',
        color: '#34d399',
        skills: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        category: 'Backend',
        color: '#f59e0b',
        skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL'],
    },
    {
        category: 'Architecture',
        color: '#f472b6',
        skills: ['Multi-tenant SaaS', 'WebSockets', 'Real-time Systems', 'RAG Architecture'],
    },
    {
        category: 'Tools',
        color: '#94a3b8',
        skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Postman'],
    },
];
