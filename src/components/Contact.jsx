import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0f1f3d] flex justify-center items-center p-4 py-20'>
      <div className='max-w-[1000px] w-full'>
        <div className='text-center pb-12'>
          <p className='text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300 pb-2'>
            Get In Touch
          </p>
          <p className='text-lg text-gray-400 mt-6 max-w-2xl mx-auto'>
            Interested in collaboration, discussing research, or have questions? I'd love to hear from you!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Contact Info */}
          <div className='space-y-6'>
            <div className='bg-[#112240] rounded-xl p-6 border border-gray-700/50 hover:border-pink-600/50 transition-all duration-300'>
              <h3 className='text-2xl font-bold text-white mb-6'>Connect With Me</h3>
              
              <div className='space-y-4'>
                <a
                  href='mailto:agulati101@gmail.com'
                  className='flex items-center gap-4 p-4 bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] transition-all duration-300 group'
                >
                  <FaEnvelope className='text-pink-500 text-2xl group-hover:scale-110 transition-transform' />
                  <div>
                    <p className='text-gray-400 text-sm'>Email</p>
                    <p className='text-white font-medium'>agulati101@gmail.com</p>
                  </div>
                </a>

                <a
                  href='https://www.linkedin.com/in/anmolgulati/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 p-4 bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] transition-all duration-300 group'
                >
                  <FaLinkedin className='text-blue-500 text-2xl group-hover:scale-110 transition-transform' />
                  <div>
                    <p className='text-gray-400 text-sm'>LinkedIn</p>
                    <p className='text-white font-medium'>linkedin.com/in/anmolgulati</p>
                  </div>
                </a>

                <a
                  href='https://github.com/AnmolGulati6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 p-4 bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] transition-all duration-300 group'
                >
                  <FaGithub className='text-gray-400 text-2xl group-hover:scale-110 transition-transform' />
                  <div>
                    <p className='text-gray-400 text-sm'>GitHub</p>
                    <p className='text-white font-medium'>github.com/AnmolGulati6</p>
                  </div>
                </a>

                <a
                  href='https://scholar.google.com/citations?hl=en&user=2l0cGNgAAAAJ'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 p-4 bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] transition-all duration-300 group'
                >
                  <SiGooglescholar className='text-blue-500 text-2xl group-hover:scale-110 transition-transform' />
                  <div>
                    <p className='text-gray-400 text-sm'>Google Scholar</p>
                    <p className='text-white font-medium'>Research Publications</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            method='POST'
            action='https://getform.io/f/52bdf96d-98b5-4fae-ae5d-4633bc6aa881'
            className='bg-[#112240] rounded-xl p-6 border border-gray-700/50 hover:border-pink-600/50 transition-all duration-300'
          >
            <h3 className='text-2xl font-bold text-white mb-6'>Send a Message</h3>
            
            <div className='space-y-4'>
              <div>
                <label className='text-gray-300 text-sm font-medium mb-2 block'>Name</label>
                <input
                  className='w-full bg-[#0a192f] text-gray-300 border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-pink-600 transition-colors'
                  type='text'
                  placeholder='Your Name'
                  name='name'
                  required
                />
              </div>
              
              <div>
                <label className='text-gray-300 text-sm font-medium mb-2 block'>Email</label>
                <input
                  className='w-full bg-[#0a192f] text-gray-300 border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-pink-600 transition-colors'
                  type='email'
                  placeholder='your.email@example.com'
                  name='email'
                  required
                />
              </div>
              
              <div>
                <label className='text-gray-300 text-sm font-medium mb-2 block'>Message</label>
                <textarea
                  className='w-full bg-[#0a192f] text-gray-300 border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-pink-600 transition-colors resize-none'
                  name='message'
                  rows='6'
                  placeholder='Your message here...'
                  required
                ></textarea>
              </div>
              
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className='text-center text-gray-400 mt-12'>
          <p className='text-sm'>© 2025 Anmol Gulati. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
