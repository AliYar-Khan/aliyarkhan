export default function CaseStudies() {
  const cases = [
    { tag: "Fintech", title: "Work name here", img: "/case1.jpg" },
    { tag: "Edtech", title: "Work name here", img: "/case2.jpg" },
    { tag: "Pharma", title: "Work name here", img: "/case3.jpg" },
  ];

  return (
    <section id="case-studies" className="px-8 py-16">
      <h2 className="text-3xl font-bold text-center">Case Studies</h2>
      <p className="text-center text-gray-500 mt-2">
        Solving user & business problems since last 15+ years.
      </p>

      <div className="mt-10 space-y-10">
        {cases.map((item, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm text-orange-500 font-bold">
                {item.tag}
              </span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                View case study →
              </button>
            </div>
            <img
              src={item.img}
              alt="case"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
