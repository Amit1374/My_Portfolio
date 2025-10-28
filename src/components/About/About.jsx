import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../../assets/profile.png';


const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}

        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0"'>

          {/*greeting*/}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Amit Vishwakarma
          </h2>

          {/* Skills Heading with Typing Effect */}


          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={['Softare Learner', 'Full-Stack Developer', 'Problem Solver', 'Coder' ,'Tech Enthusiast',]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Computer Engineering student with a keen interest in software development, data structures, and algorithms. I am passionate about building efficient and scalable solutions, continuously learning new technologies, and applying my skills to real-world projects.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1C3dQoJzrx1bp_BqKDVEPi--KKgf2eFUn/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className=" w-64 h-64 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-800 rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt="Amit Vishwakarma"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </div>

      </div>

    </section>
  )
}

export default About;
