import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PopupModal } from "react-calendly";
const poppins = {
  className: "font-poppins"
};
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];
  const socials = [
    { href: "https://www.linkedin.com/in/aliyark145", label: "in" },
    { href: "https://www.facebook.com/profile.php?id=100093610579694", label: "fb" },
    { href: "https://x.com/Mr_Programmer14", label: "X" }
  ];
  return /* @__PURE__ */ jsxs("nav", { className: "bg-black text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex min-w-[1110px] h-20 bg-[#1B1B1B] justify-between rounded-b-lg items-center space-x-12 py-4 px-8 mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex space-x-6", children: links.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.href,
          className: `${poppins.className} font-normal text-[14px] text-[#9C9C9C]`,
          children: l.label
        },
        l.label
      )) }),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: socials.map((s) => /* @__PURE__ */ jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          className: `${poppins.className} font-normal text-[14px] text-[#9C9C9C]`,
          children: s.label
        },
        s.label
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden flex justify-between items-center h-16 px-4", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setOpen(true), "aria-label": "Open Menu", children: /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6 text-white" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: socials.map((s) => /* @__PURE__ */ jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          onClick: () => setOpen(false),
          className: `${poppins.className} font-normal text-[16px] text-[#9C9C9C] hover:text-white`,
          children: s.label
        },
        s.label
      )) })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed inset-y-0 left-0 w-64 bg-[#1B1B1B] transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-4 border-b border-gray-700", children: [
            /* @__PURE__ */ jsx("span", { className: `${poppins.className} text-white text-lg font-semibold`, children: "Navigation" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Close Menu", children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6 text-white" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-4 p-6", children: links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.href,
              onClick: () => setOpen(false),
              className: `${poppins.className} font-normal text-[16px] text-[#9C9C9C] hover:text-white`,
              children: l.label
            },
            l.label
          )) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: () => setOpen(false)
      }
    )
  ] });
}
function CalendlyWrapper({ open, onClose }) {
  const [rootElem, setRootElem] = useState(null);
  useEffect(() => {
    setRootElem(document.getElementById("__next"));
  }, []);
  if (!rootElem) return null;
  console.log("popmodel");
  return /* @__PURE__ */ jsx(
    PopupModal,
    {
      open,
      url: "https://calendly.com/aliyark145/30min",
      rootElement: document.getElementById("__next"),
      onModalClose: onClose
    }
  );
}
function Hero() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-black bg-grid-white/[0.05] relative text-white flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl", children: [
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: `${poppins.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400`,
            children: "Full-Stack Software Engineer building scalable SaaS & AI-powered products"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: `mt-4 text-gray-400 text-base sm:text-lg ${poppins.className} font-normal`,
            children: "3+ years of experience building scalable SaaS platforms, mobile apps, and AI-powered solutions using MERN, Flutter, and Firebase."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mt-6 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#projects",
              className: "bg-[#3F8E00] hover:bg-[#52a61a] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200",
              children: "View Projects"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(true),
              className: "bg-transparent border border-[#3F8E00] text-[#3F8E00] hover:bg-[#3F8E00] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200",
              children: "Hire Me"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/Ali_Yar_Khan_Resume_latest.pdf",
              target: "_blank",
              className: "bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200",
              children: "Download Resume"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          CalendlyWrapper,
          {
            open,
            onClose: () => setOpen(false)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          width: 300,
          height: 300,
          src: "/profile.jpg",
          alt: "Ali Yar Khan profile",
          className: "w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
        }
      ) })
    ] })
  ] });
}
function AboutMe() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-16 bg-white px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: `${poppins.className} text-3xl font-bold text-[#080808] mb-6`, children: "About Me" }),
    /* @__PURE__ */ jsxs("div", { className: "text-gray-600 text-lg space-y-4", children: [
      /* @__PURE__ */ jsx("p", { children: "I’m a full-stack engineer with 4 years of experience building scalable SaaS platforms, AI-driven tools, and cross-platform mobile apps. I focus on clean architecture, performance, and solving real business problems." }),
      /* @__PURE__ */ jsx("p", { children: "I have built and deployed a variety of products including SaaS platforms, comprehensive admin dashboards, and AI-powered automation tools. My experience spans working with agile startups, freelancing for global clients, and architectural design for production systems." }),
      /* @__PURE__ */ jsx("p", { children: "Beyond just coding, I care about the business impact of my work—optimizing for high-performance user experiences, SEO, and maintainability." })
    ] })
  ] }) });
}
function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TanStack Router/Query", "Tailwind CSS", "Shadcn UI", "TypeScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "NestJS", "Firebase", "Supabase", "REST APIs"]
    },
    {
      category: "Mobile",
      skills: ["Flutter", "React Native"]
    },
    {
      category: "Databases",
      skills: ["Firestore", "MongoDB", "PostgreSQL"]
    },
    {
      category: "AI & Automation",
      skills: ["OpenAI API", "LangChain", "AI Tools Integration"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "CI/CD (Codemagic)", "JIRA", "Docker"]
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-16 bg-[#F9FAFB] px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: `${poppins.className} text-3xl font-bold text-[#080808] mb-10 text-center`, children: "Skills & Tech Stack" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: skillGroups.map((group, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-[#080808]", children: group.category }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: group.skills.map((skill) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium",
          children: skill
        },
        skill
      )) })
    ] }, idx)) })
  ] }) });
}
function FeaturedProjects() {
  const projects = [
    {
      name: "AI Tools Directory",
      problem: "Need a centralized platform to categorize and discover rapidly emerging AI tools.",
      whatIBuilt: "Built a scalable directory platform with dynamic filtering and admin control.",
      tech: "Next.js, Firebase, Tailwind",
      keyChallenges: "Scalable category architecture, optimizing search performance.",
      impact: "Improved discovery UX, scalable category-tool architecture, admin-friendly content management.",
      img: "/halal AI.jpg"
      // Using placeholder as specific AI dir image wasn't found, or re-use relevant one
    },
    {
      name: "Anhar - Marketplace",
      problem: "Sellers needed a dedicated platform to list products like Etsy with a focus on ease of use.",
      whatIBuilt: "Multi-vendor marketplace with shop creation, product listing, and checkout flows.",
      tech: "TanStack, Supabase, Tailwind, SSR",
      keyChallenges: "Complex state management for multi-vendor carts, SEO optimization with SSR.",
      impact: "Improved SEO, scalable architecture handling multiple sellers and buyers.",
      img: "/anhar.png"
    },
    {
      name: "Artziii",
      problem: "Creators often lack the design skills to produce unique, high-quality visuals quickly.",
      whatIBuilt: "AI-driven design web application integrating OpenAI and custom models.",
      tech: "React, Node.js, OpenAI API",
      keyChallenges: "Real-time image generation latency, intuitive UI for non-technical users.",
      impact: "Empowered users to generate professional-quality visuals in clicks without design skills.",
      img: "/artziii.jpg"
    },
    {
      name: "Halal AI",
      problem: "Muslims find it difficult to quickly verify if food ingredients are Halal while shopping.",
      whatIBuilt: "Cross-platform mobile app scanning barcodes/ingredients to verify Halal status.",
      tech: "Flutter, Dart, OpenFoodFacts API",
      keyChallenges: "Accurate ingredient parsing and matching against Halal guidelines.",
      impact: "Reliable, quick verification tool simplifying daily shopping for the Muslim community.",
      img: "/halal AI.jpg"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-20 bg-white px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: `${poppins.className} text-4xl font-bold text-[#080808] mb-16 text-center`, children: "Featured Projects" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-24", children: projects.map((project, idx) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`, children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 group", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: project.img,
            alt: project.name,
            className: "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-[#080808]", children: project.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 font-medium leading-relaxed", children: project.whatIBuilt }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 text-sm bg-gray-50 p-6 rounded-lg border border-gray-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "block font-bold text-gray-900 uppercase tracking-wide text-xs", children: "Problem" }),
            /* @__PURE__ */ jsx("span", { className: "block text-gray-600 leading-snug", children: project.problem })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "block font-bold text-gray-900 uppercase tracking-wide text-xs", children: "Tech Stack" }),
            /* @__PURE__ */ jsx("span", { className: "block text-gray-600 leading-snug font-mono text-xs", children: project.tech })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "block font-bold text-gray-900 uppercase tracking-wide text-xs", children: "Impact" }),
            /* @__PURE__ */ jsx("span", { className: "block text-gray-600 leading-snug", children: project.impact })
          ] })
        ] })
      ] })
    ] }, idx)) })
  ] }) });
}
function DeepDives() {
  return /* @__PURE__ */ jsx("section", { id: "case-studies", className: "py-16 bg-[#F9FAFB] px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: `${poppins.className} text-3xl font-bold text-[#080808] mb-12 text-center`, children: "Case Studies: Deep Dive" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#080808] mb-4", children: "Anhar Marketplace" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "The Problem" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Existing marketplace solutions were either too generic or lacked specific multi-vendor capabilities needed for this niche. The client needed a scalable, SEO-friendly platform where individual sellers could manage their own customized shops." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "The Solution" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Architected a multi-tenant capability using Supabase Row Level Security (RLS) to isolate seller data. Built the frontend with TanStack Router/Start for SSR to ensure high search engine visibility and fast initial loads." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "Results" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Reduced page load time by 40% using SSR. Successfully handled 500+ product listings during beta testing with zero database bottlenecks." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-gray-100", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-3", children: "Architecture & Trade-offs" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 text-sm space-y-2", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Decision:" }),
              " Used Supabase for backend-as-a-service."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Trade-off:" }),
              " sacrificed some custom backend flexibility for development speed and built-in auth/database features. Mitigated by using Edge Functions for complex logic."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Decision:" }),
              " TanStack Query for state management."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Benefit:" }),
              " drastically simplified server-state synchronization and caching, reducing boilerplate code."
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#080808] mb-4", children: "Artziii AI Design Tool" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "The Problem" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Users wanted to generate specific styles of artwork (e.g., anime, oil painting) but found general prompts in ChatGPT too inconsistent." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "The Solution" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: 'Built a "Models Lab" abstraction layer that pre-processes user intents into optimized prompts and selects the best fine-tuned model for the job.' })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "Results" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Increased user retention by 25% due to higher quality, consistent outputs. Reduced API costs by caching common generation requests." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-gray-100", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-3", children: "Architecture & Trade-offs" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 text-sm space-y-2", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Decision:" }),
              " Serverless architecture for API handling."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Trade-off:" }),
              " Cold starts were initially an issue. Solved by implementing keep-warm strategies during peak hours."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Complex State:" }),
              " Managed heavy canvas-like state in React, optimizing re-renders to ensure a smooth 60fps experience while manipulating images."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Services() {
  const services = [
    {
      title: "SaaS MVP Development",
      desc: "Rapidly build and launch scalable MVPs for startups using Next.js and Supabase/Firebase. From concept to production-ready deployment."
    },
    {
      title: "Custom Admin Dashboards",
      desc: "Data-heavy interior tools and admin panels with complex filtering, charts, and role-based access control."
    },
    {
      title: "AI Integration & Automation",
      desc: "Integrate LLMs (OpenAI, Anthropic) into existing workflows to build chatbots, content generators, or automated reasoning agents."
    },
    {
      title: "Cross-Platform Mobile Apps",
      desc: "High-performance mobile applications for iOS and Android using Flutter or React Native with a single codebase."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-16 bg-white px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: `${poppins.className} text-3xl font-bold text-[#080808] mb-12 text-center`, children: "What I Can Build For You" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((s, idx) => /* @__PURE__ */ jsxs("div", { className: "p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#080808] mb-3", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: s.desc })
    ] }, idx)) })
  ] }) });
}
function Testimonials() {
  const testimonials = [
    {
      profilePic: "/krystle.webp",
      name: "Krystle Wright",
      text: `Hiring Ali was one of the best decisions of my life!! 
      He is incredible at coding and also front end design, making my vision come to life!! 
      He is a great man, a kind man and so generous :) 
      So polite and willing to do anything to make it all happen. Really smart!! 
      I highly recommend Ali for any and all App creation!! Thanks so much Ali!!! 
      I look forward to working with you for years and years :)`
    },
    {
      profilePic: "/placeholder.png",
      name: "Andrew",
      text: "he delivered exactly the app, as I wanted. Planing the next milestones with him right now."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "testimonials", className: "bg-black text-white px-8 py-16 min-h-[804px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center", children: "Testimonials" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 mt-10", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800 space-y-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                width: 50,
                height: 50,
                src: t.profilePic,
                alt: "profile",
                className: "w-[50px] h-[50px] rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "mt-4 font-semibold", children: t.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: t.text })
        ]
      },
      i
    )) })
  ] }) });
}
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    attachment: null
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Invalid email format";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("mobile", form.mobile);
      fd.append("message", form.message);
      if (form.attachment) fd.append("attachment", form.attachment);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd
      });
      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };
  if (success) {
    return /* @__PURE__ */ jsx("section", { id: "contact", className: "bg-black text-white px-8 py-16 min-h-[604px]", children: /* @__PURE__ */ jsx("p", { className: "text-green-600 text-center mt-8", children: "✅ Thanks! Your message was sent." }) });
  }
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "bg-black text-white px-8 py-16 min-h-[604px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center", children: "Get In Touch" }),
    /* @__PURE__ */ jsx("p", { className: `mx-auto mt-4 text-gray-400 text-[14px] ${poppins.className} font-normal max-w-md text-center`, children: "Interested in working together? Fill out the form below or connect with me on social media." }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6 mt-6", children: [
      /* @__PURE__ */ jsx("a", { href: "https://github.com/AliYar-Khan", target: "_blank", className: "text-white hover:text-gray-400 font-bold underline", children: "GitHub" }),
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/aliyark145", target: "_blank", className: "text-white hover:text-gray-400 font-bold underline", children: "LinkedIn" }),
      /* @__PURE__ */ jsx("a", { href: "/resume.pdf", target: "_blank", className: "text-white hover:text-gray-400 font-bold underline", children: "Download Resume" })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        method: "POST",
        encType: "multipart/form-data",
        className: "max-w-lg mx-auto mt-8 space-y-4",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Please enter your name",
                className: "w-full p-3 rounded-md text-black bg-white",
                onChange: handleChange,
                value: form.name
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Please enter your email",
                className: "w-full p-3 rounded-md text-black bg-white",
                onChange: handleChange,
                value: form.email
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: errors.email })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "mobile",
              placeholder: "Enter mobile",
              className: "w-full p-3 rounded-md text-black bg-white",
              onChange: handleChange,
              value: form.mobile
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "message",
                placeholder: "Tell us about your goals, timeline, or any specific requirements.",
                rows: 10,
                className: "w-full p-3 rounded-md text-black bg-white",
                onChange: handleChange,
                value: form.message
              }
            ),
            errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: errors.message })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              name: "attachment",
              accept: "image/*,application/pdf",
              className: "w-full p-3 rounded-md text-black bg-white",
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx("button", { type: "submit", className: `w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold ${submitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`, children: submitting ? "Submitting…" : "Submit →" })
        ]
      }
    )
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(AboutMe, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(FeaturedProjects, {}),
    /* @__PURE__ */ jsx(DeepDives, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsxs("footer", { className: "text-center py-6 text-sm bg-black text-white", children: [
      "Made with ❤️",
      /* @__PURE__ */ jsx("br", {}),
      "© 2025 All rights reserved by Ali Yar Khan"
    ] })
  ] });
}
export {
  Home as component
};
