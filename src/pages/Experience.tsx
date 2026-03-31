import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaPalette,
  FaArrowRight
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';
import { SAMPLE_PROJECTS } from '../utils/constants';
import MatrixCodeFlow from '../components/MatrixCodeFlow';

const Experience: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const timelineEvents = [
    {
      id: '1',
      type: 'work',
      title: 'Senior Full-Stack Developer',
      company: 'TechFlow Solutions',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading development of enterprise-scale applications using MERN stack and React Native.',
      achievements: [
        'Built 5+ production applications serving 50,000+ users',
        'Reduced application load time by 60% through optimization',
        'Led a team of 4 developers in React Native mobile development',
        'Implemented CI/CD pipelines reducing deployment time by 75%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'React Native', 'TypeScript', 'AWS'],
      icon: FaBriefcase,
      color: '#10B981'
    },
    {
      id: '2',
      type: 'work',
      title: 'Frontend Developer & UI Designer',
      company: 'Creative Digital Agency',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Specialized in creating beautiful, responsive web applications and custom digital illustrations.',
      achievements: [
        'Delivered 20+ client projects with 98% satisfaction rate',
        'Created brand identities for 8 startups',
        'Improved team workflow efficiency by 40%',
        'Mentored 2 junior developers in React best practices'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite'],
      icon: FaPalette,
      color: '#10B981'
    },
    {
      id: '3',
      type: 'education',
      title: 'Full-Stack Web Development Bootcamp',
      company: 'Tech Academy',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Intensive 12-month program focusing on modern web development technologies and best practices.',
      achievements: [
        'Graduated top 5% of class with honors',
        'Built 15+ projects including 3 full-stack applications',
        'Completed capstone project using MERN stack',
        'Received certification in React and Node.js development'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
      icon: FaGraduationCap,
      color: '#10B981'
    },
    {
      id: '4',
      type: 'work',
      title: 'Junior Web Developer',
      company: 'StartupLab',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'First professional role focusing on frontend development and learning modern React patterns.',
      achievements: [
        'Developed responsive components for 10+ web applications',
        'Improved website performance by 45%',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Learned advanced React patterns and state management'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'Git'],
      icon: FaCode,
      color: '#10B981'
    }
  ];

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: SAMPLE_PROJECTS.length },
    { id: 'fullstack', name: 'Full-Stack', count: SAMPLE_PROJECTS.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile Apps', count: SAMPLE_PROJECTS.filter(p => p.category === 'mobile').length },
    { id: 'frontend', name: 'Frontend', count: SAMPLE_PROJECTS.filter(p => p.category === 'frontend').length },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? SAMPLE_PROJECTS 
    : SAMPLE_PROJECTS.filter(project => project.category === selectedCategory);

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      'React': SiReact,
      'Node.js': SiNodedotjs,
      'MongoDB': SiMongodb,
      'Express': SiExpress,
      'TypeScript': SiTypescript,
    };
    return iconMap[tech] || FaCode;
  };

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
              &gt; My Experience
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-green-300 mb-10 max-w-2xl mx-auto font-mono"
            >
              A journey through professional roles, projects, and achievements that have shaped 
              my expertise in full-stack development and digital creativity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500/30 hidden md:block" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Icon */}
                  <div className="hidden md:flex w-16 h-16 rounded-full flex-shrink-0 items-center justify-center shadow-lg relative z-10 border border-green-500/30 bg-gray-900/80">
                    <event.icon className="w-8 h-8 text-green-400" />
                  </div>
                  
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex-1 card bg-gray-900/80 border border-green-500/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-green-300 mb-1 font-mono">{event.title}</h3>
                        <div className="flex items-center text-green-200 mb-2 font-mono">
                          <FaBriefcase className="w-4 h-4 mr-2" />
                          <span className="font-medium">{event.company}</span>
                          <FaMapMarkerAlt className="w-4 h-4 ml-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-green-200 font-mono">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        <span className="font-medium">{event.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-green-200 mb-6 font-mono">{event.description}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 flex items-center text-green-300 font-mono">
                        <FaTrophy className="w-5 h-5 mr-2 text-green-400" />
                        Key Achievements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {event.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start font-mono">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-green-200">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-green-300 font-mono">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech) => {
                          const IconComponent = getTechIcon(tech);
                          return (
                            <span key={tech} className="tech-badge bg-gray-800 text-green-300 border border-green-500/30 font-mono flex items-center">
                              <IconComponent className="w-4 h-4 mr-1 text-green-400" />
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Featured Projects</h2>
            <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
              A selection of projects that showcase my technical skills, creativity, and 
              problem-solving abilities across different domains.
            </p>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Project Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 font-mono ${
                      selectedCategory === category.id
                        ? 'bg-green-700 text-white shadow-lg border border-green-500/30'
                        : 'bg-gray-900 text-green-300 hover:bg-gray-800 border border-green-500/20 shadow-md'
                    }`}
                  >
                    &gt; {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="card group cursor-pointer bg-gray-900/80 border border-green-500/20"
                      onHoverStart={() => setSelectedProject(project.id)}
                      onHoverEnd={() => setSelectedProject(null)}
                    >
                      {/* Project Image */}
                      <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden relative border border-green-500/20">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExODI3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllZWJiMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                          }}
                        />
                        
                        {/* Overlay on Hover */}
                        <AnimatePresence>
                          {selectedProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-green-900/90 flex items-center justify-center border border-green-500/30"
                            >
                              <div className="flex space-x-4">
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors border border-green-500/30"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <FaExternalLinkAlt className="w-5 h-5 text-green-400" />
                                  </a>
                                )}
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors border border-green-500/30"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <FaGithub className="w-5 h-5 text-green-400" />
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {/* Project Info */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-green-300 group-hover:text-green-400 transition-colors font-mono">
                            {project.title}
                          </h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-300 border border-green-500/30 font-mono">
                            {project.platform}
                          </span>
                        </div>
                        
                        <p className="text-green-200 text-sm line-clamp-3 font-mono">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="tech-badge bg-gray-800 text-green-300 border border-green-500/30 font-mono">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="tech-badge bg-gray-800 text-green-300 border border-green-500/30 font-mono">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        {/* Metrics */}
                        {project.metrics && (
                          <div className="flex items-center text-sm text-green-200 pt-2 border-t border-green-500/20 font-mono">
                            {project.metrics.users && (
                              <div className="flex items-center mr-4">
                                <FaUsers className="w-4 h-4 mr-1 text-green-400" />
                                <span>{project.metrics.users.toLocaleString()} users</span>
                              </div>
                            )}
                            {project.metrics.downloads && (
                              <div className="flex items-center mr-4">
                                <FaRocket className="w-4 h-4 mr-1 text-green-400" />
                                <span>{project.metrics.downloads.toLocaleString()} downloads</span>
                              </div>
                            )}
                            {project.metrics.performance && (
                              <div className="flex items-center">
                                <FaTrophy className="w-4 h-4 mr-1 text-green-400" />
                                <span>{project.metrics.performance}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
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

export default Experience;