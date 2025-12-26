
import poppins from "@/app/utils/font";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      profilePic: '/krystle.webp',
      name: "Krystle Wright",
      role: "Founder & Creative Director",
      text: `"Hiring Ali was one of the best decisions of my life!! He is incredible at coding and also front end design, making my vision come to life!! He is a great man, a kind man and so generous :) So polite and willing to do anything to make it all happen. Really smart!!"`
    },
    {
      profilePic: '/placeholder.png',
      name: "Andrew",
      role: "Startup Founder",
      text: `"He delivered exactly the app as I wanted. Planning the next milestones with him right now."`
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-black bg-grid-white/[0.05] relative text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${poppins.className} text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4`}>
            Client Testimonials
          </h2>
          <div className="h-1 w-12 bg-[#3F8E00] rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-10 bg-neutral-900/40 border border-neutral-800/50 rounded-2xl backdrop-blur-sm group hover:border-[#3F8E00]/30 transition-all duration-300"
            >
              <div className="absolute top-8 right-10 text-[#3F8E00]/20 group-hover:text-[#3F8E00]/40 transition-colors">
                <Quote size={48} />
              </div>

              <div className="space-y-6">
                <p className="text-neutral-300 text-lg leading-relaxed italic relative z-10">
                  {t.text}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/50">
                  <img
                    width={56}
                    height={56}
                    src={t.profilePic}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-neutral-800 group-hover:border-[#3F8E00]/50 transition-colors"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{t.name}</p>
                    <p className="text-[#3F8E00] text-sm font-medium">{t.role}</p>
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

