import React from "react";
import { Link } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Data Scientist & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ML Engineer
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            I build intelligent AI systems that solve real-world problems.
            Specializing in <span className="text-white">Data Science ,</span>{" "}
            <span className="text-white">Machine Learning ,</span>
            <span className="text-white">Deep Learning ,</span>{" "}
            <span className="text-white">Computer Vision ,</span> and{" "}
            <span className="text-white">Predictive Analytics</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              className="btn-primary cursor-pointer flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="./raviresume.pdf"
              target="_blank"
              className="btn-outline cursor-pointer flex items-center gap-2"
              rel="noopener noreferrer"
            >
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={assets.ravi}
            alt="Ravi Kumar"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-white/10 relative z-10 bg-card"
          />
          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-card p-4 rounded-xl border border-white/10 shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 font-bold">
                98%
              </div>
              <div>
                <p className="text-gray-400 text-xs">Model Accuracy</p>
                <p className="font-bold text-white">Achieved</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
