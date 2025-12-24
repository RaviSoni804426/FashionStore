import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Freelance', to: 'freelance' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="hero" smooth={true} className="cursor-pointer flex items-center gap-2 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Code2 className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Ravi<span className="text-primary"> Kumar</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            offset={-80}
                            className="text-gray-400 hover:text-white cursor-pointer text-sm font-medium transition-colors hover:tracking-wide duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="contact" smooth={true} className="px-5 py-2 bg-white text-darker font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm">
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-card border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-80}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-white text-lg font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-8 py-3 bg-primary text-white font-semibold rounded-full w-3/4 text-center"
                        >
                            Hire Me
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
