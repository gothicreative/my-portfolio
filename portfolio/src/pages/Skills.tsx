import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiPostgresql,
  SiAdobeillustrator,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiPostman,
  SiExpo,
  SiVercel,
  SiAdobephotoshop,
  SiBlender
} from 'react-icons/si';
import { 
  FaMobile, 
  FaPalette, 
  FaServer, 
  FaCode,
  FaArrowRight,
  FaDatabase,
  FaTools
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MatrixCodeFlow from '../components/MatrixCodeFlow';
import { SKILLS_DATA } from '../utils/constants';

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<any> } = {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiPostgresql,
  SiAdobeillustrator,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiPostman,
  SiExpo,
  SiVercel,
  SiAdobephotoshop,
  SiBlender,
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaTools,
  FaPalette
};

// Color mapping for skills
const colorMap: { [key: string]: string } = {
  SiMongodb: '#47A248',
  SiExpress: '#000000',
  SiReact: '#61DAFB',
  SiNodedotjs: '#339933',
  SiTypescript: '#3178C6',
  SiJavascript: '#F7DF1E',
  SiTailwindcss: '#06B6D4',
  SiGit: '#F05032',
  SiDocker: '#2496ED',
  SiAmazon: '#FF9900',
  SiFigma: '#F24E1E',
  SiPostgresql: '#336791',
  SiAdobeillustrator: '#FF9A00',
  SiRedux: '#764ABC',
  SiNextdotjs: '#000000',
  SiGraphql: '#E10098',
  SiPostman: '#FF6C37',
  SiExpo: '#000020',
  SiVercel: '#000000',
  SiAdobephotoshop: '#31A8FF',
  SiBlender: '#F5792A',
  frontend: '#10B981',
  backend: '#3B82F6',
  mobile: '#8B5CF6',
  databases: '#F59E0B',
  tools: '#EF4444',
  creative: '#EC4899'
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: FaCode },
    { id: 'backend', name: 'Backend', icon: FaServer },
    { id: 'mobile', name: 'Mobile', icon: FaMobile },
    { id: 'databases', name: 'Databases', icon: FaDatabase },
    { id: 'tools', name: 'Tools', icon: FaTools },
    { id: 'creative', name: 'Creative', icon: FaPalette },
  ];

  return (
    <div className="space-y-16 bg-black min-h-screen relative">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0">
        <MatrixCodeFlow />
      </div>
      
      {/* Background blur overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
      
      {/* Content overlay */}
      <div className="relative z-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6 text-green-400 font-mono"
            >
              &gt; My Skills
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-green-300 mb-10 max-w-2xl mx-auto font-mono"
            >
              A comprehensive overview of my technical expertise, creative abilities, and 
              professional proficiencies across multiple domains of development and design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Technical Expertise</h2>
            <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
              Specialized in modern web and mobile technologies with a focus on creating scalable, 
              performant applications that provide exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base font-mono ${
                    selectedCategory === category.id
                      ? 'bg-green-700 text-white shadow-lg border border-green-500/30'
                      : 'bg-gray-900 text-green-300 hover:bg-gray-800 border border-green-500/20 shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>&gt; {category.name}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
              &gt; {categories.find(c => c.id === selectedCategory)?.name} Skills
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SKILLS_DATA[selectedCategory as keyof typeof SKILLS_DATA]?.map((skill: any, index: number) => {
                const IconComponent = iconMap[skill.icon];
                const color = colorMap[skill.icon] || colorMap[skill.category] || '#10B981';
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: isMobile ? -2 : -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="card group cursor-pointer bg-gray-900/80 border border-green-500/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform border border-green-500/30 bg-gray-800">
                        {IconComponent && <IconComponent className="w-6 h-6 md:w-8 md:h-8" style={{ color }} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-green-300 font-mono">{skill.name}</h3>
                        <div className="flex items-center mt-1">
                          <div className="flex-1 bg-gray-800 rounded-full h-1.5 md:h-2 mr-2 md:mr-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level * 20}%` }}
                              transition={{ duration: isMobile ? 0.8 : 1, delay: index * 0.05 }}
                              className="h-1.5 md:h-2 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          </div>
                          <span className="text-xs md:text-sm font-medium text-green-300 font-mono">{skill.level * 20}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-200 text-xs md:text-sm font-mono">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Ready to Collaborate?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-300 font-mono">
              Let's work together to bring your ideas to life with cutting-edge technology 
              and creative design solutions.
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
    </div>
  );
};

export default Skills;