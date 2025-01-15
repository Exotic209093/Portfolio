import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 animate-fade-in">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">James</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Full Stack Developer crafting exceptional digital experiences
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="p-3 bg-slate-800/50 rounded-full text-purple-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Github size={28} />
              </a>
              <a href="#" className="p-3 bg-slate-800/50 rounded-full text-purple-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Linkedin size={28} />
              </a>
              <a href="#" className="p-3 bg-slate-800/50 rounded-full text-purple-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <User className="text-purple-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                  alt="Working on laptop"
                  className="relative rounded-lg shadow-2xl transform transition duration-500 hover:scale-[1.01]"
                />
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  I'm a passionate Full Stack Developer with 5 years of experience in building web applications.
                  I specialize in React, Node.js, and modern web technologies. My approach combines technical
                  excellence with creative problem-solving to deliver exceptional user experiences.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Code2 className="text-purple-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                'React', 'TypeScript', 'Node.js',
                'Python', 'AWS', 'Docker',
                'MongoDB', 'PostgreSQL', 'GraphQL'
              ].map((skill) => (
                <div key={skill} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-slate-900 p-6 rounded-xl transform transition duration-500 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-gray-100">{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Briefcase className="text-purple-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A full-featured online shopping platform built with React and Node.js',
                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
                },
                {
                  title: 'Task Management App',
                  description: 'A collaborative task management tool with real-time updates',
                  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
                }
              ].map((project) => (
                <div key={project.title} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-slate-800 rounded-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition-colors">
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Mail className="text-purple-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Get in Touch</h2>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-slate-900 p-8 rounded-xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;