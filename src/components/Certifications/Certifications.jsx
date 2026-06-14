import React, { useState, useEffect } from "react";
import { certifications } from "../../constants";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="certifications"
      className="py-24 px-[10vw] md:px-[8vw] lg:px-[16vw]"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          CERTIFICATIONS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-2xl mx-auto">
          Click on a certificate to view details
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            onClick={setSelectedCert}
          />
        ))}
      </div>

      {/* Sleek Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pt-20 lg:pt-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#030014]/80 backdrop-blur-lg animate-fade-in" onClick={() => setSelectedCert(null)}></div>

          <div className="relative w-full max-w-5xl xl:max-w-6xl z-10" onClick={(e) => e.stopPropagation()}>
            {/* Modal Content */}
            <div className="glass rounded-2xl sm:rounded-3xl w-full max-h-[85vh] overflow-y-auto overflow-x-hidden relative flex flex-col shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-float bg-[#0a0a0f]/90 backdrop-blur-md border border-white/10">
              {/* Close btn */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 lg:top-5 lg:right-5 z-50 w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#8245ec] hover:rotate-90 transition-all duration-300 border border-white/20 shadow-lg"
              >
                ✕
              </button>

              <div className="flex flex-col lg:flex-row min-h-[50vh] lg:min-h-[60vh]">
                {/* Left side: Image */}
                <div className="lg:w-1/2 xl:w-3/5 relative bg-[#050508] flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-auto shrink-0 p-6 lg:p-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8245ec]/10 to-transparent pointer-events-none"></div>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain relative z-10 rounded-lg shadow-2xl"
                  />
                </div>

                {/* Right side: Info */}
                <div className="lg:w-1/2 xl:w-2/5 p-6 sm:p-8 lg:p-12 lg:pt-20 flex flex-col justify-center bg-[#0f0f15]/80">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
                    {selectedCert.title}
                  </h3>
                  
                  <p className="text-[#8245ec] font-semibold text-xl mb-6">
                    {selectedCert.issuer}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-gray-300 text-sm mb-10 bg-white/5 rounded-full px-5 py-2.5 w-fit border border-white/10 shadow-inner">
                    <svg className="w-4 h-4 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {selectedCert.date}
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-[#8245ec] to-[#06b6d4] text-white px-8 py-5 rounded-xl font-semibold text-lg flex justify-center items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(130,69,236,0.5)] w-full"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Credential
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;