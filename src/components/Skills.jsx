import React, { useRef, useState } from "react";
import { useEffect } from "react";

export default function Skills() {
  const skillsRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkill, setAnimatedSkill] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkill((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );
    const element = skillsRef.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  // --- Skills (0–100) ---
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "React Native", level: 55 },
    { name: "Flutter", level: 60 },
    { name: "Node.js (Express)", level: 50 },
    { name: "Python", level: 60 },
    { name: "SQL", level: 60 },
    { name: "Firebase", level: 50 },
    { name: "MongoDB", level: 50 },
    { name: "Machine Learning", level: 60 },
    { name: "Spanish (Native)", level: 100 },
    { name: "English (Fluent)", level: 95 },
  ];

  // --- Education ---
  const education = [
    {
      year: "2024–2025",
      title: "MSc Computer Science (Artificial Intelligence)",
      institution: "Lakehead University • Thunder Bay, ON",
      description:
        "Focus on AI/ML. Master’s research on early detection of Alzheimer’s from MRI; compared CNNs, transformers, and ensemble models with cross-dataset validation.",
    },
    {
      year: "2018–2022",
      title: "BSc Computer Science",
      institution: "Universidad Católica de Honduras • Tegucigalpa, HN",
      description:
        "Foundations in software engineering, databases, and algorithms; built full-stack apps using modern web/mobile stacks.",
    },
  ];

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/*Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/*Left Education*/}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualifications
              </p>
              <p className="text-green-400 text-4xl font-bold mb-8">
                Education
              </p>
            </div>
            <div className="space-y-8 ">
              {education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000  ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                    <div className="text-green-400 text-sm font-semibold mb-2 group-hover:text-green-300 transition-all duration-300">
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-all duration-300">
                      {edu.title}
                      <p className="text-gray-400 mb-2 group-hover:gray-300 transition-all duration-300">
                        {edu.institution}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                        {edu.description}
                      </p>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          {/*Right Progress*/}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Expert
              </p>
              <p className=" text-4xl font-black text-white mb-8">MySkills</p>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={`space-y-2 transition-all duration-1000`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1500 ease-out relative"
                        style={{ width: `${animatedSkill[skill.name] || 0}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
