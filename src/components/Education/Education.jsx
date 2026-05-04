import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[20vw] relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-20 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>
        <p className="text-gray-400 mt-6 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          My educational background reflects the core of my learning journey,
          developing both my academic and professional skills.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative pl-8 md:pl-16 group"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[11px] top-8 w-5 h-5 rounded-full bg-[#030014] border-4 border-[#8b5cf6] shadow-[0_0_10px_rgba(139,92,246,0.4)] group-hover:bg-[#8b5cf6] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 z-10"></div>
            
            {/* Content Card */}
            <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1 border border-white/5 hover:border-white/10">
              
              {/* Logo */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white/5 p-2 backdrop-blur-sm border border-white/10 shadow-inner group-hover:border-[#8b5cf6]/50 transition-colors">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white transition-all">
                    {edu.degree}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-semibold rounded-full border border-[#8b5cf6]/20 whitespace-nowrap w-fit mt-1 md:mt-0">
                    {edu.date}
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-300 font-medium mb-4">{edu.school}</h4>
                
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-semibold text-[#06b6d4]">Grade:</span> <span className="text-gray-300">{edu.grade}</span>
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
