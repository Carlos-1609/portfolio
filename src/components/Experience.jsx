import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

export default function Experience() {
  const refExperience = useRef();
  const [visibleItems, setVisibleItems] = useState([]);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("timeline-item")) {
              setTimelineVisible(true);
            } else {
              const index = parseInt(entry.target.dataset.index, 10);
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElement = document.querySelector(".timeline-item");
    const experienceItems = document.querySelectorAll(".experience-item");

    if (timelineElement) observer.observe(timelineElement);
    experienceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Go Consultores",
      position: "Junior Software Developer Intern",
      period: "Jan 2022 – May 2022",
      location: "Tegucigalpa, Honduras",
      description:
        "Built mobile features and backend services for the Go Lens app, focusing on onboarding, authentication, and appointments.",
      achievements: [
        "Developed onboarding, login, and registration screens in Flutter",
        "Implemented user auth and session management with AWS Cognito",
        "Created appointment creation flow and reusable UI components",
        "Built and deployed a RESTful API with Node.js and Express.js for registration/login",
        "Used AWS Amplify to streamline auth flows for reuse across projects",
      ],
      skills: [
        "Flutter",
        "AWS Cognito",
        "AWS Amplify",
        "Express.js",
        "Typescript",
        "REST API",
        "UI Design",
        "SQL",
      ],
    },
    {
      company: 'Hospital Clinic "Blanca Rosa"',
      position: "Software Developer",
      period: "Jul 2022 – Aug 2023",
      location: "Tegucigalpa, Honduras",
      description:
        "Designed and delivered a full clinic software system from scratch, from UX mockups to deployment.",
      achievements: [
        "Produced interactive UI/UX mockups in Figma to guide development",
        "Ran 1-on-1 client meetings to gather requirements and demo progress",
        "Implemented the frontend in React.js with Tailwind CSS",
        "Used Firebase for auth, data storage, and real-time features",
        "Deployed to Netlify and set up a simple CI/CD workflow",
      ],
      skills: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "Figma",
        "UX/UI",
        "Netlify",
        "Client Communication",
        "Project Delivery",
      ],
    },
    {
      company: "Lakehead University",
      position: "Master Research Project – Predicting Alzheimer’s Disease",
      period: "Sep 2024 – May 2025",
      location: "Thunder Bay, ON",
      description:
        "Research project on early detection of Alzheimer’s using machine learning on MRI images (TechRxiv: techrxiv.org/1284327).",
      achievements: [
        "Used datasets ADNI, OASIS, and a Kaggle Alzheimer’s MRI dataset",
        "Built and compared CNNs, Vision Transformers, and ensemble models Classifiers",
        "Achieved up to 97% accuracy with 10-fold cross-validation",
        "Performed feature selection, scaling, and imputation of missing values",
        "Applied augmentation and resampling to address class imbalance",
        "Evaluated cross-dataset generalization and reported accuracy/F1",
      ],
      skills: [
        "Machine Learning",
        "Deep Learning",
        "CNNs",
        "Vision Transformers",
        "Classifiers",
        "Data Preprocessing",
        "Data Augmentation",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={refExperience}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold text-lg mb-4">
            All Companies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto delay-300">
            My professional journey and the experience that shaped my expertise
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Animated Timeline */}
            <div className="timeline-item absolute left-8 md:left-1/2 -translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
              <div className="w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-2000 ease-out">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
              </div>
            </div>
            {experiences.map((exp, index) => {
              return (
                <div
                  key={index}
                  className={`experience-item relative flex items-center mb-20 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-1000 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  data-index={index}
                  style={{
                    transitionDelay: `${index * 300 + 800}ms`,
                    transform: visibleItems.includes(index)
                      ? "translateY(0)"
                      : index % 2 === 0
                      ? "translateX(-50px) translateY(20px)"
                      : "translateX(50px) translateY(20px)",
                  }}
                >
                  {/* ANIMATED DOTS*/}
                  {/* Animated Dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 -translate-x-1/2
              w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900
              shadow-lg z-10 ${
                visibleItems.includes(index) ? "scale-110" : "scale-0"
              }
              transition-transform duration-500 ease-out`}
                    style={{ transitionDelay: `${index * 300 + 1200}ms` }}
                  >
                    <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20 group`}
                    >
                      <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6 ">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 text-green-400 text-sm">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      {/* Position */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                        {exp.description}
                      </div>
                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-green-400 transition-all duration-300">
                          <Award className="w-4 h-4 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2 ">
                          {exp.achievements.map((achievement, achindex) => {
                            return (
                              <li
                                key={achindex}
                                className={`text-gray-300 text-sm flex items-start gap-3 group-hover:text-white transition-all duration-300 `}
                                style={{
                                  animationDelay: `${
                                    index * 300 + achindex * 200 + 1500
                                  }ms`,
                                }}
                              >
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0 "></span>
                                {achievement}
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => {
                          return (
                            <span
                              key={skillIndex}
                              className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-green-400"
                              style={{
                                animationDelay: `${
                                  index * 300 + skillIndex * 100 + 18000
                                }ms`,
                              }}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
