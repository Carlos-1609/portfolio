import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";

export default function Contact() {
  const refContact = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const contacInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "carlosord1609@gmail.com",
    },
    { icon: Phone, title: "Phone", info: "+1 (807) 357-3549" },
    { icon: MapPin, title: "Location", info: "Toronto, ON" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    const element = refContact.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={refContact}
      className="py-24 bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or job offer? I'd love to hear about it.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects.
              Feel free to send me a message and I'll try my best to get back to
              you!{" "}
            </p>
            <div className="space-y-4">
              {contacInfo.map((contact, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:sclae-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 200 + 300}ms` }}
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">
                        {contact.title}
                      </p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`pt-8 transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {[Github, Linkedin].map((Icon, index) => {
                  return (
                    <a
                      key={index}
                      href={`${
                        index === 0
                          ? "https://github.com/Carlos-1609"
                          : "https://www.linkedin.com/in/carlos-ordo%C3%B1ez-0a9b25242/"
                      }
                      `}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group border border-slate-700 hover:border-green-500 hover:scale-110 hover:rotate-6 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/*Contact Form */}
          {/* <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>
              <form>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50 "
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50 "
                    />
                  </div>
                </div>
                <div className="group mt-5">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject Matter"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50 "
                  />
                </div>
                <div className="group mt-5">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message ..."
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50 resize-none "
                  />
                </div>
                <button className="mt-5 w-full bg-green-600 text-white py-4 rounded-lg hover:green-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group">
                  Send Message{" "}
                  <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1 " />
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
