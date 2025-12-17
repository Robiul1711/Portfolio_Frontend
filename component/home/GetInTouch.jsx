"use client";
import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
             In Touch
            </span>{" "}
          
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="transform transition-all duration-300 hover:translate-x-2">
              <div className="flex items-start space-x-4 p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-slate-400">your.email@example.com</p>
                </div>
              </div>
            </div>

            <div className="transform transition-all duration-300 hover:translate-x-2">
              <div className="flex items-start space-x-4 p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-slate-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="transform transition-all duration-300 hover:translate-x-2">
              <div className="flex items-start space-x-4 p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-slate-400">+880 123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative mt-8 p-8 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg border border-cyan-500/20">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-500"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-cyan-500"></div>
              <p className="text-slate-300 italic">
                "Let's collaborate and create something amazing together!"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                <span>Send Message</span>
                <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
            </form>
          </div>
        </div>


      </div>


    </section>
  );
}