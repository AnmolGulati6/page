import React from 'react';

import Python from '../assets/python.png';

const Skills = () => {
  const aiSkills = [
    { name: 'Large Language Models', icon: '🤖', category: 'Core AI' },
    { name: 'PyTorch', icon: '🔥', category: 'Frameworks' },
    { name: 'Transformers', icon: '🔄', category: 'Frameworks' },
    { name: 'Vector Databases', icon: '🗄️', category: 'Infrastructure' },
    { name: 'RAG Systems', icon: '🔍', category: 'Core AI' },
    { name: 'LangChain', icon: '⛓️', category: 'Frameworks' },
    { name: 'Embeddings', icon: '📊', category: 'Core AI' },
    { name: 'Semantic Search', icon: '🎯', category: 'Core AI' },
    { name: 'Python', icon: Python, category: 'Languages', isImage: true },
    { name: 'Model Context Protocol', icon: '🔌', category: 'Infrastructure' },
    { name: 'API Development', icon: '⚡', category: 'Infrastructure' },
    { name: 'Agent Orchestration', icon: '🎭', category: 'Core AI' },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-gradient-to-b from-[#112240] to-[#0a192f] text-gray-300 py-20'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center pb-12'>
          <p className='text-5xl font-bold inline border-b-4 border-pink-600 pb-2'>AI Technologies & Expertise</p>
          <p className='text-lg text-gray-400 mt-6'>Core technologies and frameworks powering my research and development</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 py-8'>
          {aiSkills.map((skill, index) => (
            <div
              key={index}
              className='group bg-[#112240] rounded-xl shadow-xl hover:shadow-pink-600/30 hover:scale-110 duration-300 transform border border-gray-700/50 hover:border-pink-600/50 p-6 flex flex-col items-center justify-center'
            >
              {skill.isImage ? (
                <img
                  className='w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300'
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                />
              ) : (
                <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {skill.icon}
                </div>
              )}
              <p className='text-base font-semibold text-gray-300 group-hover:text-pink-500 transition-colors duration-300 text-center'>
                {skill.name}
              </p>
              <p className='text-xs text-gray-500 mt-1'>{skill.category}</p>
            </div>
          ))}
        </div>

        {/* Research Focus */}
        <div className='mt-16'>
          <div className='text-center mb-8'>
            <p className='text-3xl font-bold text-white mb-4'>Research Focus</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-[#112240] rounded-xl p-6 border border-pink-600/30 hover:border-pink-600 transition-all duration-300 hover:transform hover:scale-105'>
              <div className='text-4xl mb-3'>🤖</div>
              <h3 className='text-xl font-bold text-white mb-2'>LLM Agents</h3>
              <p className='text-gray-400 text-sm'>Multi-agent systems and coordination</p>
            </div>
            <div className='bg-[#112240] rounded-xl p-6 border border-purple-600/30 hover:border-purple-600 transition-all duration-300 hover:transform hover:scale-105'>
              <div className='text-4xl mb-3'>🔍</div>
              <h3 className='text-xl font-bold text-white mb-2'>Retrieval Systems</h3>
              <p className='text-gray-400 text-sm'>Tool-to-agent retrieval mechanisms</p>
            </div>
            <div className='bg-[#112240] rounded-xl p-6 border border-blue-600/30 hover:border-blue-600 transition-all duration-300 hover:transform hover:scale-105'>
              <div className='text-4xl mb-3'>💾</div>
              <h3 className='text-xl font-bold text-white mb-2'>Memory Management</h3>
              <p className='text-gray-400 text-sm'>Dynamic context optimization</p>
            </div>
            <div className='bg-[#112240] rounded-xl p-6 border border-green-600/30 hover:border-green-600 transition-all duration-300 hover:transform hover:scale-105'>
              <div className='text-4xl mb-3'>⚡</div>
              <h3 className='text-xl font-bold text-white mb-2'>MCP Integration</h3>
              <p className='text-gray-400 text-sm'>Model Context Protocol tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
