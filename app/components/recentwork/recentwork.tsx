export default function RecentWork() {
  const works = [
    { title: "Work name here", img: "/work1.jpg" },
    { title: "Work name here", img: "/work2.jpg" },
  ];

  return (
    <section id="recent-work" className="px-8 py-16">
      <h2 className="text-3xl font-bold text-center">Recent Work</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {works.map((w, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={w.img} alt={w.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                Know more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
