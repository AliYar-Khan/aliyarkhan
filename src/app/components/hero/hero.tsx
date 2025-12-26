import { useState } from "react";
import poppins from '@/app/utils/font';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import CalendlyWrapper from "../reactCalendly/reactCalendly";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full bg-black bg-grid-white/[0.05] relative text-white flex flex-col items-center px-6 sm:px-10 lg:px-20 py-24 lg:py-48 overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* Top content: text + image */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-16 lg:gap-24">
                {/* Text side */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F8E00]/10 border border-[#3F8E00]/20 text-[#3F8E00] text-xs font-mono font-bold tracking-widest uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3F8E00] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3F8E00]"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1
                        className={`${poppins.className} text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400`}
                    >
                        Full-Stack Engineer: SaaS & AI Solutions
                    </h1>
                    <p
                        className={`mt-6 text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl`}
                    >
                        Building high-performance SaaS platforms & mobile apps with <span className="text-white font-semibold">MERN</span>, <span className="text-white font-semibold">Flutter</span>, and <span className="text-white font-semibold">AI frameworks</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="bg-[#3F8E00] hover:bg-[#4ea800] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#3F8E00]/20 flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-transparent border border-neutral-800 text-white hover:bg-neutral-800/50 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2"
                        >
                            <Mail size={18} />
                            Hire Me
                        </button>
                        <a
                            href="/Ali_Yar_Khan_Resume_latest.pdf"
                            target="_blank"
                            className="text-neutral-400 hover:text-white px-4 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    <CalendlyWrapper
                        open={open}
                        onClose={() => setOpen(false)}
                    />
                </div>

                {/* Image side */}
                <div className="relative flex-shrink-0">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#3F8E00]/20 to-transparent rounded-full blur-2xl opacity-60"></div>
                    <div className="relative ring-1 ring-neutral-800 p-2 rounded-full bg-neutral-900/50 backdrop-blur-sm shadow-2xl">
                        <img
                            width={320}
                            height={320}
                            src="/profile.jpg"
                            alt="Ali Yar Khan profile"
                            className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

