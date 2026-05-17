import React, { useState, useMemo } from 'react';
import { researchPapers } from "../data/data.js";
import { FaArrowRight, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

import memtool from '../research/memtool.png';
import agentAsAGraph from '../research/agent-as-a-graph.png';
import scalemcp from '../research/scalemcp.png';
import toolSurvey from '../research/tool survey.png';
import toolToAgent from '../research/tool-to-agent.png';
import jackal from '../research/jackal.png';
import fromRowsToReasoning from "../research/from_rows_to_reasoning.png";
import dontBreakTheCache from "../research/don't_break_the_cache.png";
import brtr from "../research/brtr.png";
import chronos from "../research/chronos.png";
import agenticJackal from "../research/agentic_jackal.png";
import askEarly from "../research/ask_early.png";
import grepAllYouNeed from "../research/grep_all_you_need.png";

const paperImages = {
  1: fromRowsToReasoning,
  2: dontBreakTheCache,
  3: memtool,
  4: agentAsAGraph,
  5: scalemcp,
  6: toolSurvey,
  7: jackal,
  8: toolToAgent,
  9: brtr,
  10: chronos,
  11: agenticJackal,
  12: askEarly,
  13: grepAllYouNeed,
};

const conferenceVenuePapers = [1, 3, 4, 5, 6, 9];

const CATEGORIES = ["All", "Agents", "Retrieval", "Multimodal", "Memory"];

const PaperRow = ({ paper, isActive, onHover, onClick }) => {
  const isConference = conferenceVenuePapers.includes(paper.id);

  return (
    <a
      href={paper.arxivUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 py-4 px-4 border-b border-gray-700/40 cursor-pointer transition-all duration-200 ${
        isActive
          ? 'bg-[#112240]/80'
          : 'hover:bg-[#112240]/50'
      }`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      {/* Date */}
      <div className="w-24 shrink-0 text-sm text-gray-500 font-medium">
        {paper.date}
      </div>

      {/* Title + Authors */}
      <div className="flex-1 min-w-0">
        <h3 className={`font-semibold leading-snug transition-colors duration-200 line-clamp-1 ${
          isActive ? 'text-pink-400' : 'text-gray-200 group-hover:text-pink-400'
        }`}>
          {paper.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 truncate">
          {paper.authors}
        </p>
        {isConference && (
          <span className="inline-block mt-1.5 text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded">
            {paper.venue}
          </span>
        )}
      </div>

      {/* Category */}
      <div className="hidden md:flex items-center shrink-0 w-32 justify-end">
        <span className="text-xs text-gray-400 truncate">
          {paper.category}
        </span>
      </div>

      {/* Arrow */}
      <div className="shrink-0 w-8 flex justify-center">
        <FaArrowRight
          size={14}
          className={`transition-all duration-200 ${
            isActive
              ? 'text-pink-400 translate-x-1'
              : 'text-gray-600 group-hover:text-pink-400 group-hover:translate-x-1'
          }`}
        />
      </div>
    </a>
  );
};

const FeaturedCard = ({ paper }) => {
  if (!paper) return null;

  return (
    <div className="bg-[#0d1b2a] rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300">
      {paperImages[paper.id] && (
        <div className="bg-[#0a1421] flex items-center justify-center overflow-hidden aspect-[4/3]">
          <img
            src={paperImages[paper.id]}
            alt={paper.title}
            className="w-full h-full object-contain p-3"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-base font-bold text-white leading-snug mb-2">
          {paper.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3">
          {paper.authors}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {paper.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-xs text-gray-400 border border-gray-600/60 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredPaperId, setHoveredPaperId] = useState(null);
  const [sortAsc, setSortAsc] = useState(false);

  const filteredPapers = useMemo(() => {
    let papers = activeCategory === "All"
      ? [...researchPapers]
      : researchPapers.filter(p => p.category === activeCategory);

    papers.sort((a, b) => {
      const cmp = a.sortDate.localeCompare(b.sortDate);
      return sortAsc ? cmp : -cmp;
    });

    return papers;
  }, [activeCategory, sortAsc]);

  const featuredPaper = hoveredPaperId
    ? filteredPapers.find(p => p.id === hoveredPaperId) || filteredPapers[0]
    : filteredPapers[0];

  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-gradient-to-b from-[#0a192f] to-[#0f1f3d] py-20'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='pb-8'>
          <p className='text-4xl sm:text-5xl font-bold text-gray-200 mb-4 tracking-tight'>
            <span className="text-pink-500">[</span>RESEARCH<span className="text-pink-500">]</span>
          </p>
          <p className='text-base text-gray-400 max-w-xl leading-relaxed'>
            Research papers and publications covering LLM agents, multimodal reasoning, benchmarks, and AI infrastructure.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setHoveredPaperId(null);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/20'
                  : 'border border-gray-600 text-gray-400 hover:border-pink-500/50 hover:text-pink-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content: Table + Featured Card */}
        <div className="flex gap-8">
          {/* Left: Paper Table */}
          <div className="flex-1 min-w-0">
            {/* Table Header */}
            <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-600/60 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <button
                onClick={() => setSortAsc(!sortAsc)}
                className="w-24 shrink-0 flex items-center gap-1.5 hover:text-pink-400 transition-colors"
              >
                Date
                {sortAsc
                  ? <FaSortAmountUp size={10} />
                  : <FaSortAmountDown size={10} />
                }
              </button>
              <div className="flex-1">Title</div>
              <div className="hidden md:block w-32 text-right">Category</div>
              <div className="w-8"></div>
            </div>

            {/* Paper Rows */}
            <div>
              {filteredPapers.map((paper) => (
                <PaperRow
                  key={paper.id}
                  paper={paper}
                  isActive={featuredPaper?.id === paper.id}
                  onHover={() => setHoveredPaperId(paper.id)}
                  onClick={(e) => e.stopPropagation()}
                />
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                No papers in this category yet.
              </div>
            )}
          </div>

          {/* Right: Featured Paper Card (hidden on mobile) */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <FeaturedCard paper={featuredPaper} />
            </div>
          </div>
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
