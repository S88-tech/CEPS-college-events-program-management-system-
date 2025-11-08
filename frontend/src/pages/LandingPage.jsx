// ===========================================
// ✅ CEPS — Futuristic Landing Page (Final Version)
// ===========================================

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react"; // ✅ icons

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white">

      {/* ✨ Background Glow Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500 opacity-25 blur-3xl rounded-full"></div>

      {/* 🌟 Main Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[90%] max-w-3xl p-10 text-center rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
      >
        {/* 🔹 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to CEPS
        </motion.h1>

        {/* 🔸 Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          The <span className="font-semibold text-yellow-300">Comprehensive Event & Program System</span> — 
          a modern platform to manage <span className="text-pink-300">events, attendance, trainers, and analytics</span> with efficiency and style.
        </motion.p>

        {/* 🔹 Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-3 text-lg font-semibold rounded-full bg-white text-indigo-800 shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-10 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 shadow-md hover:opacity-90 transition duration-300 transform hover:scale-105"
          >
            Signup
          </button>
        </motion.div>
      </motion.div>

      {/* 🔸 Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative z-10 mt-16 max-w-4xl text-center px-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-yellow-300">
          Why Choose CEPS?
        </h2>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
          CEPS revolutionizes event management for educational and corporate institutions. 
          From scheduling events and tracking attendance to allocating trainers and visualizing analytics — 
          CEPS empowers your organization with automation and intelligence.
        </p>

        {/* Feature Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-100">
          <div className="p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">🚀 Smart Automation</h3>
            <p className="text-sm text-gray-200">Save time with AI-driven event and attendance automation.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">🔒 Secure System</h3>
            <p className="text-sm text-gray-200">Industry-grade authentication and encrypted user data protection.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">📊 Advanced Analytics</h3>
            <p className="text-sm text-gray-200">Track performance and attendance insights with real-time analytics.</p>
          </div>
        </div>
      </motion.div>

      {/* ⚡ Footer */}
      <footer className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-4 flex flex-col sm:flex-row items-center justify-between px-6 text-sm text-gray-300">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-yellow-300 font-semibold">CEPS</span> — Smart Event Management System
        </p>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:support@ceps.com"
            className="hover:text-yellow-300 transition duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
