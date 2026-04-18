import React from "react";

const CertificationCard = ({ cert, onClick }) => {
  return (
    <div
      onClick={() => onClick(cert)}
      className="cursor-pointer flex flex-col items-center text-center"
    >
      {/* Image Card */}
      <div
        className="w-full rounded-2xl overflow-hidden 
                   border border-[#2a2a3b] bg-[#14141b] 
                   hover:scale-[1.02] transition duration-300"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </div>

      {/* Title BELOW image */}
      <h3 className="mt-3 text-white text-sm sm:text-base font-semibold tracking-wide leading-snug hover:text-[#8245ec] transition">
        {cert.title}
      </h3>
    </div>
  );
};

export default CertificationCard;