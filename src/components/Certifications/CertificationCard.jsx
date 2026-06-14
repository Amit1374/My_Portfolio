import React from "react";

const CertificationCard = ({ cert, onClick }) => {
  return (
    <div
      onClick={() => onClick(cert)}
      className="group glass rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(130,69,236,0.2)] flex flex-col h-full border border-white/5"
    >
      {/* Image Container */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-50 z-10"></div>
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-110 relative z-10"
          loading="lazy"
        />
        {/* Hover icon */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow bg-[#0f0f15]/80 backdrop-blur-sm relative z-20 border-t border-white/5 items-center justify-center text-center">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#06b6d4] transition-colors">
          {cert.title}
        </h3>
        <p className="text-[#8245ec] text-sm mt-2 font-medium">
          {cert.issuer}
        </p>
      </div>
    </div>
  );
};

export default CertificationCard;