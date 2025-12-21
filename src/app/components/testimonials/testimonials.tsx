

export default function Testimonials() {
  const testimonials = [
    {
      profilePic: '/krystle.webp',
      name: "Krystle Wright",
      text: `Hiring Ali was one of the best decisions of my life!! 
      He is incredible at coding and also front end design, making my vision come to life!! 
      He is a great man, a kind man and so generous :) 
      So polite and willing to do anything to make it all happen. Really smart!! 
      I highly recommend Ali for any and all App creation!! Thanks so much Ali!!! 
      I look forward to working with you for years and years :)`
    },
    {
      profilePic: '/placeholder.png',
      name: "Andrew",
      text: "he delivered exactly the app, as I wanted. Planing the next milestones with him right now."
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white px-8 py-16 min-h-[500px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800 space-y-2"
            >
              <div className="flex flex-row space-x-4">
                <img
                  width={50}
                  height={50}
                  src={t.profilePic}
                  alt="profile"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <p className="mt-4 font-semibold">{t.name}</p>
              </div>
              <p className="text-gray-300">{t.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
