import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PopupModal } from "react-calendly";
const poppins = {
  className: "font-poppins"
};
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#recent-work", label: "Recent Work" },
    { href: "#contact", label: "Get In Touch" }
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      ),
      children: /* @__PURE__ */ jsx(
        "ul",
        {
          ref: scrollerRef,
          className: cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-28 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          ),
          children: items.map((item, idx) => /* @__PURE__ */ jsx(
            "li",
            {
              className: "relative flex flex-col items-center justify-center w-[150px] shrink-0 rounded-2xl px-2 py-2",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.image,
                  width: 100,
                  height: 100,
                  alt: "logo"
                }
              )
            },
            idx
          ))
        }
      )
    }
  );
};
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
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-black text-white flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl", children: [
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: `${poppins.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight`,
            children: "Ali Yar Khan"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: `mt-4 text-gray-400 text-base sm:text-lg ${poppins.className} font-normal`,
            children: "Full-Stack Web & Mobile Developer with 3+ years of experience building scalable SaaS platforms, mobile apps, and AI-powered solutions using React, Next.js, Node.js, Flutter, and Firebase."
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen(true),
            className: "mt-6 bg-[#3F8E00] hover:bg-[#52a61a] text-white hover:text-black px-8 py-3 rounded-md font-semibold transition-colors duration-200",
            children: "Book a Call →"
          }
        ),
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
          src: "/profile.jpeg",
          alt: "Ali Yar Khan profile",
          className: "w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 w-full max-w-6xl", children: /* @__PURE__ */ jsx("div", { className: "h-64 rounded-md flex items-center justify-center relative overflow-hidden", children: /* @__PURE__ */ jsx(
      InfiniteMovingCards,
      {
        items: [
          { image: "/angular.png" },
          { image: "/django.png" },
          { image: "/flutter.png" },
          { image: "/nestjs.png" },
          { image: "/node.png" },
          { image: "/react.png" }
        ]
      }
    ) }) })
  ] });
}
function CaseStudies() {
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
      img: "/artziii.jpg"
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
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "case-studies", className: "bg-white px-8 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: `${poppins.className} text-[34px] font-extrabold text-center text-black`,
        children: "Case Studies"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-center max-w-xl mx-auto text-gray-500 mt-2", children: "Every project tells a story. Dive into my case studies to see how I’ve helped startups and businesses turn ideas into scalable web and mobile solutions, from planning and design to development, deployment, and real-world results." }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 space-y-16", children: cases.map((item, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-[72px] bg-[#FFF6E9] justify-center items-center text-center rounded-2xl", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-[#FFA217] font-bold", children: item.tag }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-[#080808] text-2xl font-extrabold mt-2", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-2", children: item.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.img,
              alt: "case",
              className: "rounded-lg shadow-lg w-full object-cover"
            }
          ) })
        ]
      },
      i
    )) })
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
function RecentWork() {
  const works = [
    {
      title: "React Code Syntax Highlighter",
      img_1: "/nodejs.png",
      img_2: "/php.png",
      url: "https://github.com/AliYar-Khan/react-code-syntax-highlighter",
      description: `A lightweight, zero-dependency syntax highlighter component for PHP and Node.js code — with language toggle, copy-to-clipboard, and dark mode support.`
    }
    // {
    //   title: "Work name here",
    //   img: "/work2.jpg",
    //   url: 'https://github.com/AliYar-Khan/react-code-syntax-highlighter',
    //   description: ''
    // },
  ];
  return /* @__PURE__ */ jsx("section", { id: "recent-work", className: "px-8 py-16 bg-white min-h-[804px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-[#080808]", children: "Open Source Work or Contributions" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 mt-10", children: works.map((w, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ jsx("img", { src: w.img_1, alt: w.title, className: "w-full h-60 object-cover" }),
        /* @__PURE__ */ jsx("img", { src: w.img_2, alt: w.title, className: "w-full h-60 object-cover" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mt-4 text-[#080808]", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 my-8", children: w.description }),
        /* @__PURE__ */ jsx("a", { href: w.url, target: "_blank", className: "mt-8 bg-[#15191F] hover:bg-gray-700 text-white px-4 py-4 rounded-md", children: "Know more →" })
      ] })
    ] }, i)) })
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
    /* @__PURE__ */ jsx("p", { className: `mt-4 text-gray-400 text-[14px] ${poppins.className} font-normal max-w-md` }),
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
    /* @__PURE__ */ jsx(CaseStudies, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(RecentWork, {}),
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
