import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="mb-8 text-gray-600">Get in touch with us for any queries or collaborations.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-4 bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all">Send Message</button>
          </form>

          <div className="text-left space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Address:</h4>
              <p>New York Still Road, 756 GT Global Place, CD-Road, M 07 435</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone:</h4>
              <p>+1 234 567 9871</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email:</h4>
              <p><a href="mailto:mail@example.com" className="text-blue-500 hover:underline">mail@example.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-80 shadow-md">
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48823.46166263757!2d-111.65905442395612!3d40.10960948006863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874db9d7dc27d89d%3A0x8b6bd315d9f959d0!2sSpanish+Fork%2C+UT%2C+USA!5e0!3m2!1sen!2sin!4v1430817838072" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Contact;