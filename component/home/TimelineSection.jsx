import React from 'react';
import { Briefcase, GraduationCap, Code, Rocket, Award } from 'lucide-react';

const timeline = [
  {
    year: "2024 - Present",
    title: "Frontend Developer",
    company: "Btopia, Softvence Alpha (Mohakhali)",
    description:
      "Architecting responsive web applications with React.js and Next.js. Leading the integration of secure JWT authentication and complex state management using Redux and Context API within MERN stack environments.",
    skills: ["React.js", "Next.js", "JWT", "Redux", "MERN Stack"],
    status: "Current"
  },
  {
    year: "2023 - 2024",
    title: "MERN Stack Specialist (Training)",
    company: "Creative IT Institute",
    description:
      "Completed a comprehensive one-year professional training program. Mastered full-stack architecture, focusing on building scalable MongoDB schemas and robust Node/Express backends.",
    skills: ["MongoDB", "Express.js", "Node.js", "Rest API"],
  },
  {
    year: "2022 - 2024",
    title: "Guest Teacher (Science)",
    company: "Government Polytechnic Institute (Faridpur)",
    description:
      "Taught Chemistry and Physics to diploma-level students. Improved academic outcomes by translating complex theoretical concepts into practical, real-world engineering applications.",
    skills: ["Physics", "Chemistry", "Analytical Thinking", "Mentorship"],
  },
  {
    year: "2023",
    title: "M.Sc. in Chemistry",
    company: "National University Govt. Rajendra College",
    description:
      "Graduated with a Master of Science, developing strong analytical research skills and a methodical approach to problem-solving that now informs my software debugging and architecture.",
    skills: ["Analytical Chemistry", "Research", "Scientific Method"],
    icon: <GraduationCap size={24} />
  },
];

const TimelineSection = () => {
  return (
    <section id="experience" className="relative w-full min-h-screen bg-[#030712] section-padding-y px-4 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400"></span>
              The Roadmap
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experience
              </span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg md:max-w-xs leading-relaxed border-l border-slate-800 pl-6">
            From Government educator to Frontend Specialist — a journey of logic, science, and scalable code.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Main Vertical Axis */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-slate-800 to-transparent"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-20 group">
                {/* Timeline Node */}
                <div className="absolute left-[11px] md:left-[27px] top-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-[#030712] shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 group-hover:scale-150 transition-transform duration-300"></div>
                </div>

                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12 items-start">
                  {/* Date/Status Info */}
                  <div className="flex flex-col pt-1">
                    <span className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                      {item.year}
                    </span>
                    {item.status && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                        {item.status}
                      </span>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 group-hover:-translate-y-1 shadow-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <span className="text-cyan-400/80 font-medium flex items-center gap-2">
                          <Briefcase size={14} /> {item.company}
                        </span>
                      </div>
                      <div className="text-slate-700 group-hover:text-cyan-500/50 transition-colors">
                         {item.icon || <Code size={24} />}
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-8 max-w-3xl">
                      {item.description}
                    </p>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-3">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;