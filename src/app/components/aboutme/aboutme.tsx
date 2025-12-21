import poppins from "@/app/utils/font";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-white px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className={`${poppins.className} text-3xl font-bold text-[#080808] mb-6`}>
          About Me
        </h2>
        <div className="text-gray-600 text-lg space-y-4">
          <p>
            I’m a full-stack engineer with 4 years of experience building scalable SaaS platforms, 
            AI-driven tools, and cross-platform mobile apps. I focus on clean architecture, 
            performance, and solving real business problems.
          </p>
          <p>
            I have built and deployed a variety of products including SaaS platforms, comprehensive 
            admin dashboards, and AI-powered automation tools. My experience spans working with 
            agile startups, freelancing for global clients, and architectural design for production systems.
          </p>
          <p>
            Beyond just coding, I care about the business impact of my work—optimizing for 
            high-performance user experiences, SEO, and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
