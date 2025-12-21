import poppins from "@/app/utils/font";

export default function FeaturedProjects() {
    const projects = [
        {
            name: "AI Tools Directory",
            problem: "Need a centralized platform to categorize and discover rapidly emerging AI tools.",
            whatIBuilt: "Built a scalable directory platform with dynamic filtering and admin control.",
            tech: "Next.js, Firebase, Tailwind",
            keyChallenges: "Scalable category architecture, optimizing search performance.",
            impact: "Improved discovery UX, scalable category-tool architecture, admin-friendly content management.",
            img: "/halal AI.jpg" // Using placeholder as specific AI dir image wasn't found, or re-use relevant one
        },
        {
            name: "Anhar - Marketplace",
            problem: "Sellers needed a dedicated platform to list products like Etsy with a focus on ease of use.",
            whatIBuilt: "Multi-vendor marketplace with shop creation, product listing, and checkout flows.",
            tech: "TanStack, Supabase, Tailwind, SSR",
            keyChallenges: "Complex state management for multi-vendor carts, SEO optimization with SSR.",
            impact: "Improved SEO, scalable architecture handling multiple sellers and buyers.",
            img: "/anhar.png"
        },
        {
            name: "Artziii",
            problem: "Creators often lack the design skills to produce unique, high-quality visuals quickly.",
            whatIBuilt: "AI-driven design web application integrating OpenAI and custom models.",
            tech: "React, Node.js, OpenAI API",
            keyChallenges: "Real-time image generation latency, intuitive UI for non-technical users.",
            impact: "Empowered users to generate professional-quality visuals in clicks without design skills.",
            img: "/artziii.jpg"
        },
        {
            name: "Halal AI",
            problem: "Muslims find it difficult to quickly verify if food ingredients are Halal while shopping.",
            whatIBuilt: "Cross-platform mobile app scanning barcodes/ingredients to verify Halal status.",
            tech: "Flutter, Dart, OpenFoodFacts API",
            keyChallenges: "Accurate ingredient parsing and matching against Halal guidelines.",
            impact: "Reliable, quick verification tool simplifying daily shopping for the Muslim community.",
            img: "/halal AI.jpg"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${poppins.className} text-4xl font-bold text-[#080808] mb-16 text-center`}>
                    Featured Projects
                </h2>
                <div className="space-y-24">
                    {projects.map((project, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>

                            {/* Image Section */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-3xl font-bold text-[#080808]">{project.name}</h3>
                                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                                    {project.whatIBuilt}
                                </p>

                                <div className="grid grid-cols-1 gap-4 text-sm bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <div className="space-y-1">
                                        <span className="block font-bold text-gray-900 uppercase tracking-wide text-xs">Problem</span>
                                        <span className="block text-gray-600 leading-snug">{project.problem}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block font-bold text-gray-900 uppercase tracking-wide text-xs">Tech Stack</span>
                                        <span className="block text-gray-600 leading-snug font-mono text-xs">{project.tech}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block font-bold text-gray-900 uppercase tracking-wide text-xs">Impact</span>
                                        <span className="block text-gray-600 leading-snug">{project.impact}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
