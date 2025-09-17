import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCode,
  FaMobile,
  FaPalette,
  FaRocket,
  FaClock,
  FaDollarSign
} from 'react-icons/fa';
import { CONTACT_INFO } from '../utils/constants';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>();

  const projectType = watch('projectType');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with your actual service details
      const result = await emailjs.sendForm(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        formRef.current!,
        'your_public_key' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.');
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: CONTACT_INFO.social.github, label: 'GitHub', color: '#333' },
    { icon: FaLinkedin, url: CONTACT_INFO.social.linkedin, label: 'LinkedIn', color: '#0077B5' },
    { icon: FaTwitter, url: CONTACT_INFO.social.twitter, label: 'Twitter', color: '#1DA1F2' },
    { icon: FaDribbble, url: CONTACT_INFO.social.dribbble, label: 'Dribbble', color: '#EA4C89' },
    { icon: FaBehance, url: CONTACT_INFO.social.behance, label: 'Behance', color: '#1769FF' },
  ];

  const projectTypes = [
    { 
      value: 'web-development', 
      label: 'Web Development', 
      icon: FaCode, 
      description: 'Full-stack web applications using MERN stack',
      color: '#3B82F6'
    },
    { 
      value: 'mobile-app', 
      label: 'Mobile App', 
      icon: FaMobile, 
      description: 'Cross-platform mobile apps with React Native',
      color: '#10B981'
    },
    { 
      value: 'fullstack', 
      label: 'Full-Stack Solution', 
      icon: FaRocket, 
      description: 'Complete web + mobile ecosystem',
      color: '#8B5CF6'
    },
    { 
      value: 'illustration', 
      label: 'Digital Design', 
      icon: FaPalette, 
      description: 'UI/UX design and digital illustrations',
      color: '#F59E0B'
    },
    { 
      value: 'consultation', 
      label: 'Technical Consultation', 
      icon: FaCode, 
      description: 'Architecture review and technical guidance',
      color: '#EF4444'
    }
  ];

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
              Let's{' '}
              <span className="text-gradient">Connect</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Ready to bring your ideas to life? Whether you need a full-stack web application, 
              a mobile app, or creative digital solutions, I'm here to help you succeed.
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Quick Response</h3>
                <p className="text-gray-600 dark:text-gray-300">Usually respond within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Fast Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Agile development with quick iterations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaDollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Fair Pricing</h3>
                <p className="text-gray-600 dark:text-gray-300">Transparent, competitive rates</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Send Me a Message</h2>
              
              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-start"
                >
                  <FaCheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-green-700 dark:text-green-300">{submitMessage}</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-start"
                >
                  <FaExclamationTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-red-700 dark:text-red-300">{submitMessage}</p>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                        errors.name ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                        errors.email ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`relative cursor-pointer p-4 border rounded-lg transition-all ${
                          projectType === type.value
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="radio"
                          {...register('projectType', { required: 'Please select a project type' })}
                          value={type.value}
                          className="sr-only"
                        />
                        <div className="flex items-start">
                          <type.icon 
                            className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" 
                            style={{ color: type.color }}
                          />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{type.label}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{type.description}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                      errors.subject ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Brief description of your project"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="<5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k+">$25,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                      errors.message ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="card">
                <h3 className="text-2xl font-bold mb-6 dark:text-white">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <FaEnvelope className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <FaPhone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                      <div className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Location</div>
                      <div className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                      style={{ backgroundColor: `${social.color}15` }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Current Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">New Projects</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Response Time</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Consultation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Free 30min
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;