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
  FaCamera
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiAdobeillustrator } from 'react-icons/si';

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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
                className="text-5xl font-bold mb-6"
              >
                About{' '}
                <span className="text-gradient">Me</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUpVariants}
                className="text-xl text-gray-600 dark:text-gray-300 mb-6"
              >
                I'm a passionate full-stack developer who bridges the gap between robust backend systems 
                and beautiful user experiences, with a special focus on mobile-first development.
              </motion.p>

              <motion.p
                variants={fadeInUpVariants}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8"
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
                  href="/cv-updated--MERN-.pdf" 
                  download="Hafiz_Adem_Resume.pdf"
                  className="btn-primary inline-flex items-center"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>
                <button className="btn-outline">
                  View My Work
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
              <div className="relative w-full h-[400px] lg:h-[550px]  rounded-2xl overflow-hidden">
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
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaCode className="w-16 h-16" />
                    </div>
                    <p className="text-lg font-medium">Hafiz Adem</p>
                  </div>
                </div>
                
                {/* Floating creative elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <FaPalette className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-16 left-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <FaMobile className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                className="card text-center"
              >
                <div className="mb-4">
                  <skill.icon 
                    className="w-12 h-12 mx-auto mb-3" 
                    style={{ color: skill.color }}
                  />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}% Proficiency</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning & Foundation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Started with web fundamentals, then dove deep into JavaScript, React, and modern development practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Mastery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mastered the MERN stack, building complex applications with MongoDB, Express, React, and Node.js.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMobile className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expanded into React Native development, creating cross-platform mobile apps with native performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Beyond Code</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What drives my creativity and keeps me inspired outside of development work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card text-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <interest.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Philosophy</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Great software is born from the intersection of technical excellence, user empathy, 
              and creative vision. I believe in writing code that not only works but inspires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaHeart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
                <p className="opacity-90">
                  Every line of code I write is crafted with the end user in mind. 
                  Beautiful interfaces backed by robust, scalable architecture.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaLightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="opacity-90">
                  Technology evolves rapidly, and so do I. Always exploring new frameworks, 
                  tools, and methodologies to stay at the forefront of innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;