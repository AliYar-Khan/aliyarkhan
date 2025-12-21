import poppins from "@/app/utils/font";

export default function Skills() {
    const skillGroups = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "TanStack Router/Query", "Tailwind CSS", "Shadcn UI", "TypeScript"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "NestJS", "Firebase", "Supabase", "REST APIs"],
        },
        {
            category: "Mobile",
            skills: ["Flutter", "React Native"],
        },
        {
            category: "Databases",
            skills: ["Firestore", "MongoDB", "PostgreSQL"],
        },
        {
            category: "AI & Automation",
            skills: ["OpenAI API", "LangChain", "AI Tools Integration"],
        },
        {
            category: "DevOps & Tools",
            skills: ["Git", "CI/CD (Codemagic)", "JIRA", "Docker"],
        },
    ];

    return (
        <section id="skills" className="py-16 bg-[#F9FAFB] px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className={`${poppins.className} text-3xl font-bold text-[#080808] mb-10 text-center`}>
                    Skills & Tech Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold mb-4 text-[#080808]">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
