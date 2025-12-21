import poppins from "@/app/utils/font";

export default function DeepDives() {
    return (
        <section id="case-studies" className="py-16 bg-[#F9FAFB] px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className={`${poppins.className} text-3xl font-bold text-[#080808] mb-12 text-center`}>
                    Case Studies: Deep Dive
                </h2>

                {/* Case Study 1 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-[#080808] mb-4">Anhar Marketplace</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-1 md:col-span-1">
                                <h4 className="font-bold text-lg mb-2">The Problem</h4>
                                <p className="text-gray-600 text-sm">
                                    Existing marketplace solutions were either too generic or lacked specific multi-vendor capabilities needed for this niche. The client needed a scalable, SEO-friendly platform where individual sellers could manage their own customized shops.
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1">
                                <h4 className="font-bold text-lg mb-2">The Solution</h4>
                                <p className="text-gray-600 text-sm">
                                    Architected a multi-tenant capability using Supabase Row Level Security (RLS) to isolate seller data. Built the frontend with TanStack Router/Start for SSR to ensure high search engine visibility and fast initial loads.
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1">
                                <h4 className="font-bold text-lg mb-2">Results</h4>
                                <p className="text-gray-600 text-sm">
                                    Reduced page load time by 40% using SSR. Successfully handled 500+ product listings during beta testing with zero database bottlenecks.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-lg mb-3">Architecture & Trade-offs</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                                <li><strong>Decision:</strong> Used Supabase for backend-as-a-service.</li>
                                <li><strong>Trade-off:</strong> sacrificed some custom backend flexibility for development speed and built-in auth/database features. Mitigated by using Edge Functions for complex logic.</li>
                                <li><strong>Decision:</strong> TanStack Query for state management.</li>
                                <li><strong>Benefit:</strong> drastically simplified server-state synchronization and caching, reducing boilerplate code.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div>
                    <h3 className="text-2xl font-bold text-[#080808] mb-4">Artziii AI Design Tool</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-1 md:col-span-1">
                                <h4 className="font-bold text-lg mb-2">The Problem</h4>
                                <p className="text-gray-600 text-sm">
                                    Users wanted to generate specific styles of artwork (e.g., anime, oil painting) but found general prompts in ChatGPT too inconsistent.
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1">
                                <h4 className="font-bold text-lg mb-2">The Solution</h4>
                                <p className="text-gray-600 text-sm">
                                    Built a "Models Lab" abstraction layer that pre-processes user intents into optimized prompts and selects the best fine-tuned model for the job.
                                </p>
                            </div>
                            <div className="col-span-1 md:col-span-1">
                                <h4 className="font-bold text-lg mb-2">Results</h4>
                                <p className="text-gray-600 text-sm">
                                    Increased user retention by 25% due to higher quality, consistent outputs. Reduced API costs by caching common generation requests.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-lg mb-3">Architecture & Trade-offs</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                                <li><strong>Decision:</strong> Serverless architecture for API handling.</li>
                                <li><strong>Trade-off:</strong> Cold starts were initially an issue. Solved by implementing keep-warm strategies during peak hours.</li>
                                <li><strong>Complex State:</strong> Managed heavy canvas-like state in React, optimizing re-renders to ensure a smooth 60fps experience while manipulating images.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
