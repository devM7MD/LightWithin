"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  // const navigate = useNavigate();
  
  const colors = {
    lightMint: "#ddffe7",
    mint: "#98d7c2",
    teal: "#167D7F",
    blue: "#29A0B1"
  };
  
  const steps = [
    {
      title: "Welcome to LightWithin",
      subtitle: "Shine with in",
      content: "Here you can get full psychological support through LightWithIn to live a healthy psychological life.",
      image: "/LightWithin-logo.png",
      icon: "✨"
    },
    {
      title: "Live in a healthy mental state",
      subtitle: "Shine with in",
      content: "Created by a talented team to help those suffering from depression and chronic mental illnesses.",
      image: "/business.png",
      icon: "✨"
    },
    {
      title: "24/7 care and support",
      subtitle: "Shine with in",
      content: "Get full support available 24/7 to help you achieve positivity and happiness.",
      image: "/computer.png",
      icon: "✨"
    },
    {
      title: "Tools of all kinds to help",
      subtitle: "Shine with in",
      content: "Tools in various forms designed specifically to monitor and treat your mental health in a fun and comfortable way.",
      image: "/tools.png",
      icon: "✨"
    },
    {
      title: "Frindly and easy to use",
      subtitle: "Shine with in",
      content: "It is designed to have a comfortable user interface and a unique user experience that is easy to use for everyone!",
      image: "/ui.png",
      icon: "✨"
    },
  ];
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to signup page when on the last step
      navigate('/register');
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: colors.mint }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              background: colors.lightMint,
              opacity: 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: 'float infinite ease-in-out'
            }}
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="tutorial p-8 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden"
        style={{ 
          background: 'rgba(221, 255, 231, 0.85)', 
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(221, 255, 231, 0.5)`
        }}
      >
        {/* Glassmorphism glow effects */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" 
             style={{ background: colors.blue, filter: 'blur(40px)', opacity: 0.3 }}></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full -ml-20 -mb-20" 
             style={{ background: colors.teal, filter: 'blur(40px)', opacity: 0.3 }}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Progress bar */}
          <div className="mb-8 relative">
            <div className="h-2 rounded-full w-full" style={{ background: 'rgba(152, 215, 194, 0.3)' }}>
              <motion.div 
                className="h-full rounded-full"
                style={{ 
                  background: `linear-gradient(to right, ${colors.teal}, ${colors.blue})` 
                }}
                initial={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((_, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: currentStep === index ? 1.2 : 1,
                    y: currentStep === index ? -5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center h-8 w-8 rounded-full"
                  style={{
                    background: index === currentStep ? colors.teal : 
                               index < currentStep ? colors.blue : 'rgba(221, 255, 231, 0.8)',
                    color: index <= currentStep ? 'white' : colors.teal,
                    boxShadow: index === currentStep ? '0 4px 12px rgba(22, 125, 127, 0.5)' : 'none'
                  }}
                >
                  {index < currentStep ? '✓' : index + 1}
                </motion.div>
              ))}
            </div>
          </div>
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="step"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-16 w-16 flex items-center justify-center rounded-full text-3xl shadow-lg mb-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})`,
                    color: 'white'
                  }}
                >
                  {steps[currentStep].icon}
                </motion.div>
              </div>
              
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-3xl font-bold mb-2 text-center"
                style={{ color: colors.teal }}
              >
                {steps[currentStep].title}
              </motion.h2>
              
              {steps[currentStep].subtitle && (
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-xl text-center mb-4"
                  style={{ color: colors.blue }}
                >
                  {steps[currentStep].subtitle}
                </motion.h3>
              )}
              
              {steps[currentStep].image && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex justify-center mb-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full transform scale-90"
                         style={{ background: colors.teal, filter: 'blur(20px)', opacity: 0.3 }}></div>
                    <img 
                      src={steps[currentStep].image} 
                      alt="LightWithin Logo" 
                      className="w-48 object-contain h-36 relative z-10"
                      style={{ filter: 'drop-shadow(0 8px 16px rgba(22, 125, 127, 0.3))' }}
                    />
                  </div>
                </motion.div>
              )}
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-lg text-center leading-relaxed mb-10"
                style={{ color: colors.teal }}
              >
                {steps[currentStep].content}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between items-center mt-6">
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: currentStep > 0 ? 1 : 0,
                x: currentStep > 0 ? 0 : -20
              }}
              transition={{ duration: 0.3 }}
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-5 py-3 rounded-lg transition-all duration-300 font-medium flex items-center ${
                currentStep === 0 ? 'invisible' : 'visible'
              }`}
              style={{ 
                background: 'rgba(41, 160, 177, 0.2)',
                color: colors.teal
              }}
              whileHover={{ 
                background: 'rgba(41, 160, 177, 0.3)'
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="px-7 py-3 text-white rounded-lg transition-all duration-300 font-medium flex items-center shadow-lg"
              style={{ 
                background: `linear-gradient(to right, ${colors.teal}, ${colors.blue})` 
              }}
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Continue
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <a href="/auth/register">Get Started</a>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tutorial;