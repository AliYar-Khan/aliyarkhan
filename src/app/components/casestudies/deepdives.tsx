import poppins from "@/app/utils/font";
import { Target, Lightbulb, TrendingUp, Cpu, Zap, Code2 } from "lucide-react";

export default function DeepDives() {
    return (
        <section id="case-studies" className="w-full bg-black bg-grid-white/[0.05] relative text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${poppins.className} text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6`}>
                        Case Studies: Deep Dive
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
                        A detailed look into the architectural decisions and technical challenges behind some of my most impactful projects.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Case Study 1 */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#3F8E00]/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl hover:border-[#3F8E00]/30 transition-all duration-300">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                <h3 className={`${poppins.className} text-2xl sm:text-3xl font-bold text-white`}>Anhar Marketplace</h3>
                                <span className="px-3 py-1 rounded-full bg-[#3F8E00]/10 border border-[#3F8E00]/20 text-[#3F8E00] text-xs font-mono font-bold tracking-widest uppercase">
                                    Multi-Tenant SaaS
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[#3F8E00]">
                                        <Target size={18} />
                                        <h4 className="font-bold uppercase tracking-wider text-xs">The Problem</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Existing marketplace solutions were either too generic or lacked specific multi-vendor capabilities needed for this niche. The client needed a scalable, SEO-friendly platform where individual sellers could manage their own customized shops.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[#3F8E00]">
                                        <Lightbulb size={18} />
                                        <h4 className="font-bold uppercase tracking-wider text-xs">The Solution</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Architected a multi-tenant capability using Supabase Row Level Security (RLS) to isolate seller data. Built the frontend with TanStack Router/Start for SSR to ensure high search engine visibility and fast initial loads.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[#3F8E00]">
                                        <TrendingUp size={18} />
                                        <h4 className="font-bold uppercase tracking-wider text-xs">Results</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                                        Reduced page load time by 40% using SSR. Successfully handled 500+ product listings during beta testing with zero database bottlenecks.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-neutral-800/50">
                                <div className="flex items-center gap-2 text-neutral-300 mb-6">
                                    <Cpu size={18} />
                                    <h4 className="font-bold text-lg">Architecture & Trade-offs</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/50">
                                        <p className="text-xs text-[#3F8E00] font-mono font-bold mb-1 uppercase tracking-tighter">Decision</p>
                                        <p className="text-sm text-neutral-300 mb-2 font-semibold italic">Used Supabase for BAAS</p>
                                        <p className="text-xs text-neutral-500 leading-relaxed italic">
                                            Sacrificed custom backend flexibility for development speed. Mitigated by using Edge Functions for complex logic.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/50">
                                        <p className="text-xs text-[#3F8E00] font-mono font-bold mb-1 uppercase tracking-tighter">Decision</p>
                                        <p className="text-sm text-neutral-300 mb-2 font-semibold italic">TanStack Query state sync</p>
                                        <p className="text-xs text-neutral-500 leading-relaxed italic">
                                            Drastically simplified server-state synchronization and caching, reducing boilerplate code significantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#3F8E00]/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl hover:border-[#3F8E00]/30 transition-all duration-300">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                <h3 className={`${poppins.className} text-2xl sm:text-3xl font-bold text-white`}>Artziii AI Design Tool</h3>
                                <span className="px-3 py-1 rounded-full bg-[#3F8E00]/10 border border-[#3F8E00]/20 text-[#3F8E00] text-xs font-mono font-bold tracking-widest uppercase">
                                    AI & Generative Art
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[#3F8E00]">
                                        <Target size={18} />
                                        <h4 className="font-bold uppercase tracking-wider text-xs">The Problem</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Users wanted to generate specific styles of artwork (e.g., anime, oil painting) but found general prompts in ChatGPT too inconsistent.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[#3F8E00]">
                                        <Zap size={18} />
                                        <h4 className="font-bold uppercase tracking-wider text-xs">The Solution</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Built a "Models Lab" abstraction layer that pre-processes user intents into optimized prompts and selects the best fine-tuned model for the job.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[#3F8E00]">
                                        <TrendingUp size={18} />
                                        <h4 className="font-bold uppercase tracking-wider text-xs">Results</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                                        Increased user retention by 25% due to higher quality, consistent outputs. Reduced API costs by caching common generation requests.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-neutral-800/50">
                                <div className="flex items-center gap-3 text-neutral-300 mb-6">
                                    <Code2 size={18} />
                                    <h4 className="font-bold text-lg">Technical Highlights</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/50">
                                        <p className="text-xs text-[#3F8E00] font-mono font-bold mb-1 uppercase tracking-tighter">Stack</p>
                                        <p className="text-sm text-neutral-300 mb-2 font-semibold italic">MERN Stack Implementation</p>
                                        <p className="text-xs text-neutral-500 leading-relaxed italic">
                                            Managing infra allowed for persistent WebSockets for real-time updates during generation, though requiring more setup.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/50">
                                        <p className="text-xs text-[#3F8E00] font-mono font-bold mb-1 uppercase tracking-tighter">Optimization</p>
                                        <p className="text-sm text-neutral-300 mb-2 font-semibold italic">Canvas State Management</p>
                                        <p className="text-xs text-neutral-500 leading-relaxed italic">
                                            Managed heavy canvas-like state in React, optimizing re-renders to ensure a smooth 60fps experience during manipulation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

