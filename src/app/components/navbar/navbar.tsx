

import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import poppins from '@/app/utils/font';
import { Menu, X, Linkedin, Facebook, Twitter, Github } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#services', label: 'Services' },
        { href: '#contact', label: 'Contact' },
    ];

    const socials = [
        { href: 'https://www.linkedin.com/in/aliyark145', icon: <Linkedin size={18} />, label: 'LinkedIn' },
        { href: 'https://x.com/Mr_Programmer14', icon: <Twitter size={18} />, label: 'X' },
        { href: 'https://www.facebook.com/profile.php?id=100093610579694', icon: <Facebook size={18} />, label: 'Facebook' },
    ];

    return (
        <>
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}>
                <div className={`flex items-center justify-between h-16 px-6 sm:px-10 rounded-2xl border transition-all duration-300 ${scrolled
                        ? 'bg-neutral-900/80 backdrop-blur-lg border-neutral-800 shadow-2xl'
                        : 'bg-neutral-900/40 backdrop-blur-md border-neutral-800/50'
                    }`}>

                    {/* Brand / Logo */}
                    <Link to="/" className={`${poppins.className} font-bold text-xl tracking-tight text-white group`}>
                        Ali<span className="text-[#3F8E00] group-hover:text-[#4ea800] transition-colors font-black">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map((l) => (
                            <Link
                                key={l.label}
                                to={l.href}
                                className={`${poppins.className} text-[13px] font-medium text-neutral-400 hover:text-white transition-all relative group py-1`}
                            >
                                {l.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3F8E00] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Socials */}
                    <div className="hidden lg:flex items-center gap-5 border-l border-neutral-800 pl-8 ml-2">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-[#3F8E00] transition-all transform hover:scale-110"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden p-2 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white"
                        aria-label="Open Menu"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar / Drawer */}
            <div
                className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-black/95 backdrop-blur-xl border-l border-neutral-800 transform ${open ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-500 ease-in-out z-[200]`}
            >
                <div className="flex justify-between items-center p-8 border-b border-neutral-900">
                    <span className={`${poppins.className} text-white text-xl font-bold tracking-tight`}>
                        Menu<span className="text-[#3F8E00]">.</span>
                    </span>
                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white"
                        aria-label="Close Menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col gap-6 p-8">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            to={l.href}
                            onClick={() => setOpen(false)}
                            className={`${poppins.className} text-2xl font-bold text-neutral-500 hover:text-white transition-all`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div className="absolute bottom-12 left-8 right-8">
                    <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold mb-4">Connect</p>
                    <div className="flex gap-6">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#3F8E00] hover:border-[#3F8E00]/50 transition-all"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}

