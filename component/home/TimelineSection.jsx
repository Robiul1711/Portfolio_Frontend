import React from 'react';

const timeline = [
  {
    year: "2025",
    title: "Senior MERN Stack Developer",
    company: "Freelance / Remote",
    description:
      "Building full-stack applications with React, Next.js, Node.js, and MongoDB. Focused on modern UI, API architecture, and performance optimization.",
    skills: ["React", "Next.js", "Node.js", "MongoDB"]
  },
  {
    year: "2024",
    title: "Frontend Developer",
    company: "Self Projects & Collaborations",
    description:
      "Developed responsive UI, implemented animations, improved design systems, and worked on API integrations using React & Tailwind CSS.",
    skills: ["React", "Tailwind CSS", "API Integration"]
  },
  {
    year: "2023",
    title: "Learner & Junior Developer",
    company: "Personal Journey",
    description:
      "Started learning full-stack development, practiced building projects, mastered Git, JavaScript, and MERN fundamentals.",
    skills: ["JavaScript", "Git", "MERN Stack"]
  },
];

const TimelineSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase border border-cyan-400/30 px-4 py-2 rounded-full bg-cyan-400/5">
              Career Timeline
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Experience & Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A timeline of my growth, learning phases, and the professional path
            that shaped me as a MERN stack developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-200/50 via-cyan-2z00/30 to-transparent md:transform md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-cyan-400 rounded-full md:transform md:-translate-x-1/2 shadow-[0_0_30px_8px_rgba(34,211,238,0.4)] border-4 border-slate-950 z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-transparent transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Year Badge */}
                    <div className="inline-block mb-4">
                      <span className="text-cyan-400 font-bold text-xl bg-cyan-400/10 px-4 py-1.5 rounded-lg border border-cyan-400/30">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p className="text-gray-400 text-base mb-4 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-base">
                      {item.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item?.skills?.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1.5 rounded-full border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fade */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
            <span>Currently building the future</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;