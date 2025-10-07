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
import MatrixCodeFlow from '../components/MatrixCodeFlow';
import Footer from '../components/Footer';

// ⚠️ IMPORTANT: REPLACE THESE PLACEHOLDER VALUES WITH YOUR ACTUAL EMAILJS CREDENTIALS
// 
// To get your EmailJS credentials:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service and note the Service ID
// 3. Create an email template and note the Template ID
//    ⚠️ Make sure you're using the CORRECT Template ID from your dashboard
// 4. Get your Public Key from Account → API Keys
//    ⚠️ Make sure you're using the PUBLIC KEY, NOT the private key
//
// After getting your credentials, replace the placeholder values below:
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_kstr8y9',      // Replace with your actual Service ID\n
  TEMPLATE_ID: 'template_9lv6kne',    // Replace with your actual Template ID (check dashboard)
  PUBLIC_KEY: 'oSHps1N7r2Hja8VD2'       // Replace with your actual PUBLIC Key (NOT private key)
};




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

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' && 
          EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' &&
          EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key') {
        // This means the user hasn't updated the configuration yet
        throw new Error('EmailJS not properly configured. Please update the configuration with your actual EmailJS credentials.');
      }

      // EmailJS configuration
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.');
      reset();
    } catch (error: any) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // More specific error messages
      if (error.message && error.message.includes('EmailJS not properly configured')) {
        setSubmitMessage('EmailJS not properly configured. Please update the configuration with your actual EmailJS credentials.');
      } else if (error.text === 'Unauthorized') {
        setSubmitMessage('EmailJS authentication failed. Please check your Public Key.');
      } else if (error.text === 'Bad Request') {
        setSubmitMessage('EmailJS request failed. Please check your Service ID and Template ID.');
      } else {
        setSubmitMessage('Error: ' + (error.text || error.message || `Unknown error occurred. Please try again or contact me directly at ${CONTACT_INFO.email}`));
      }
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
      color: '#10B981'
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
      color: '#10B981'
    },
    { 
      value: 'illustration', 
      label: 'Digital Design', 
      icon: FaPalette, 
      description: 'UI/UX design and digital illustrations',
      color: '#10B981'
    },
    { 
      value: 'consultation', 
      label: 'Technical Consultation', 
      icon: FaCode, 
      description: 'Architecture review and technical guidance',
      color: '#10B981'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-20 bg-black min-h-screen relative">
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
              className="text-5xl font-bold mb-6 text-green-400 font-mono"
            >
              &gt; Let's Connect
            </motion.h1>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-xl text-green-300 mb-8 max-w-3xl mx-auto leading-relaxed font-mono"
            >
              Ready to bring your ideas to life? Whether you need a full-stack web application, 
              a mobile app, or creative digital solutions, I'm here to help you succeed.
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center p-6 rounded-2xl bg-gray-900/80 border border-green-500/20">
                <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <FaClock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-300 font-mono">Quick Response</h3>
                <p className="text-green-200 font-mono">Usually respond within 24 hours</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gray-900/80 border border-green-500/20">
                <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <FaRocket className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-300 font-mono">Fast Development</h3>
                <p className="text-green-200 font-mono">Agile development with quick iterations</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gray-900/80 border border-green-500/20">
                <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <FaDollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-300 font-mono">Fair Pricing</h3>
                <p className="text-green-200 font-mono">Transparent, competitive rates</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-black/50 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Get In Touch</h2>
              <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Hidden fields for EmailJS template */}
              <input
                type="hidden"
                name="to_email"
                value={CONTACT_INFO.email}
              />
              <input
                type="hidden"
                name="to_name"
                value="Hafiz Adem"
              />
              
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-3300 mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-900 text-green-300 border-green-500/30 font-mono ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="Your full name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 font-mono">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-900 text-green-300 border-green-500/30 font-mono ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="your@email.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 font-mono">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                  Project Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`relative cursor-pointer p-4 border rounded-2xl transition-all font-mono ${
                        projectType === type.value
                          ? 'border-green-500 bg-green-900/20'
                          : 'border-green-500/30 hover:border-green-500/50 bg-gray-900'
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
                          className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-green-400" 
                        />
                        <div>
                          <div className="font-medium text-green-300">{type.label}</div>
                          <div className="text-sm text-green-200">{type.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500 font-mono">{errors.projectType.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                  Subject *
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-900 text-green-300 border-green-500/30 font-mono ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                    placeholder="Brief description of your project"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 font-mono">{errors.subject.message}</p>
                )}
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    Budget Range
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-green-500/30 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-900 text-green-300 font-mono"
                    {...register('budget')}
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
                  <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    Timeline
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-green-500/30 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-900 text-green-300 font-mono"
                    {...register('timeline')}
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
                <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical bg-gray-900 text-green-300 border-green-500/30 font-mono ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    {...register('message', { required: 'Message is required' })}
                  />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-mono">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary bg-green-700 hover:bg-green-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-mono"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    &gt; Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5 mr-2" />
                    &gt; Send Message
                  </>
                )}
              </button>
              
              {/* Submit Status Messages */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-2xl border font-mono ${
                  submitStatus === 'success' 
                    ? 'bg-green-900/30 border-green-500/30 text-green-300' 
                    : 'bg-red-900/30 border-red-500/30 text-red-300'
                }`}>
                  {submitStatus === 'success' ? (
                    <div className="flex items-center">
                      <FaCheckCircle className="w-5 h-5 mr-2" />
                      {submitMessage}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FaExclamationTriangle className="w-5 h-5 mr-2" />
                      {submitMessage}
                    </div>
                  )}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-black/70 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&gt; Contact Information</h2>
              <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
                Prefer direct communication? Here are my contact details and preferred channels.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="card bg-gray-900/80 border border-green-500/20">
                <h3 className="text-2xl font-bold mb-6 text-green-300 font-mono">&gt; Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 rounded-2xl bg-gray-800 border border-green-500/20">
                    <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center mr-4 border border-green-500/30">
                      <FaEnvelope className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-green-300 font-mono">Email</div>
                      <div className="text-green-200 font-mono">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-2xl bg-gray-800 border border-green-500/20">
                    <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center mr-4 border border-green-500/30">
                      <FaPhone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-green-300 font-mono">Phone</div>
                      <div className="text-green-200 font-mono">{CONTACT_INFO.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-2xl bg-gray-800 border border-green-500/20">
                    <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center mr-4 border border-green-500/30">
                      <FaMapMarkerAlt className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-green-300 font-mono">Location</div>
                      <div className="text-green-200 font-mono">{CONTACT_INFO.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card bg-gray-900/80 border border-green-500/20">
                <h3 className="text-xl font-bold mb-4 text-green-300 font-mono">&gt; Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-green-500/30 bg-gray-800"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-green-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card bg-gray-900/80 border border-green-500/20">
                <h3 className="text-xl font-bold mb-4 text-green-300 font-mono">&gt; Current Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-800 border border-green-500/20">
                    <span className="text-green-300 font-mono">New Projects</span>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium border border-green-500/30 font-mono">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-800 border border-green-500/20">
                    <span className="text-green-300 font-mono">Response Time</span>
                    <span className="text-green-200 text-sm font-mono">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-800 border border-green-500/20">
                    <span className="text-green-300 font-mono">Consultation</span>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium border border-green-500/30 font-mono">
                      Free 30min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;