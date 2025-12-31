import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', message: '' });

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: '', message: '' });

  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const templateParams = {
    from_name: formRef.current.from_name.value,
    from_email: formRef.current.from_email.value,
    message: formRef.current.message.value,
  };

  // 1️⃣ Send mail to YOU (Admin)
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      'template_o4jewgj', // Admin notification
      templateParams
    )
    .then(() => {
      // 2️⃣ Send confirmation mail to USER
      return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        'template_dlv0s1z', // User confirmation
        templateParams
      );
    })
    .then(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! Please check your email.',
      });
      formRef.current.reset();
    })
    .catch((error) => {
      setLoading(false);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
      console.error('EmailJS Error:', error);
    });
};



    return (
        <section id="contact" className="section-padding bg-dark relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-card rounded-lg border border-white/5 text-primary">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location</p>
                                    <p className="text-gray-200">Bengaluru, Karnataka</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-card rounded-lg border border-white/5 text-primary">
                                    <Phone />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Phone</p>
                                    <p className="text-gray-200">+91 9608710567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-card rounded-lg border border-white/5 text-primary">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</p>
                                    <p className="text-gray-200">kumarsoniravi705@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-white font-bold mb-4">Connect with me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Linkedin />, link: "https://www.linkedin.com/in/ravi-soni123" },
                                    { icon: <Github />, link: "https://github.com/ravisoni804426" },
                                    { icon: <Code />, link: "https://www.kaggle.com/ravikumarsonis" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-card rounded-lg border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl relative">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Please enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        required
                                        className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full btn-primary flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                    {!loading && <Send className="w-4 h-4" />}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/5 mt-20 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Ravi Kumar. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;