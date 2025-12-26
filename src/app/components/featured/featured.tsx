import poppins from "@/app/utils/font";
import { Globe, Smartphone, Monitor } from "lucide-react";

export default function FeaturedProjects() {
    const projects = [
        {
            name: "AI Tools Directory",
            problem: "Need a centralized platform to categorize and discover rapidly emerging AI tools.",
            whatIBuilt: "Built a scalable directory platform with dynamic filtering and admin control.",
            tech: "Next.js, Firebase, Tailwind",
            keyChallenges: "Scalable category architecture, optimizing search performance.",
            impact: "Improved discovery UX, scalable category-tool architecture, admin-friendly content management.",
            img: "/halal AI.jpg"
        },
        {
            name: "Anhar - Marketplace",
            problem: "Sellers needed a dedicated platform to list products like Etsy with a focus on ease of use.",
            whatIBuilt: "Multi-vendor marketplace with shop creation, product listing, and checkout flows.",
            tech: "TanStack, Supabase, Tailwind, SSR",
            keyChallenges: "Complex state management for multi-vendor carts, SEO optimization with SSR.",
            impact: "Improved SEO, scalable architecture handling multiple sellers and buyers.",
            img: "/anhar.png",
            ios: 'Coming Soon',
            android: 'Coming Soon',
            web: 'Coming Soon'
        },
        {
            name: "Artziii",
            problem: "Creators often lack the design skills to produce unique, high-quality visuals quickly.",
            whatIBuilt: "AI-driven design web application integrating OpenAI and custom models.",
            tech: "React, Node.js, OpenAI API",
            keyChallenges: "Real-time image generation latency, intuitive UI for non-technical users.",
            impact: "Empowered users to generate professional-quality visuals in clicks without design skills.",
            img: "/artziii.jpg",
            ios: '',
            android: '',
            web: 'https://artziii.com'
        },
        {
            name: "Halal AI",
            problem: "Muslims find it difficult to quickly verify if food ingredients are Halal while shopping.",
            whatIBuilt: "Cross-platform mobile app scanning barcodes/ingredients to verify Halal status.",
            tech: "Flutter, Dart, OpenFoodFacts API",
            keyChallenges: "Accurate ingredient parsing and matching against Halal guidelines.",
            impact: "Reliable, quick verification tool simplifying daily shopping for the Muslim community.",
            img: "/halal AI.jpg",
            ios: 'https://apps.apple.com/us/app/halal-ai-food-scanner/id6743864121',
            android: 'https://play.google.com/store/apps/details?id=com.halal_check_ai.app',
            web: 'Coming Soon'
        },
    ];

    return (
        <section id="projects" className="w-full bg-black bg-grid-white/[0.05] relative text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className={`${poppins.className} text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6`}>
                        Featured Projects
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
                        A selection of my recent work across web platforms, mobile applications, and AI integrations.
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900/50 p-2">
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-3">
                                    <h3 className={`${poppins.className} text-3xl sm:text-4xl font-bold text-white tracking-tight`}>{project.name}</h3>
                                    <div className="h-1 w-20 bg-[#3F8E00] rounded-full"></div>
                                </div>

                                <p className="text-xl text-neutral-300 font-medium leading-relaxed">
                                    {project.whatIBuilt}
                                </p>

                                <div className="grid grid-cols-1 gap-6 bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
                                    <div className="space-y-2">
                                        <span className="flex items-center gap-2 font-bold text-[#3F8E00] uppercase tracking-widest text-[10px]">
                                            <div className="w-1 h-1 bg-[#3F8E00] rounded-full"></div> Problem
                                        </span>
                                        <span className="block text-neutral-400 leading-snug text-sm">{project.problem}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="flex items-center gap-2 font-bold text-[#3F8E00] uppercase tracking-widest text-[10px]">
                                            <div className="w-1 h-1 bg-[#3F8E00] rounded-full"></div> Tech Stack
                                        </span>
                                        <span className="block text-neutral-300 leading-snug font-mono text-xs">{project.tech}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="flex items-center gap-2 font-bold text-[#3F8E00] uppercase tracking-widest text-[10px]">
                                            <div className="w-1 h-1 bg-[#3F8E00] rounded-full"></div> Impact
                                        </span>
                                        <span className="block text-neutral-400 leading-snug text-sm">{project.impact}</span>
                                    </div>
                                </div>

                                {/* Custom Links Section */}
                                {(project.web || project.ios || project.android) && (
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {project.web && project.web !== 'Coming Soon' && (
                                            <a href={project.web} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-6 py-3 bg-[#3F8E00] text-white rounded-lg hover:bg-[#4ea800] transition-all group/btn shadow-lg shadow-[#3F8E00]/10 font-bold text-sm">
                                                <Monitor className="w-4 h-4" /> Live Website
                                            </a>
                                        )}
                                        {project.ios && project.ios !== 'Coming Soon' && (
                                            <a href={project.ios} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-6 py-3 bg-neutral-800 text-neutral-100 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition-all font-bold text-sm">
                                                <Smartphone className="w-4 h-4" /> App Store
                                            </a>
                                        )}
                                        {project.android && project.android !== 'Coming Soon' && (
                                            <a href={project.android} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-6 py-3 bg-neutral-800 text-neutral-100 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition-all font-bold text-sm">
                                                <Smartphone className="w-4 h-4" /> Google Play
                                            </a>
                                        )}
                                        {(project.web === 'Coming Soon' || project.ios === 'Coming Soon' || project.android === 'Coming Soon') && (
                                            <div className="flex items-center gap-2.5 px-6 py-3 bg-neutral-900/50 text-neutral-500 border border-neutral-800 rounded-lg cursor-not-allowed font-bold text-sm">
                                                <Globe className="w-4 h-4 opacity-50" /> {project.web === 'Coming Soon' ? 'Website' : 'Mobile App'} Coming Soon
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

