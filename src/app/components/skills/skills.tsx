import React from 'react';
import {
    Terminal, Cpu, Globe, Database, Wrench, Bot,
    Server, Layers, Box, Workflow, Link, Smile, Cloud
} from 'lucide-react';
import poppins from '@/app/utils/font';

interface Skill {
    name: string;
    iconClass?: string; // For devicon classes
    icon?: React.ElementType; // For lucide-react fallbacks
}

interface SkillCategory {
    category: string;
    icon: React.ElementType;
    items: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        category: "Languages",
        icon: Terminal,
        items: [
            { name: "TypeScript", iconClass: "devicon-typescript-plain" },
            { name: "JavaScript", iconClass: "devicon-javascript-plain" },
            { name: "Dart", iconClass: "devicon-dart-plain" },
            { name: "C/C++", iconClass: "devicon-c" },
            { name: "SQL", icon: Database }
        ]
    },
    {
        category: "Frameworks",
        icon: Cpu,
        items: [
            { name: "React", iconClass: "devicon-react-original" },
            { name: "React Native", iconClass: "devicon-reactnative-original-wordmark" },
            { name: "Flutter", iconClass: "devicon-flutter-plain" },
            { name: "Tanstack Start", iconClass: "devicon-react-plain" },
            { name: "Node.js", iconClass: "devicon-nodejs-plain" },
            { name: "Express", iconClass: "devicon-express-original" },
            { name: "Tailwind", iconClass: "devicon-tailwindcss-original" }
        ]
    },
    {
        category: "Databases",
        icon: Database,
        items: [
            { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
            { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
            { name: "Redis", iconClass: "devicon-redis-plain" },
            { name: "Supabase", iconClass: "devicon-supabase-plain" },
        ]
    },
    {
        category: "Networking",
        icon: Globe,
        items: [
            { name: "REST", icon: Globe },
            { name: "GraphQL", iconClass: "devicon-graphql-plain" },
            { name: "WebSockets", icon: Layers },
            { name: "gRPC", icon: Box },
            { name: "Nginx", iconClass: "devicon-nginx-original" },
        ]
    },
    {
        category: "Dev Tools",
        icon: Wrench,
        items: [
            { name: "Git", iconClass: "devicon-git-plain" },
            { name: "Linux", iconClass: "devicon-linux-plain" },
            { name: "Netlify", iconClass: "devicon-netlify-plain" }
        ]
    },
    {
        category: "AI Tools",
        icon: Bot,
        items: [
            { name: "OpenAI", icon: Bot },
            { name: "LangChain", icon: Link },
            { name: "Hugging Face", icon: Smile },
            { name: "TensorFlow", iconClass: "devicon-tensorflow-original" },
            { name: "PyTorch", iconClass: "devicon-pytorch-original" }
        ]
    }
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="w-full bg-black bg-grid-white/[0.05] relative text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${poppins.className} text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4`}>
                        Technical Expertise
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
                        A comprehensive overview of my current technology stack and specialized tools I use to build scalable products.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((skillGroup, index) => {
                        const GroupIcon = skillGroup.icon;
                        return (
                            <div key={index} className="p-6 border border-neutral-800 bg-neutral-900/40 rounded-xl hover:border-[#3F8E00]/50 transition-all duration-300 group flex flex-col h-full shadow-lg">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800/50 text-neutral-400 group-hover:text-[#3F8E00] transition-colors">
                                    <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-[#3F8E00]/10 transition-colors">
                                        <GroupIcon size={20} />
                                    </div>
                                    <h3 className="text-sm font-mono uppercase tracking-widest font-bold">{skillGroup.category}</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-0">
                                    {skillGroup.items.map((item, i) => {
                                        const ItemIcon = item.icon;
                                        return (
                                            <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-neutral-950/50 border border-neutral-800/50 hover:bg-neutral-900 hover:border-[#3F8E00]/30 transition-all duration-200 cursor-default group/item shadow-sm">
                                                {item.iconClass ? (
                                                    <i className={`${item.iconClass} text-base text-neutral-500 group-hover/item:text-[#3F8E00] transition-colors`} />
                                                ) : ItemIcon ? (
                                                    <ItemIcon size={16} className="text-neutral-500 group-hover/item:text-[#3F8E00] transition-colors" />
                                                ) : null}
                                                <span className="text-xs text-neutral-400 group-hover/item:text-neutral-200 font-mono truncate">
                                                    {item.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;