import poppins from "@/app/utils/font";
import { User, Code, Briefcase } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-black bg-grid-white/[0.05] relative text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="p-3 rounded-2xl bg-[#3F8E00]/10 border border-[#3F8E00]/20 text-[#3F8E00] mb-6">
            <User size={28} />
          </div>
          <h2 className={`${poppins.className} text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center`}>
            About Me
          </h2>
          <div className="h-1 w-12 bg-[#3F8E00] rounded-full mt-4"></div>
        </div>

        <div className="text-neutral-400 text-lg space-y-8 leading-relaxed">
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#3F8E00]/20 rounded-full group-hover:bg-[#3F8E00]/50 transition-colors"></div>
            <p className="pl-6 italic">
              I’m a <span className="text-white font-medium italic">full-stack engineer</span> with 4 years of experience building scalable SaaS platforms,
              AI-driven tools, and cross-platform mobile apps. I focus on clean architecture,
              performance, and solving real business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <Briefcase size={18} className="text-[#3F8E00]" />
                Experience
              </div>
              <p>
                I have built and deployed a variety of products including SaaS platforms, comprehensive
                admin dashboards, and AI-powered automation tools. My experience spans working with
                agile startups and freelancing for global clients.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <Code size={18} className="text-[#3F8E00]" />
                Philosophy
              </div>
              <p>
                Beyond just coding, I care about the business impact of my work—optimizing for
                high-performance user experiences, SEO, and maintainability. I build with the long-term goal in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

