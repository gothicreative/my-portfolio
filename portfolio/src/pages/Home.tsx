import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaMobile, 
  FaPalette,
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';
import { SAMPLE_PROJECTS } from '../utils/constants';
import MatrixCodeFlow from '../components/MatrixCodeFlow';
import AppleButton from '../components/AppleButton';
import { useTheme } from '../hooks/useTheme';

const Home: React.FC = () => {
  const { theme, setIsHomePage } = useTheme();
  
  useEffect(() => {
    // Set this as the home page for theme context
    setIsHomePage(true);
    
    // Reset when component unmounts
    return () => {
      setIsHomePage(false);
    };
  }, [setIsHomePage]);

  const featuredProjects = SAMPLE_PROJECTS.filter(project => project.featured);

  const techStack = [
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-600' },
    { icon: FaReact, name: 'React', color: 'text-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
    { icon: FaReact, name: 'React Native', color: 'text-blue-600' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-700' },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`relative min-h-screen ${theme === 'dark' ? 'dark bg-black' : 'bg-white'}`}>
      {/* Full-screen Matrix Background */}
      <div className="fixed inset-0 z-0">
        <MatrixCodeFlow />
      </div>
      
      {/* Background blur overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
      
      {/* Content overlay */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="section-padding min-h-screen flex items-center">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-16 items-center">
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
                  className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight text-green-400 font-mono"
                >
                  Hafiz Adem
                </motion.h1>
                
                <motion.div 
                  variants={fadeInUpVariants}
                  className="inline-block mb-8"
                >
                  <div className="bg-gray-900/80 border border-green-500/30 rounded-lg px-6 py-3 inline-block">
                    <span className="text-green-400 font-mono text-xl">
                      &gt; MERN Stack Developer
                    </span>
                    <span className="animate-pulse text-green-400 font-mono text-xl">_</span>
                  </div>
                </motion.div>

                <motion.p
                  variants={fadeInUpVariants}
                  className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-mono"
                >
                  Crafting digital experiences with code. Full-stack developer specializing in 
                  modern web technologies and creative solutions.
                </motion.p>

                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-wrap justify-center gap-4 mb-12"
                >
                  <AppleButton variant="primary" as={Link} to="/contact">
                    <span className="font-mono">Connect &gt;</span>
                    <FaArrowRight className="ml-2" />
                  </AppleButton>
                  <AppleButton variant="secondary" as="a" href="HafizAdemCV.pdf" download="HafizAdemCV.pdf">
                    <FaDownload className="mr-2" />
                    <span className="font-mono">Resume.pdf</span>
                  </AppleButton>
                </motion.div>

                {/* Tech Stack Icons */}
                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center space-x-2 bg-gray-900/80 p-3 rounded-xl shadow-sm border border-green-500/20"
                    >
                      <tech.icon className={`w-6 h-6 ${tech.color}`} />
                      <span className="text-sm font-medium text-green-300 font-mono">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold mb-4 text-green-400 font-mono">
                &gt; Projects
              </h2>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed font-mono">
                Selected works showcasing technical expertise and creative problem-solving.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card group cursor-pointer apple-transition border border-green-500/20"
                >
                  <div className="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 line-clamp-3 font-mono text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge border border-green-500/30 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge border border-green-500/30 font-mono text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-green-400 hover:text-green-300 transition-colors"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-green-400 hover:text-green-300 transition-colors"
                          aria-label="View source code"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 border border-green-500/30 font-mono">
                      {project.platform}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/experience" className="btn-outline border-green-500/50 hover:bg-green-900/30 font-mono">
                &gt; View All Projects
                <FaArrowRight className="inline-flex items-center ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills Preview Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-display font-bold mb-4 text-green-400 font-mono">
                &gt; Skills
              </h2>
              <p className="text-xl max-w-2xl mx-auto font-mono">
                Technical expertise across the full development stack.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Frontend', icon: FaReact, skills: ['React', 'TypeScript', 'Tailwind CSS'] },
                { title: 'Backend', icon: FaNodeJs, skills: ['Node.js', 'Express', 'MongoDB'] },
                { title: 'Mobile', icon: FaMobile, skills: ['React Native', 'Expo', 'Cross-platform'] },
                { title: 'Creative', icon: FaPalette, skills: ['Digital Art', 'UI/UX', 'Illustration'] },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl border border-green-500/20"
                >
                  <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <category.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">{category.title}</h3>
                  <ul className="space-y-1 font-mono text-sm">
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/skills" className="btn-primary bg-green-700 hover:bg-green-600 text-white font-mono">
                &gt; Explore Skills
                <FaArrowRight className="inline-flex items-center ml-2" />
              </Link>
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
              <h2 className="text-4xl font-display font-bold mb-4 text-green-400 font-mono">
                &gt; Let's Collaborate
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto font-mono">
                Ready to bring your ideas to life? Let's build something amazing together.
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

export default Home;