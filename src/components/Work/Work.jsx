import React, { useState } from "react";
import { projects } from "../../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[7vw] lg:px-[20vw] relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-20 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>
        <p className="text-gray-400 mt-6 text-lg font-light max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group glass rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 overflow-hidden">
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Hover icon */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow bg-[#0f0f15]/50 backdrop-blur-sm relative z-20">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags at bottom */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-medium tracking-wide rounded-full px-3 py-1 border border-[#8b5cf6]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sleek Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#030014]/80 backdrop-blur-lg animate-fade-in" onClick={handleCloseModal}></div>
          
          {/* Modal Content */}
          <div className="glass rounded-3xl w-full max-w-5xl overflow-hidden relative z-10 flex flex-col lg:flex-row shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-float">
            {/* Close btn */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#8b5cf6] hover:rotate-90 transition-all duration-300 border border-white/20"
            >
              ✕
            </button>

            {/* Left side: Image */}
            <div className="lg:w-1/2 relative bg-[#0a0a0f] flex items-center justify-center min-h-[30vh]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-transparent pointer-events-none"></div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover lg:object-contain relative z-10"
              />
            </div>

            {/* Right side: Info */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#06b6d4]/10 text-[#06b6d4] text-xs font-semibold uppercase tracking-wider rounded-md px-3 py-1.5 border border-[#06b6d4]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-10 font-light">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden glass hover:bg-white/10 text-white px-6 py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white px-6 py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Live Demo
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

