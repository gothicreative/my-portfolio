import React from 'react';
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

const Home: React.FC = () => {
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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
                className="text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                Full-Stack {''} 
                <span className="text-gradient">MERN Developer</span>
                {' '}& Digital Artist
              </motion.h1>
              
              <motion.p
                variants={fadeInUpVariants}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              >
                Creating innovative web and mobile solutions with the MERN stack and React Native, 
                enhanced by creative digital artistry that makes every project unique.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/contact" className="btn-primary">
                  Let's Work Together
                  <FaArrowRight className="ml-2" />
                </Link>
                <a 
                  href="HafizAdemCV.pdf" 
                  download="HafizAdemCV.pdf"
                  className="btn-outline inline-flex items-center"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>
              </motion.div>

              {/* Tech Stack Icons */}
              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap gap-4"
              >
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm"
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Matrix Code Flow Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[600px] bg-black rounded-2xl overflow-hidden">
                {/* Matrix Canvas Container */}
                <div className="absolute inset-0">
                  <MatrixCodeFlow />
                </div>
                
                {/* Overlay with tech icons */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="grid grid-cols-2 gap-8 opacity-60">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <FaReact className="w-16 h-16 text-green-400" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <FaMobile className="w-16 h-16 text-green-300" />
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaPalette className="w-16 h-16 text-green-200" />
                    </motion.div>
                    <motion.div
                      animate={{ rotateZ: [0, 360] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                      <FaNodeJs className="w-16 h-16 text-green-500" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Matrix Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-8 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-green-400 font-mono text-lg">Hafiz</span>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-16 left-8 w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-green-300 font-mono text-sm">01</span>
                </motion.div>
              </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of full-stack web applications, mobile apps, and creative projects 
              that demonstrate my expertise in modern development technologies.
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
                whileHover={{ y: -5 }}
                className="card group cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge">
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
                        className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
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
                        className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                        aria-label="View source code"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.platform === 'web' 
                      ? 'bg-blue-100 text-blue-800'
                      : project.platform === 'mobile'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
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
            <Link to="/experience" className="btn-outline">
              View All Projects
              <FaArrowRight className="inline-flex items-center ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specializing in full-stack development with modern technologies and creative design tools.
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <ul className="text-gray-600 space-y-1">
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
            <Link to="/skills" className="btn-primary">
              Explore My Skills
              <FaArrowRight className="inline-flex items-center ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's collaborate on your next web or mobile project. I bring technical expertise 
              and creative vision to every development challenge.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Project
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;