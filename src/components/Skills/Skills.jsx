import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-center gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#0f0f15]/70 backdrop-blur-lg border border-[#2a2a3b] shadow-[0_0_20px_rgba(130,69,236,0.25)]
                     rounded-2xl px-8 py-8 w-full sm:w-[46%] lg:w-[42%] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 text-center mb-6 border-b border-gray-700 pb-2">
            {category.title}
          </h3>

          {/* Skill Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-[#1a1a23]/60 border border-gray-800 
                           rounded-xl p-3 transition-all duration-300 hover:border-[#8245ec] hover:bg-[#1a1a23]/80"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 sm:w-9 sm:h-9 mb-2 opacity-90 hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-gray-300 font-medium tracking-wide text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-0 left-0 w-full h-40 bg-section-gradient blur-3xl opacity-80"></div>

  </section>
);

export default Skills;
