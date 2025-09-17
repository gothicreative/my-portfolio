import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  SiAdobeillustrator
} from 'react-icons/si';
import { 
  FaMobile, 
  FaPalette, 
  FaServer, 
  FaCode,
  FaArrowRight,
  FaPlay,
  FaPause
} from 'react-icons/fa';
const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('mern');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
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
    { id: 'mern', name: 'MERN Stack', icon: FaCode },
    { id: 'mobile', name: 'Mobile Development', icon: FaMobile },
    { id: 'creative', name: 'Creative Tools', icon: FaPalette },
    { id: 'tools', name: 'Development Tools', icon: FaServer },
  ];

  // Responsive positions based on screen size
  const getMernFlowPositions = () => {
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
    
    if (isMobile) {
      return [
        {
          id: 'mongodb',
          name: 'MongoDB',
          icon: SiMongodb,
          color: '#47A248',
          position: { x: 20, y: 20 },
          description: 'NoSQL database for flexible data storage',
          connections: ['express']
        },
        {
          id: 'express',
          name: 'Express.js',
          icon: SiExpress,
          color: '#000000',
          position: { x: 150, y: 20 },
          description: 'Fast web framework for Node.js',
          connections: ['react', 'nodejs']
        },
        {
          id: 'react',
          name: 'React',
          icon: SiReact,
          color: '#61DAFB',
          position: { x: 20, y: 120 },
          description: 'Frontend library for building UIs',
          connections: ['nodejs']
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          icon: SiNodedotjs,
          color: '#339933',
          position: { x: 150, y: 120 },
          description: 'JavaScript runtime for server-side development',
          connections: ['mongodb']
        }
      ];
    } else if (isTablet) {
      return [
        {
          id: 'mongodb',
          name: 'MongoDB',
          icon: SiMongodb,
          color: '#47A248',
          position: { x: 40, y: 60 },
          description: 'NoSQL database for flexible data storage',
          connections: ['express']
        },
        {
          id: 'express',
          name: 'Express.js',
          icon: SiExpress,
          color: '#000000',
          position: { x: 170, y: 60 },
          description: 'Fast web framework for Node.js',
          connections: ['react', 'nodejs']
        },
        {
          id: 'react',
          name: 'React',
          icon: SiReact,
          color: '#61DAFB',
          position: { x: 300, y: 20 },
          description: 'Frontend library for building UIs',
          connections: ['nodejs']
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          icon: SiNodedotjs,
          color: '#339933',
          position: { x: 300, y: 100 },
          description: 'JavaScript runtime for server-side development',
          connections: ['mongodb']
        }
      ];
    } else {
      return [
        {
          id: 'mongodb',
          name: 'MongoDB',
          icon: SiMongodb,
          color: '#47A248',
          position: { x: 50, y: 80 },
          description: 'NoSQL database for flexible data storage',
          connections: ['express']
        },
        {
          id: 'express',
          name: 'Express.js',
          icon: SiExpress,
          color: '#000000',
          position: { x: 200, y: 80 },
          description: 'Fast web framework for Node.js',
          connections: ['react', 'nodejs']
        },
        {
          id: 'react',
          name: 'React',
          icon: SiReact,
          color: '#61DAFB',
          position: { x: 350, y: 20 },
          description: 'Frontend library for building UIs',
          connections: ['nodejs']
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          icon: SiNodedotjs,
          color: '#339933',
          position: { x: 350, y: 140 },
          description: 'JavaScript runtime for server-side development',
          connections: ['mongodb']
        }
      ];
    }
  };

  // Update positions on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setMernFlow(getMernFlowPositions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Close tooltip when clicking outside on mobile
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMobile && selectedSkill) {
        const target = event.target as Element;
        if (!target.closest('.mern-node')) {
          setSelectedSkill(null);
        }
      }
    };

    if (isMobile) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, selectedSkill]);

  const skillCategories = {
    mern: [
      { name: 'MongoDB', icon: SiMongodb, level: 90, color: '#47A248', description: 'NoSQL database design and optimization' },
      { name: 'Express.js', icon: SiExpress, level: 95, color: '#000000', description: 'RESTful API development and middleware' },
      { name: 'React', icon: SiReact, level: 98, color: '#61DAFB', description: 'Modern React with hooks and context' },
      { name: 'Node.js', icon: SiNodedotjs, level: 92, color: '#339933', description: 'Server-side JavaScript and npm ecosystem' },
      { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6', description: 'Type-safe JavaScript development' },
      { name: 'JavaScript ES6+', icon: SiJavascript, level: 95, color: '#F7DF1E', description: 'Modern JavaScript features and patterns' },
    ],
    mobile: [
      { name: 'React Native', icon: SiReact, level: 85, color: '#61DAFB', description: 'Cross-platform mobile development' },
      { name: 'Expo', icon: SiReact, level: 82, color: '#000020', description: 'React Native development platform' },
      { name: 'Mobile UI/UX', icon: FaMobile, level: 88, color: '#6366F1', description: 'Mobile-first design principles' },
      { name: 'App Store Deploy', icon: FaMobile, level: 80, color: '#34D399', description: 'iOS and Android app deployment' },
    ],
    creative: [
      { name: 'Figma', icon: SiFigma, level: 92, color: '#F24E1E', description: 'UI/UX design and prototyping' },
      { name: 'Adobe Illustrator', icon: SiAdobeillustrator, level: 88, color: '#FF9A00', description: 'Vector graphics and logo design' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: '#06B6D4', description: 'Utility-first CSS framework' },
      { name: 'Digital Illustration', icon: FaPalette, level: 85, color: '#8B5CF6', description: 'Creative digital artwork and graphics' },
      { name: 'Brand Design', icon: FaPalette, level: 78, color: '#EC4899', description: 'Logo and brand identity creation' },
    ],
    tools: [
      { name: 'Git & GitHub', icon: SiGit, level: 90, color: '#F05032', description: 'Version control and collaboration' },
      { name: 'Docker', icon: SiDocker, level: 75, color: '#2496ED', description: 'Containerization and deployment' },
      { name: 'AWS', icon: SiAmazon, level: 70, color: '#FF9900', description: 'Cloud infrastructure and services' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#336791', description: 'Relational database management' },
    ]
  };

  const [mernFlow, setMernFlow] = useState(getMernFlowPositions());

  // Update positions on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setMernFlow(getMernFlowPositions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Close tooltip when clicking outside on mobile
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMobile && selectedSkill) {
        const target = event.target as Element;
        if (!target.closest('.mern-node')) {
          setSelectedSkill(null);
        }
      }
    };

    if (isMobile) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, selectedSkill]);

  const startAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
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
            className="text-center"
          >
            <motion.h1
              variants={fadeInUpVariants}
              className="text-5xl font-bold mb-6"
            >
              Technical{' '}
              <span className="text-gradient">Expertise</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Explore my comprehensive skill set in modern web development, mobile applications, 
              and creative design tools. See how I leverage the MERN stack to build scalable, 
              performant applications.
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-wrap justify-center gap-2 md:gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive MERN Stack Visualization */}
      {selectedCategory === 'mern' && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">MERN Stack Flow</h2>
              <p className="text-xl text-gray-600 mb-6">
                Interactive visualization of how MongoDB, Express, React, and Node.js work together
              </p>
              <button
                onClick={startAnimation}
                className="btn-primary"
              >
                {isAnimating ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
                {isAnimating ? 'Pause Animation' : 'Start Data Flow Animation'}
              </button>
            </motion.div>

            {/* MERN Flow Diagram */}
            <div className="relative h-48 md:h-64 mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-8 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full">
                {/* Connection Lines */}
                {mernFlow.map((tech) =>
                  tech.connections?.map((connectionId) => {
                    const target = mernFlow.find(t => t.id === connectionId);
                    if (!target) return null;
                    
                    return (
                      <motion.line
                        key={`${tech.id}-${connectionId}`}
                        x1={tech.position.x + 40}
                        y1={tech.position.y + 40}
                        x2={target.position.x + 40}
                        y2={target.position.y + 40}
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: isAnimating ? 1 : 0.3,
                          stroke: isAnimating ? '#3B82F6' : '#E5E7EB'
                        }}
                        transition={{ duration: 2, repeat: isAnimating ? Infinity : 0 }}
                      />
                    );
                  })
                )}
                
                {/* Data Flow Animation - Responsive */}
                {isAnimating && (
                  <motion.circle
                    r="3"
                    fill="#F59E0B"
                    initial={{ 
                      cx: mernFlow[0].position.x + 40, 
                      cy: mernFlow[0].position.y + 40 
                    }}
                    animate={{
                      cx: mernFlow.map(tech => tech.position.x + 40),
                      cy: mernFlow.map(tech => tech.position.y + 40)
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                )}
              </svg>

              {/* Technology Nodes */}
              {mernFlow.map((tech, index) => {
                const nodeSize = isMobile ? 'w-16 h-16' : 'w-20 h-20';
                const iconSize = isMobile ? 'w-6 h-6' : 'w-8 h-8';
                
                return (
                  <motion.div
                    key={tech.id}
                    className={`mern-node absolute ${nodeSize} bg-white dark:bg-gray-700 rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-500 transition-all`}
                    style={{
                      left: `${tech.position.x}px`,
                      top: `${tech.position.y}px`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => !isMobile && setSelectedSkill(tech.id)}
                    onHoverEnd={() => !isMobile && setSelectedSkill(null)}
                    onTouchStart={() => isMobile && setSelectedSkill(selectedSkill === tech.id ? null : tech.id)}
                    onClick={() => isMobile && setSelectedSkill(selectedSkill === tech.id ? null : tech.id)}
                  >
                    <tech.icon className={`${iconSize} mb-1`} style={{ color: tech.color }} />
                    <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300 leading-tight">
                      {isMobile ? tech.name.split(' ')[0] : tech.name}
                    </span>
                    
                    {/* Tooltip - Responsive */}
                    <AnimatePresence>
                      {selectedSkill === tech.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`absolute ${isMobile ? '-bottom-20' : '-top-16'} left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm z-10 max-w-48 text-center shadow-lg`}
                        >
                          {tech.description}
                          <div className={`absolute ${isMobile ? 'bottom-full' : 'top-full'} left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 ${isMobile ? 'border-b-4 border-b-gray-900 dark:border-b-gray-700' : 'border-t-4 border-t-gray-900 dark:border-t-gray-700'} border-transparent`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Skills Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              {categories.find(c => c.id === selectedCategory)?.name} Skills
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {skillCategories[selectedCategory as keyof typeof skillCategories]?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: isMobile ? -2 : -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: skill.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold">{skill.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 md:h-2 mr-2 md:mr-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: isMobile ? 0.8 : 1, delay: index * 0.05 }}
                            className="h-1.5 md:h-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technology Ecosystem</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              How different technologies complement each other in my development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: 'Frontend', icon: SiReact, color: '#61DAFB', techs: ['React', 'TypeScript', 'Tailwind'] },
              { title: 'Backend', icon: SiNodedotjs, color: '#339933', techs: ['Node.js', 'Express', 'APIs'] },
              { title: 'Database', icon: SiMongodb, color: '#47A248', techs: ['MongoDB', 'PostgreSQL', 'Design'] },
              { title: 'Mobile', icon: FaMobile, color: '#6366F1', techs: ['React Native', 'Expo', 'Cross-platform'] }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform"
                     style={{ backgroundColor: `${category.color}20` }}>
                  <category.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{category.title}</h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm md:text-base">
                  {category.techs.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Together?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
              Let's leverage these technologies to create something amazing for your next project.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
              <button className="bg-white text-primary-600 font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base">
                View My Projects
                <FaArrowRight className="ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 text-sm md:text-base">
                Let's Talk
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;