export default function RecentWork() {
  const works = [
    { title: "React Code Syntax Highlighter", img: "/work1.jpg", description: '' },
    { title: "Work name here", img: "/work2.jpg", description: '' },
  ];

  return (
    <section id="recent-work" className="px-8 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#080808]">Open Source Work or Contributions</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {works.map((w, i) => (
            <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={w.img} alt={w.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold py-4 text-[#080808]">{w.title}</h3>
                <p className="text-gray-500 mt-2">
                  {w.description}
                </p>
                <a href="" target="_blank" className="mt-4 bg-[#15191F] hover:bg-gray-700 text-white px-4 py-4 rounded-md">
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
