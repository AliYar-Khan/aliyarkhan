import poppins from "@/app/utils/font";

export default function Services() {
    const services = [
        {
            title: "SaaS MVP Development",
            desc: "Rapidly build and launch scalable MVPs for startups using Next.js and Supabase/Firebase. From concept to production-ready deployment.",
        },
        {
            title: "Custom Admin Dashboards",
            desc: "Data-heavy interior tools and admin panels with complex filtering, charts, and role-based access control.",
        },
        {
            title: "AI Integration & Automation",
            desc: "Integrate LLMs (OpenAI, Anthropic) into existing workflows to build chatbots, content generators, or automated reasoning agents.",
        },
        {
            title: "Cross-Platform Mobile Apps",
            desc: "High-performance mobile applications for iOS and Android using Flutter or React Native with a single codebase.",
        },
    ];

    return (
        <section id="services" className="py-16 bg-white px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className={`${poppins.className} text-3xl font-bold text-[#080808] mb-12 text-center`}>
                    What I Can Build For You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, idx) => (
                        <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-[#080808] mb-3">{s.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
