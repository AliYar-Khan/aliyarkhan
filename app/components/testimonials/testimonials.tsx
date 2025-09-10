export default function Testimonials() {
  const testimonials = [
    { name: "Client Name", text: "Lorem ipsum dolor sit amet." },
    { name: "Client Name", text: "Consectetur adipiscing elit." },
    { name: "Client Name", text: "Sed do eiusmod tempor incididunt." },
    { name: "Client Name", text: "Ut labore et dolore magna aliqua." },
  ];

  return (
    <section id="testimonials" className="bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-center">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800"
          >
            <p className="text-gray-300">“{t.text}”</p>
            <p className="mt-4 font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
