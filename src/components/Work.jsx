import React from 'react';
import { researchPapers } from "../data/data.js";
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import research paper images
import memtool from '../assets/research/memtool.png';
import agentAsAGraph from '../assets/research/agent-as-a-graph.png';
import scalemcp from '../assets/research/scalemcp.png';
import toolSurvey from '../assets/research/tool survey.png';
import toolToAgent from '../assets/research/tool-to-agent.png';
import jackal from '../assets/research/jackal.png';

// Map paper IDs to their images
const paperImages = {
  1: memtool,
  2: agentAsAGraph,
  3: scalemcp,
  4: toolSurvey,
  5: toolToAgent,
  6: jackal,
};

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-gradient-to-b from-[#0a192f] to-[#0f1f3d] py-20'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='pb-12 text-center'>
          <p className='text-5xl font-bold text-gray-300 mb-4 border-b-4 border-pink-600 inline-block pb-2'>
            Research Publications
          </p>
          <p className='text-lg text-gray-400 mt-6 max-w-2xl mx-auto'>
            Exploring cutting-edge research in Large Language Models, Multi-Agent Systems, and AI Infrastructure
          </p>
        </div>

        {/* Research Papers Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="group bg-[#0d1b2a] rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Header Area */}
              <div className="h-44 bg-[#0a1421] flex items-center justify-center border-b border-gray-700/30 overflow-hidden">
                <img
                  src={paperImages[paper.id]}
                  alt={paper.title}
                  className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-3 group-hover:text-pink-400 transition-colors duration-300">
                  {paper.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-gray-400 mb-2">
                  {paper.date}
                </p>

                {/* Conference/Venue - only for first 3 */}
                {paper.id <= 3 && (
                  <p className="text-sm text-pink-400 font-medium mb-4">
                    {paper.venue}
                  </p>
                )}
                {paper.id > 3 && <div className="mb-2"></div>}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-transparent text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600 hover:border-pink-500/50 hover:text-pink-400 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spacer to push Read More to bottom */}
                <div className="flex-1"></div>

                {/* Read More Link */}
                <a
                  href={paper.arxivUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 font-medium transition-colors duration-200 group/link"
                >
                  Read More
                  <FaExternalLinkAlt size={12} className="transform group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
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
