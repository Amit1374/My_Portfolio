import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[10vw] md:px-[8vw] lg:px-[16vw] font-sans]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          My educational background reflects the core of my learning journey,
          developing both my academic and professional skills.
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="group bg-[#14141b]/90 border border-[#2a2a3b] rounded-2xl 
                       p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-8 
                       shadow-[0_0_15px_rgba(0,0,0,0.4)] 
                       transition-all duration-300 hover:shadow-[0_0_25px_rgba(130,69,236,0.45)] hover:border-[#8245ec]"
          >
            {/* Left: Logo */}
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#1a1a23] border border-gray-700 shadow-inner">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col text-center sm:text-left gap-2">
              <h3 className="text-2xl font-semibold text-white group-hover:text-[#a97cff] transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-lg text-gray-300 font-medium">{edu.school}</p>
              <p className="text-sm text-gray-500 italic">{edu.date}</p>

              <div className="mt-3">
                <p className="text-gray-400 font-semibold">
                  Grade: <span className="font-normal text-gray-300">{edu.grade}</span>
                </p>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
