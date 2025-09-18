import Image from "next/image";

import poppins from "@/app/utils/font";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Hero() {
    return (
        <section className="min-w-full min-h-[570px] bg-black text-white flex flex-col justify-between items-center px-8 py-32">
            <div className="flex flex-row justify-evenly min-w-full">
                <div className="flex flex-col justify-center">
                    <h1 className={`${poppins.className} text-5xl font-bold`}>Ali Yar Khan</h1>
                    <p className={`mt-4 text-gray-400 text-[14px] ${poppins.className} font-normal max-w-md`}>
                        Full-Stack Web & Mobile Developer with 3+ years of experience building scalable SaaS platforms, mobile apps, and AI-powered solutions using React, Next.js, Node.js, Flutter, and Firebase.
                    </p>
                    <button className="max-w-[310px] mt-6 bg-[#3F8E00] hover:text-black px-6 py-3 rounded-md font-semibold">
                        Let’s get started →
                    </button>
                </div>
                <div className="flex flex-col">
                    <Image
                        width={250}
                        height={250}
                        src="/profile.jpeg"
                        alt="profile"
                        className="w-[250px] h-[250px] rounded-full object-cover"
                    />
                </div>
            </div>
            <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={[
                        { image: '/angular.png' },
                        { image: '/django.png' },
                        { image: '/flutter.png' },
                        { image: '/nestjs.png' },
                        { image: '/node.png' },
                        { image: '/react.png' },
                    ]} />
            </div>
        </section>
    );
}
