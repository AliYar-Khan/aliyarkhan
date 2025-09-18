import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import CaseStudies from "./components/casestudies/casestudies";
import Testimonials from "./components/testimonials/testimonials";
import RecentWork from "./components/recentwork/recentwork";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Testimonials />
      <RecentWork />
      <Contact />
      <footer className="text-center py-6 text-sm bg-black text-white">
        Made with ❤️<br />
        © 2025 All rights reserved by Ali Yar Khan
      </footer>
    </div>
  );
}
