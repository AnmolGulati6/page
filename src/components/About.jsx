import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-300 py-20'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4'>
        <div className='max-w-[1000px] w-full'>
          <div className='text-center pb-8'>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600 pb-2'>
              About
            </p>
          </div>
          
          <div className='w-full mt-8'>
            <div className='text-center mb-8'>
              <p className='text-4xl font-bold text-white mb-4'>
                Hi, I'm Anmol Gulati
              </p>
              <p className='text-2xl font-semibold text-pink-500 mb-6'>
                AI Researcher & Engineer
              </p>
            </div>
            
            <div className='bg-[#112240] rounded-2xl p-8 shadow-2xl border border-gray-700/50'>
              <p className='text-lg text-gray-300 leading-relaxed mb-6'>
                I'm a Silicon Valley-based AI Researcher and Engineer at 
                <span className='text-pink-500 font-semibold'> PwC</span>, where I focus on advancing 
                the frontiers of artificial intelligence and developing cutting-edge solutions for enterprise applications.
              </p>
              
              <p className='text-lg text-gray-300 leading-relaxed mb-6'>
                My research focuses on advancing the frontier of 
                <span className='text-pink-500 font-semibold'> Large Language Models (LLMs)</span>, 
                <span className='text-pink-500 font-semibold'> Multi-Agent Systems</span>, and 
                <span className='text-pink-500 font-semibold'> AI Infrastructure</span>. I'm passionate about 
                developing scalable retrieval mechanisms, optimizing memory management in LLM agents, and building 
                robust tool integration frameworks that push the boundaries of what AI systems can achieve.
              </p>
              
              <p className='text-lg text-gray-300 leading-relaxed mb-6'>
                Through my publications, I've contributed to state-of-the-art techniques in tool-to-agent retrieval, 
                dynamic memory optimization, and the Model Context Protocol (MCP), with demonstrated improvements 
                in performance metrics across multiple benchmarks.
              </p>
              
              <p className='text-lg text-gray-300 leading-relaxed'>
                Beyond my technical work, I channel my drive for excellence both intellectually and physically through 
                my passion for <span className='text-pink-500 font-semibold'>bodybuilding</span>, embodying a commitment 
                to continuous improvement in all aspects of life.
              </p>
            </div>

            {/* Stats or Highlights */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
              <div className='bg-[#112240] rounded-xl p-6 text-center border border-pink-600/30 hover:border-pink-600 transition-all duration-300 transform hover:scale-105'>
                <p className='text-4xl font-bold text-pink-500 mb-2'>5+</p>
                <p className='text-gray-400 font-medium'>Research Publications</p>
              </div>
              <div className='bg-[#112240] rounded-xl p-6 text-center border border-purple-600/30 hover:border-purple-600 transition-all duration-300 transform hover:scale-105'>
                <p className='text-4xl font-bold text-purple-500 mb-2'>LLM</p>
                <p className='text-gray-400 font-medium'>Multi-Agent Systems</p>
              </div>
              <div className='bg-[#112240] rounded-xl p-6 text-center border border-blue-600/30 hover:border-blue-600 transition-all duration-300 transform hover:scale-105'>
                <p className='text-4xl font-bold text-blue-500 mb-2'>SOTA</p>
                <p className='text-gray-400 font-medium'>Performance Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
