import Image from "next/image";
import { Poppins } from "next/font/google";

import poppins from "@/app/utils/font";

export default function Hero() {
    return (
        <section className="min-w-full min-h-[600px] bg-black text-white flex flex-col justify-between items-center px-8 py-36">
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
            <div className="flex flex-row justify-evenly min-w-full pt-28">
                <div className="flex flex-row space-x-5">
                    <span className="text-6xl font-extrabold text-white">4+</span>
                    <span className="text-xl m-0 p-0">Years<br />of experience</span>
                </div>
                <div className="flex flex-row space-x-5">
                    <span className="text-6xl font-extrabold text-white">10+</span>
                    <span className="text-xl m-0 p-0">Live<br />Apps</span>
                </div>
                <div className="flex flex-row space-x-5">
                    <span className="text-6xl font-extrabold text-white">50+</span>
                    <span className="text-xl m-0 p-0">Happy<br />Clients</span>
                </div>
                <div className="flex flex-row space-x-5">
                    <span className="text-6xl font-extrabold text-white">250k+</span>
                    <span className="text-xl m-0 p-0">Lines<br />of Code</span>
                </div>
            </div>
        </section>
    );
}
