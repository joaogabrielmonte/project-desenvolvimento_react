import React from "react";

const CompaniesCarouselInfinite = ({ companies }) => {
  return (
    <div className="overflow-hidden relative py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="inline-block bg-white rounded-2xl p-6 shadow-xl flex-shrink-0 border-t-4 mx-4 min-w-[250px]"
            style={{ borderTopColor: company.color }}
          >
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {company.name}
            </h3>
            <p className="text-gray-600 text-sm">{company.sector}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 16px;
          animation: marquee 15s linear infinite; /* mais rápido */
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CompaniesCarouselInfinite;
