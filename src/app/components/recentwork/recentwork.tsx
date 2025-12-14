export default function RecentWork() {
  const works = [
    {
      title: "React Code Syntax Highlighter",
      img_1: "/nodejs.png",
      img_2: "/php.png",
      url: 'https://github.com/AliYar-Khan/react-code-syntax-highlighter',
      description: `A lightweight, zero-dependency syntax highlighter component for PHP and Node.js code — with language toggle, copy-to-clipboard, and dark mode support.`,
    },
    // {
    //   title: "Work name here",
    //   img: "/work2.jpg",
    //   url: 'https://github.com/AliYar-Khan/react-code-syntax-highlighter',
    //   description: ''
    // },
  ];

  return (
    <section id="recent-work" className="px-8 py-16 bg-white min-h-[804px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#080808]">Open Source Work or Contributions</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {works.map((w, i) => (
            <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-row">
                <img src={w.img_1} alt={w.title} className="w-full h-60 object-cover" />
                <img src={w.img_2} alt={w.title} className="w-full h-60 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mt-4 text-[#080808]">{w.title}</h3>
                <p className="text-gray-500 my-8">
                  {w.description}
                </p>
                <a href={w.url} target="_blank" className="mt-8 bg-[#15191F] hover:bg-gray-700 text-white px-4 py-4 rounded-md">
                  Know more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
