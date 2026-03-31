import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaPalette, 
  FaGraduationCap,
  FaLightbulb,
  FaHeart,
  FaDownload,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaArrowRight
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiAdobeillustrator } from 'react-icons/si';
import { Link } from 'react-router-dom';
import MatrixCodeFlow from '../components/MatrixCodeFlow';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, level: 90, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
    { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
    { name: 'Express', icon: SiExpress, level: 87, color: '#000000' },
    { name: 'Adobe Illustrator', icon: SiAdobeillustrator, level: 88, color: '#FF9A00' },
  ];

  const interests = [
    { icon: FaCode, title: 'Clean Code', description: 'Passionate about writing maintainable, efficient code' },
    { icon: FaPalette, title: 'Digital Art', description: 'Creating stunning digital illustrations and UI designs' },
    { icon: FaGamepad, title: 'Gaming', description: 'Exploring interactive experiences and game mechanics' },
    { icon: FaMusic, title: 'Music', description: 'Finding inspiration through various music genres' },
    { icon: FaCamera, title: 'Photography', description: 'Capturing moments and visual storytelling' },
    { icon: FaLightbulb, title: 'Innovation', description: 'Always exploring new technologies and creative solutions' }
  ];

  return (
    <div className="space-y-16 bg-black min-h-screen relative">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0">
        <MatrixCodeFlow />
      </div>
      
      {/* Semi-transparent overlay for better text readability */}
      <div className="fixed inset-0 bg-black/70 z-10"></div>
      
      {/* Content overlay */}
      <div className="relative z-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-black/90 to-green-900/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.h1
                variants={fadeInUpVariants}
                className="text-5xl font-bold mb-6 text-green-400 font-mono"
              >
                &gt; About Me
              </motion.h1>
              
              <motion.p
                variants={fadeInUpVariants}
                className="text-xl text-green-300 mb-6 font-mono"
              >
                I'm a passionate full-stack developer who bridges the gap between robust backend systems 
                and beautiful user experiences, with a special focus on mobile-first development.
              </motion.p>

              <motion.p
                variants={fadeInUpVariants}
                className="text-lg text-green-200 mb-8 font-mono"
              >
                My journey in tech began with curiosity about how things work under the hood. 
                Today, I specialize in the MERN stack and React Native, creating applications 
                that not only function flawlessly but also delight users with intuitive design 
                and creative visual elements.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="/HafizAdemCV.pdf" 
                  download="HafizAdemCV.pdf"
                  className="btn-primary inline-flex items-center bg-green-700 hover:bg-green-600 font-mono"
                >
                  <FaDownload className="mr-2" />
                  &gt; Download Resume
                </a>
                <button className="btn-outline border-green-500/50 text-green-300 hover:bg-green-900/30 font-mono">
                  &gt; View My Work
                </button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden border border-green-500/30">
                {/* Profile Image */}
                <img 
                  src="/images/profile.png" 
                  alt="Hafiz Adem - Full Stack Developer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center text-green-400">
                    <div className="w-32 h-32 bg-green-900/30 rounded-full mx-auto mb-4 flex items-center justify-center border border-green-500/30">
                      <FaCode className="w-16 h-16" />
                    </div>
                    <p className="text-lg font-medium font-mono">&gt; Hafiz Adem</p>
                  </div>
                </div>
                
                {/* Floating creative elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-8 w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-500/30"
                >
                  <FaPalette className="w-6 h-6 text-green-400" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-16 left-8 w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30"
                >
                  <FaMobile className="w-5 h-5 text-green-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-padding bg-black/50 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Technical Expertise</h2>
            <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
              Specialized in modern web and mobile technologies with a focus on creating scalable, 
              performant applications that provide exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center bg-gray-900/80 border border-green-500/20"
              >
                <div className="mb-4">
                  <skill.icon 
                    className="w-12 h-12 mx-auto mb-3 text-green-400" 
                  />
                  <h3 className="text-xl font-semibold text-green-300 font-mono">{skill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="bg-gray-800 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full bg-green-500"
                    />
                  </div>
                  <span className="text-sm text-green-300 font-mono">{skill.level}% Proficiency</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="section-padding bg-black/70 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; My Journey</h2>
            <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
              From curiosity-driven learning to professional full-stack development, 
              here's how I evolved into a MERN stack and React Native specialist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center bg-gray-900/80 p-6 rounded-2xl border border-green-500/20"
            >
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <FaGraduationCap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">Learning & Foundation</h3>
              <p className="text-green-200 font-mono">
                Started with web fundamentals, then dove deep into JavaScript, React, and modern development practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center bg-gray-900/80 p-6 rounded-2xl border border-green-500/20"
            >
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <FaCode className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">Full-Stack Mastery</h3>
              <p className="text-green-200 font-mono">
                Mastered the MERN stack, building complex applications with MongoDB, Express, React, and Node.js.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center bg-gray-900/80 p-6 rounded-2xl border border-green-500/20"
            >
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <FaMobile className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">Mobile Innovation</h3>
              <p className="text-green-200 font-mono">
                Expanded into React Native development, creating cross-platform mobile apps with native performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Creative Approach</h2>
            <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
              Combining technical expertise with artistic vision to create applications that are both 
              functional and visually compelling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card text-center bg-gray-900/80 border border-green-500/20"
            >
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <FaCode className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">Front-End Design</h3>
              <p className="text-green-200 font-mono">
                Crafting clean, user-friendly interfaces with the latest front-end technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card text-center bg-gray-900/80 border border-green-500/20"
            >
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <FaMobile className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">Responsive Layouts</h3>
              <p className="text-green-200 font-mono">
                Ensuring applications are mobile-first and optimized for all screen sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card text-center bg-gray-900/80 border border-green-500/20"
            >
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <FaPalette className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">UI/UX Design</h3>
              <p className="text-green-200 font-mono">
                Focusing on user experience to create intuitive and delightful applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-padding bg-black/50 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Personal Interests</h2>
            <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
              Beyond coding, I'm passionate about creative pursuits that fuel my imagination 
              and inspire innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card bg-gray-900/80 border border-green-500/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                    <interest.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">{interest.title}</h3>
                    <p className="text-green-200 font-mono">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="section-padding bg-gradient-to-r from-green-900/50 to-black backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; My Philosophy</h2>
            <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
              Great software is born from the intersection of technical excellence, user empathy, 
              and creative vision. I believe in writing code that not only works but inspires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-gray-900/80 p-6 rounded-2xl border border-green-500/20"
            >
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                <FaHeart className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">User-Centric Design</h3>
                <p className="text-green-200 font-mono">
                  Every line of code I write is crafted with the end user in mind. 
                  Beautiful interfaces backed by robust, scalable architecture.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-gray-900/80 p-6 rounded-2xl border border-green-500/20"
            >
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                <FaLightbulb className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-300 font-mono">Continuous Learning</h3>
                <p className="text-green-200 font-mono">
                  Technology evolves rapidly, and so do I. Always exploring new frameworks, 
                  tools, and methodologies to stay at the forefront of innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-900/70 to-black backdrop-blur-sm">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Let's Create Something Amazing</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-300 font-mono">
              Ready to bring your vision to life? I'm here to help you build innovative solutions 
              that stand out in today's digital landscape.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 font-mono"
            >
              &gt; Start a Project
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;