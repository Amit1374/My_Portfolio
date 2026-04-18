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

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm 
                     flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedCert(null)} // close on background click
        >
          <div
            className="bg-[#14141b] rounded-2xl max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[60vh] object-contain rounded-lg"
            />

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white">
                {selectedCert.title}
              </h3>

              <p className="text-gray-400 mt-1">
                {selectedCert.issuer}
              </p>

              <p className="text-gray-500 text-sm">
                {selectedCert.date}
              </p>

              {/* Button */}
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 bg-[#8245ec] text-white rounded-lg hover:opacity-90 transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;