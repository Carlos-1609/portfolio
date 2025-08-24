import React, { useEffect, useRef, useState } from "react";
import carlos from "../assets/carlos_crop.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    const element = aboutRef.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 py-4">
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-space">
            {/*Left Image */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                    <img
                      src={carlos}
                      alt=""
                      className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* floating decoration */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20"></div>
                  </div>
                </div>
              </div>
            </div>
            {/*Right Image */}
            <div>
              <div
                className={`space-y-8 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="space-y-4">
                  <p className="text-green-400 font-semibold text-lg">
                    About Me
                  </p>
                  <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">
                    Why hire me for your <br />
                    <span className="">next project?</span>
                  </h2>
                  <p className="text-green-400 font-semibold delay-200 ">
                    Software Developer
                  </p>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p
                    className={`text-lg transition-all duration-100 delay-500 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    Software developer with experience in web and mobile
                    applications using React.js, React Native, and Flutter.
                    Skilled in authentication and data management with AWS
                    Amplify, Firebase, and Google Auth. Familiar with deployment
                    on Netlify and knowledgeable in machine learning concepts
                    and implementation.
                  </p>
                  <p
                    className={`transition-all duration-1000 delay-700 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    {" "}
                    Proficient in Python with hands-on experience building
                    machine learning models, including deep learning with CNNs
                    for image classification. Conducted academic research on the
                    early detection of Alzheimer’s disease using MRI data and
                    machine learning techniques. Passionate about creating
                    efficient, user- friendly, and impactful solutions.
                  </p>
                </div>
                <div
                  className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <div className="group">
                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                      Name
                    </p>
                    <p className="text-gray-300">Carlos Ordoñez</p>
                  </div>
                  <div className="group">
                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                      Location
                    </p>
                    <p className="text-gray-300"> Toronto </p>
                  </div>
                  <div className="group">
                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                      Birthday:
                    </p>
                    <p className="text-gray-300"> 16 September, 2000 </p>
                  </div>
                  <div className="group">
                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                      Email:
                    </p>
                    <p className="text-gray-300"> carlosord1609@gmail.com </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 transition-all duration-1000 delay1100">
                  <a
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    href="/Carlos_Ordonez_Resume_ENG.pdf?v=2025-08-20"
                    download="Carlos_Ordonez_Resume_ENG.pdf"
                  >
                    DOWNLOAD
                  </a>
                  <a
                    href="#projects"
                    className="border-2 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
