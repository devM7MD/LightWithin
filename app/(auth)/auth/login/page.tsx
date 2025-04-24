"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  // Custom color palette
  const colors = {
    lightMint: "#ddffe7",
    mint: "#98d7c2",
    teal: "#167D7F",
    blue: "#29A0B1"
  };
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login submitted successfully', formData);
      setIsSubmitting(false);
      // Here you would typically redirect the user or show a success message
    }, 1500);
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden"
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
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 
              }}
              className="inline-block h-16 w-16 flex items-center justify-center rounded-full text-3xl shadow-lg mb-4 mx-auto"
              style={{ 
                background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})`,
                color: 'white'
              }}
            >
              ✨
            </motion.div>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-3xl font-bold mb-2"
              style={{ color: colors.teal }}
            >
              Welcome Back
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-lg"
              style={{ color: colors.blue }}
            >
              Log in to continue your wellness journey
            </motion.p>
          </div>
          
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="email" className="block mb-2 font-medium" style={{ color: colors.teal }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: errors.email ? '1px solid #f56565' : '1px solid rgba(152, 215, 194, 0.5)',
                  outline: 'none'
                }}
                placeholder="Enter your email"
              />
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm mt-1"
                  style={{ color: '#e53e3e' }}
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="font-medium" style={{ color: colors.teal }}>
                  Password
                </label>
                <a 
                  href="#" 
                  className="text-sm"
                  style={{ color: colors.blue }}
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: errors.password ? '1px solid #f56565' : '1px solid rgba(152, 215, 194, 0.5)',
                  outline: 'none'
                }}
                placeholder="Enter your password"
              />
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm mt-1"
                  style={{ color: '#e53e3e' }}
                >
                  {errors.password}
                </motion.p>
              )}
            </div>
            
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded"
                style={{ 
                  accentColor: colors.teal,
                }}
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm font-medium" style={{ color: colors.teal }}>
                Remember me
              </label>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-white rounded-lg transition-all duration-300 font-medium shadow-lg mt-6 flex justify-center items-center"
              style={{ 
                background: `linear-gradient(to right, ${colors.teal}, ${colors.blue})`,
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </motion.button>
            
            <div className="text-center mt-6">
              <p className="text-sm" style={{ color: colors.teal }}>
                Don't have an account? <a href="/auth/register" className="font-medium" style={{ color: colors.blue }}>Sign up</a>
              </p>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;