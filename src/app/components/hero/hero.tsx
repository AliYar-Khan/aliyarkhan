import { useState } from "react";
import poppins from '@/app/utils/font';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import CalendlyWrapper from "../reactCalendly/reactCalendly";

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full bg-black text-white flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-32">
            {/* Top content: text + image */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
                {/* Text side */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
                    <h1
                        className={`${poppins.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight`}
                    >
                        Ali Yar Khan
                    </h1>
                    <p
                        className={`mt-4 text-gray-400 text-base sm:text-lg ${poppins.className} font-normal`}
                    >
                        Full-Stack Web &amp; Mobile Developer with 3+ years of experience
                        building scalable SaaS platforms, mobile apps, and AI-powered
                        solutions using React, Next.js, Node.js, Flutter, and Firebase.
                    </p>
                    <button
                        onClick={() => setOpen(true)}
                        className="mt-6 bg-[#3F8E00] hover:bg-[#52a61a] text-white hover:text-black px-8 py-3 rounded-md font-semibold transition-colors duration-200"
                    >
                        Book a Call →
                    </button>


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
                        src="/profile.jpeg"
                        alt="Ali Yar Khan profile"
                        className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* Infinite tech logos carousel */}
            <div className="mt-16 w-full max-w-6xl">
                <div className="h-64 rounded-md flex items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={[
                            { image: '/angular.png' },
                            { image: '/django.png' },
                            { image: '/flutter.png' },
                            { image: '/nestjs.png' },
                            { image: '/node.png' },
                            { image: '/react.png' },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
