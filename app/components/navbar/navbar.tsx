'use client';

import Link from 'next/link';
import { useState } from 'react';
import poppins from '@/app/utils/font';
import { Menu, X } from 'lucide-react'; // icon library (npm install lucide-react)

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '#case-studies', label: 'Case Studies' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#recent-work', label: 'Recent Work' },
        { href: '#contact', label: 'Get In Touch' },
    ];

    const socials = [
        { href: 'https://www.linkedin.com/in/aliyark145', label: 'in' },
        { href: 'https://www.facebook.com/profile.php?id=100093610579694', label: 'fb' },
        { href: 'https://x.com/Mr_Programmer14', label: 'X' },
    ];

    return (
        <nav className="bg-black text-white">
            {/* Desktop navbar */}
            <div className="hidden md:flex min-w-[1110px] h-20 bg-[#1B1B1B] justify-between rounded-b-lg items-center space-x-12 py-4 px-8 mx-auto">
                <div className="flex space-x-6">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            className={`${poppins.className} font-normal text-[14px] text-[#9C9C9C]`}
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile bar with hamburger */}
            <div className="md:hidden flex justify-between items-center h-16 px-4">
                <button onClick={() => setOpen(true)} aria-label="Open Menu">
                    <Menu className="w-6 h-6 text-white" />
                </button>
                <div className="flex space-x-4">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className={`${poppins.className} font-normal text-[16px] text-[#9C9C9C] hover:text-white`}
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Side panel / drawer */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-[#1B1B1B] transform ${open ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <span className={`${poppins.className} text-white text-lg font-semibold`}>
                        Navigation
                    </span>
                    <button onClick={() => setOpen(false)} aria-label="Close Menu">
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="flex flex-col space-y-4 p-6">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className={`${poppins.className} font-normal text-[16px] text-[#9C9C9C] hover:text-white`}
                        >
                            {l.label}
                        </Link>
                    ))}


                </div>
            </div>

            {/* Backdrop when drawer is open */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
}
