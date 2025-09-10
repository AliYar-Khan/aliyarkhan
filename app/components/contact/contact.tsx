export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
      <form className="max-w-lg mx-auto mt-8 space-y-4">
        <input
          type="email"
          placeholder="Please enter your email"
          className="w-full p-3 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="Enter mobile"
          className="w-full p-3 rounded-md text-black"
        />
        <textarea
          placeholder="Enter your message"
          rows={4}
          className="w-full p-3 rounded-md text-black"
        ></textarea>
        <button className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold">
          Submit →
        </button>
      </form>
    </section>
  );
}
