import Link from "next/link";
import poppins from "@/app/utils/font";

export default function Navbar() {
    return (
        <nav className="bg-black text-white flex justify-between items-center">
            <div className="flex min-w-[1110px] h-20 bg-[#1B1B1B] justify-between rounded-b-lg items-center self-center space-x-12 py-4 px-8 mx-auto">
                <div className="flex space-x-6">
                    <Link href="/" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>Home</Link>
                    <Link href="#case-studies" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>Case Studies</Link>
                    <Link href="#testimonials" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>Testimonials</Link>
                    <Link href="#recent-work" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>Recent Work</Link>
                    <Link href="#contact" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>Get In Touch</Link>
                </div>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/aliyark145" target="_blank" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>in</a>
                    <a href="https://www.facebook.com/profile.php?id=100093610579694" target="_blank" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>fb</a>
                    <a href="https://x.com/Mr_Programmer14" target="_blank" className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}>X</a>
                </div>
            </div>
        </nav>
    );
}
