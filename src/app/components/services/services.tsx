import poppins from "@/app/utils/font";
import { Rocket, ShieldCheck, Cpu, Smartphone, LayoutDashboard, Bot } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "SaaS MVP Development",
            desc: "Rapidly build and launch scalable MVPs for startups using Next.js and Supabase/Firebase. From concept to production-ready deployment.",
            icon: Rocket,
        },
        {
            title: "Custom Admin Dashboards",
            desc: "Data-heavy interior tools and admin panels with complex filtering, charts, and role-based access control.",
            icon: LayoutDashboard,
        },
        {
            title: "AI Integration & Automation",
            desc: "Integrate LLMs (OpenAI, Anthropic) into existing workflows to build chatbots, content generators, or automated reasoning agents.",
            icon: Bot,
        },
        {
            title: "Cross-Platform Mobile Apps",
            desc: "High-performance mobile applications for iOS and Android using Flutter or React Native with a single codebase.",
            icon: Smartphone,
        },
    ];

    return (
        <section id="services" className="w-full bg-black bg-grid-white/[0.05] relative text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${poppins.className} text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4`}>
                        What I Can Build For You
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Specialized development services tailored for startups and businesses looking to scale their digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <div key={idx} className="p-8 bg-neutral-900/40 border border-neutral-800/50 rounded-2xl hover:border-[#3F8E00]/50 transition-all duration-300 group backdrop-blur-sm flex flex-col items-center text-center">
                                <div className="p-4 rounded-2xl bg-[#3F8E00]/10 border border-[#3F8E00]/20 text-[#3F8E00] mb-6 group-hover:bg-[#3F8E00] group-hover:text-white transition-all duration-300 shadow-lg shadow-[#3F8E00]/5">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{s.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

