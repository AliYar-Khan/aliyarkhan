"use client"

import poppins from "@/app/utils/font";
import { useState } from "react";


export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    attachment: null as File | null,
  });

  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simple validation rules
  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email format';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);
      fd.append('mobile', form.mobile);
      fd.append('message', form.message);
      if (form.attachment) fd.append('attachment', form.attachment);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) throw new Error('Failed to send');
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setSubmitting(false); // allow retry if failed
    }
  };

  if (success) {
    return (
      <section id="contact" className="bg-black text-white px-8 py-16 min-h-[604px]">
        <p className="text-green-600 text-center mt-8">
          ✅ Thanks! Your message was sent.
        </p>
      </section>
    );
  }


  return (
    <section id="contact" className="bg-black text-white px-8 py-16 min-h-[604px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <p className={`mt-4 text-gray-400 text-[14px] ${poppins.className} font-normal max-w-md`}>

        </p>
        <form onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data" className="max-w-lg mx-auto mt-8 space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Please enter your name"
              className="w-full p-3 rounded-md text-black bg-white"
              onChange={handleChange}
              value={form.name}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              className="w-full p-3 rounded-md text-black bg-white"
              onChange={handleChange}
              value={form.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <input
            type="text"
            name="mobile"
            placeholder="Enter mobile"
            className="w-full p-3 rounded-md text-black bg-white"
            onChange={handleChange}
            value={form.mobile}
          />
          <div>
            <textarea
              name="message"
              placeholder="Tell us about your goals, timeline, or any specific requirements."
              rows={10}
              className="w-full p-3 rounded-md text-black bg-white"
              onChange={handleChange}
              value={form.message}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <input
            type="file"
            name="attachment"
            accept="image/*,application/pdf"
            className="w-full p-3 rounded-md text-black bg-white"
            onChange={handleChange}
          />
          <button type="submit" className={`w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold ${submitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700'
            }`}>
            {submitting ? 'Submitting…' : 'Submit →'}
          </button>
        </form>
      </div>
    </section>
  );
}
