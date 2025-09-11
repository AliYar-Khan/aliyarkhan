import poppins from "@/app/utils/font";

export default function CaseStudies() {
  const cases = [
    {
      tag: "SaaS",
      title: "Artziii",
      description: `Artziii is a web application similar to Canva, 
      built to empower creators with AI-driven design capabilities. 
      It integrates the OpenAI API and a custom Models Lab that enables users to generate unique images, 
      illustrations, and artwork in just a few clicks. With a user-friendly 
      interface and real-time editing features, Artziii helps individuals and 
      businesses design professional-quality visuals without needing advanced design skills.`,
      img: "/artziii.jpg",
    },
    {
      tag: "Food",
      title: "Halal AI",
      description: `Halal AI is a cross-platform mobile app (Android & iOS) developed with Flutter 
      that helps users make informed dietary choices. By scanning a food or drink product, the app checks 
      its ingredients against a curated database to determine if they are permissible in Islam (Halal). 
      It’s designed for Muslims worldwide who want a quick, reliable, and easy-to-use tool for everyday 
      food verification.`,
      img: "/halal AI.jpg"
    },
    {
      tag: "Services",
      title: "Itria Home",
      description: `Itria Home is a React Native mobile app for Android & iOS that connects users with professional 
      cleaning service providers nearby. Customers can browse available cleaners, book appointments, and manage their 
      services seamlessly within the app. The platform makes it easier for households and service providers to connect, 
      ensuring a smooth booking experience and trusted home services at the tap of a button.`,
      img: "/itria.jpg"
    },
  ];

  return (
    <section id="case-studies" className="bg-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`${poppins.className} text-[34px] font-extrabold text-center text-black`}
        >
          Case Studies
        </h2>
        <p className="text-center max-w-xl mx-auto text-gray-500 mt-2">
          Every project tells a story. Dive into my case studies to see how I’ve
          helped startups and businesses turn ideas into scalable web and mobile
          solutions, from planning and design to development, deployment, and
          real-world results.
        </p>

        <div className="mt-14 space-y-16">
          {cases.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="w-[72px] bg-[#FFF6E9] justify-center items-center text-center rounded-2xl">
                  <span className="text-sm text-[#FFA217] font-bold">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-[#080808] text-2xl font-extrabold mt-2">{item.title}</h3>
                <p className="text-gray-500 mt-2">
                  {item.description}
                </p>
                {/* <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  View case study →
                </button> */}
              </div>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={item.img}
                  alt="case"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
