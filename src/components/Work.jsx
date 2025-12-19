import React from 'react';
import { researchPapers } from "../data/data.js";
import { FaFilePdf, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import { SiArxiv } from 'react-icons/si';


const Work = () => {
  
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-gradient-to-b from-[#0a192f] to-[#0f1f3d] py-20'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='pb-12 text-center'>
          <p className='text-5xl font-bold text-gray-300 mb-4 border-b-4 border-pink-600 inline-block pb-2'>
            Research Publications
          </p>
          <p className='text-lg text-gray-400 mt-6 max-w-2xl mx-auto'>
            Exploring cutting-edge research in Large Language Models, Multi-Agent Systems, and AI Infrastructure
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="grid gap-8 md:gap-10">
          {researchPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="group bg-[#112240] rounded-2xl shadow-2xl hover:shadow-pink-600/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50 hover:border-pink-600/50 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors duration-300 leading-tight">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2 italic">
                      {paper.authors}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                      <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full font-medium">
                        {paper.venue}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {paper.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Abstract */}
                <p className="text-gray-300 leading-relaxed mb-6 text-base">
                  {paper.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1e3a5f] text-blue-300 px-3 py-1 rounded-lg text-sm font-medium border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={paper.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {(paper.venue === "Preprint" || paper.arxivUrl.includes("preprints.org")) ? (
                      <FaFileAlt size={20} />
                    ) : (
                      <SiArxiv size={20} />
                    )}
                    {paper.venue === "Preprint" || paper.arxivUrl.includes("preprints.org") ? "View on Preprints" : "View on arXiv"}
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2a4a7f] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-blue-500/50 shadow-lg"
                  >
                    <FaFilePdf size={20} />
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Decorative gradient bar at bottom */}
              <div className="h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-4">
            Interested in collaboration or have questions about my research?
          </p>
          <a
            href="mailto:agulati101@gmail.com"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
