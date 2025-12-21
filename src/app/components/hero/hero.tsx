import { useState } from "react";
import poppins from '@/app/utils/font';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import CalendlyWrapper from "../reactCalendly/reactCalendly";

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full bg-black bg-grid-white/[0.05] relative text-white flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-32 overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* Top content: text + image */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
                {/* Text side */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
                    <h1
                        className={`${poppins.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400`}
                    >
                        Full-Stack Software Engineer building scalable SaaS & AI-powered products
                    </h1>
                    <p
                        className={`mt-4 text-gray-400 text-base sm:text-lg ${poppins.className} font-normal`}
                    >
                        3+ years of experience building scalable SaaS platforms, mobile apps, and AI-powered solutions using MERN, Flutter, and Firebase.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="bg-[#3F8E00] hover:bg-[#52a61a] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
                        >
                            View Projects
                        </a>
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-transparent border border-[#3F8E00] text-[#3F8E00] hover:bg-[#3F8E00] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
                        >
                            Hire Me
                        </button>
                        <a
                            href="/Ali_Yar_Khan_Resume_latest.pdf"
                            target="_blank"
                            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
                        >
                            Download Resume
                        </a>
                    </div>


                    <CalendlyWrapper
                        open={open}
                        onClose={() => setOpen(false)}
                    />


                </div>

                {/* Image side */}
                <div className="flex-shrink-0">
                    <img
                        width={300}
                        height={300}
                        src="/profile.jpg"
                        alt="Ali Yar Khan profile"
                        className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
