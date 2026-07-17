import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PlatformCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  isReversed?: boolean;
  image?: string;
  logoSymbol?: React.ReactNode;
  bgGradient?: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  isReversed = false,
  image,
  logoSymbol,
  bgGradient,
}) => {
  return (
    <div className={`flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Text Section - Left/Right Side */}
      <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-medium text-[#0D1D2C] mt-4 mb-4 font-['Fraunces']">
          {title}
        </h3>
        
        <p className="text-[#64748B] text-base md:text-lg mb-6 leading-relaxed max-w-md pr-4">
          {description}
        </p>

        <div>
          <a
            href={linkUrl}
            className="inline-flex items-center gap-2 bg-[#FF4103] hover:bg-[#c34415] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors mb-4"
          >
            {linkText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Image / Logo Section - Right Side */}
      <div className={`w-full md:w-1/2 min-h-75 md:min-h-full flex items-center justify-center bg-gradient-to-br ${bgGradient || 'from-gray-100 to-gray-200'}`}>
        {image ? (
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-white shadow-lg p-6 flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <img
                src={image}
                alt={title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center py-12">
            {logoSymbol}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformCard;
