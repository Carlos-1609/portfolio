import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react"; // <-- rename
import movieApp from "../assets/movies_app.png";
import medicalApp from "../assets/medical_app.png";
import lendGo from "../assets/lend_go.png";
import nlpProject from "../assets/nlp_project.png";
import jobBoard from "../assets/jobboard.png";
import buttonMashers from "../assets/buttonMashers.png";

export default function Projects() {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = projectsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true); // <-- use isIntersecting
        });
      },
      {
        threshold: 0.05, // <-- lower threshold: mobile-friendly
        rootMargin: "0px 0px -10% 0px", // <-- triggers a touch earlier
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Movies App",
      description:
        "A modern movie discovery app built with React Native (Expo), TMDB, and Appwrite. Features include user authentication, keyword search, trending charts, detailed movie pages, and a cloud-synced favorites/watchlist.",
      image: movieApp,
      technologies: ["React Native", "Expo", "Appwrite", "TMDB API"],
      category: "Mobile App",
      featured: true,
      projectLink: "https://github.com/Carlos-1609/MovieApp",
    },
    {
      id: 2,
      title: "Clínica Blanca Rosa — Patient Records & Visit Tracker",
      description:
        "A modern patient records & visit-tracking app built with React, Tailwind, and Firebase (Auth, Firestore, Storage). Features include secure authentication, patient registry, visit notes with diagnoses/treatments and attachments, a chronological medical-record timeline, and fast search/filters.",
      image: medicalApp,
      technologies: ["React", "Firebase", "Tailwindcss"],
      category: "Web App",
      featured: true,
      projectLink: "https://github.com/Carlos-1609/clinica-blanca-rosa",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern loan management app built with Flutter, AWS Cognito, Express.js, and SQL—supports lender/merchant/borrower roles, handles loan applications, shows an active-loans dashboard with status (al día / en mora), and tracks repayments and schedules.",
      image: lendGo,
      technologies: ["Flutter", "Express JS", "AWS Cognito", "SQL"],
      category: "Mobile App",
      featured: false,
      projectLink: "https://github.com/Carlos-1609/flutter-prestamos",
    },
    {
      id: 4,
      title: "ML Video Search Dashboard",
      description:
        "ML Video Search Dashboard is an application that helps students quickly find and watch content from an introductory machine learning course with 40+ videos. All videos are stored in Amazon S3, and the dashboard lets learners search by topics and key phrases, then jump straight to the most relevant videos.",
      image: nlpProject,
      technologies: ["Python/Jupyter", "NLP", "AWS S3", "GCS", "MoviePy"],
      category: "Machine Learning (NLP)",
      featured: false,
      projectLink: "https://github.com/Carlos-1609/ML-Video-Search-Dashboard",
    },
    {
      id: 5,
      title: "JobBoard API",
      description:
        "Rest API for a Job Board application focused on user authentication. This MVP exposes secure endpoints for sign up and log in, returning a token that client apps can use for protected routes later (e.g., posting or applying to jobs).",
      image: jobBoard,
      technologies: ["Node.js", "Express", "JWT", "MongoDB"],
      category: "Backend",
      featured: false,
      projectLink: "https://github.com/Carlos-1609/Jobboard_API",
    },
    {
      id: 6,
      title: "Button-Masher App",
      description:
        "Native Android game store (Kotlin). Browse & buy games, edit profile, view library & orders, rate owned titles, plus a checkout reminder service.",
      image: buttonMashers,
      technologies: ["Kotlin", "Android Studio", "SQLlite"],
      category: "Mobile",
      featured: true,
      projectLink: "https://github.com/Carlos-1609/Button-Mashers",
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {" "}
        {/* <-- z-10 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-5">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {" "}
            {/* <-- grid-cols-1 */}
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 10}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-all duration-300" // <-- stable height
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {/* <a className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300" href="#">
                      <Github className="w-4 h-4 text-gray-700" />
                    </a> */}
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-green-600 text-white px-2 py-1 rounded-2xl text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center transition-all duration-1000 mt-14 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Carlos-1609"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
