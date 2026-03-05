import { useRef, useEffect, useState } from 'react';
import { useGsap } from "../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { influencerInfo, socialStats } from "../data/influencerData";

gsap.registerPlugin(ScrollTrigger);

export default function InfluencerContact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);

  useEffect(() => {
    const particles = ['✨', '💫', '⭐', '🌟', '💖', '🎀', '💌', '📧', '🤝', '💼'];
    const container = sectionRef.current;
    
    particles.forEach((emoji, i) => {
      const particle = document.createElement('div');
      particle.className = 'contact-particle';
      particle.textContent = emoji;
      particle.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 30 + 20}px;
        opacity: 0.2;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        filter: blur(${Math.random() * 2}px);
        z-index: 1;
      `;
      container.appendChild(particle);
      
      gsap.to(particle, {
        y: `+=${Math.random() * 120 - 60}`,
        x: `+=${Math.random() * 120 - 60}`,
        rotation: `+=${Math.random() * 360}`,
        scale: 1 + Math.random() * 0.5,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

    // Cleanup function
    return () => {
      const particles = container.querySelectorAll('.contact-particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);

  useGsap(() => {
    // Form entrance animation with 3D effect
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      },
      y: 100,
      rotationY: 15,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Animate contact cards with stagger
    gsap.from('.contact-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1.2)"
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateMessage = async () => {
    if (!formData.name || !formData.brand) {
      alert('Please fill in your name and brand first!');
      return;
    }

    setIsGenerating(true);

    try {
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3008/api/generate-message'
        : '/.netlify/functions/generate-message';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          subject: `Brand collaboration with ${formData.brand}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, message: data.message }));
        
        // Animate the message field when AI generates
        gsap.to('.message-field', {
          scale: 1.02,
          backgroundColor: 'rgba(236,72,153,0.05)',
          duration: 0.3,
          yoyo: true,
          repeat: 1
        });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3008/api/contact'
        : '/.netlify/functions/contact';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Collaboration Inquiry from ${formData.brand}`,
          message: `Brand: ${formData.brand}\nBudget: ${formData.budget}\n\n${formData.message}`
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus(null);
          setFormData({ name: '', email: '', brand: '', budget: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50" />
        
        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(236,72,153,0.2) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-insta-pink/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-insta-purple/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-insta-orange/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with 3D Animation */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 -top-20 flex justify-center pointer-events-none">
            <div className="relative">
              {['💌', '🤝', '✨', '💼'].map((emoji, i) => (
                <div
                  key={i}
                  className="absolute text-5xl animate-float"
                  style={{
                    left: `${-150 + i * 100}px`,
                    top: `${Math.sin(i * 90) * 50}px`,
                    animationDelay: `${i * 0.5}s`,
                    opacity: 0.3
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-full blur-2xl opacity-30 animate-pulse" />
            
            <div className="relative">
              <div className="text-7xl mb-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                💌
              </div>
            </div>
          </div>

          <h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow bg-clip-text text-transparent relative">
              Let's Collaborate!
              <div className="absolute -inset-4 bg-gradient-to-r from-insta-pink/20 to-insta-yellow/20 rounded-full blur-2xl -z-10" />
            </span>
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ transform: 'translateZ(20px)' }}
          >
            Ready to create amazing content together? Let's discuss your brand campaign! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6" style={{ transformStyle: 'preserve-3d' }}>
            {/* Profile Card with 3D Effect */}
            <div className="contact-card relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-500" />
              
              <div 
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl overflow-hidden"
                style={{ transform: 'translateZ(20px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink to-insta-purple rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-insta-pink to-insta-purple flex items-center justify-center text-4xl font-bold text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-3d transition-all duration-300">
                      {influencerInfo.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {influencerInfo.name}
                    </h3>
                    <p className="text-insta-pink font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      {influencerInfo.handle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{influencerInfo.bio}</p>
              </div>
            </div>

            {/* Contact Details with 3D Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="contact-card relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink to-insta-orange rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all" />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-insta-pink to-insta-orange rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-insta-pink to-insta-orange flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-all">
                        📧
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-semibold text-gray-800">{influencerInfo.email}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-insta-purple to-insta-blue rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all" />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-insta-purple to-insta-blue rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-insta-purple to-insta-blue flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-all">
                        📍
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-semibold text-gray-800">{influencerInfo.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links with 3D Effect */}
            <div className="contact-card relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink to-insta-purple rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all" />
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl">
                <h4 className="font-bold text-gray-800 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {Object.entries(socialStats).map(([platform, data], i) => (
                    <a
                      key={platform}
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/icon"
                      style={{ transform: `translateZ(${10 + i * 5}px)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-insta-pink to-insta-purple rounded-xl blur-lg opacity-0 group-hover/icon:opacity-50 transition-opacity" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-insta-pink to-insta-purple flex items-center justify-center text-2xl shadow-lg transform group-hover/icon:scale-110 group-hover/icon:rotate-12 transition-all duration-300">
                        {platform === 'instagram' && '📷'}
                        {platform === 'youtube' && '🎬'}
                        {platform === 'tiktok' && '🎵'}
                        {platform === 'twitter' && '🐦'}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Work With Me Card */}
            <div className="contact-card relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all" />
              <div className="relative bg-gradient-to-r from-insta-pink/5 via-insta-orange/5 to-insta-yellow/5 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl">
                <h4 className="font-bold text-gray-800 mb-4">Why Work With Me?</h4>
                <div className="space-y-4">
                  {[
                    { icon: '✨', text: 'Authentic & engaging content' },
                    { icon: '📈', text: 'High engagement rates' },
                    { icon: '🎯', text: 'Targeted audience reach' },
                    { icon: '⚡', text: 'Fast turnaround time' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-insta-pink to-insta-purple rounded-full blur-md opacity-0 group-hover/item:opacity-50 transition-opacity" />
                        <span className="relative text-2xl transform group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} style={{ transformStyle: 'preserve-3d' }}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-500" />
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {submitStatus === 'success' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-3xl z-20 animate-scale-in">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="relative text-7xl animate-bounce">🎉</div>
                      </div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">I'll get back to you within 24 hours!</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-3xl z-20 animate-scale-in">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="relative text-7xl animate-pulse">😕</div>
                      </div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                        Oops!
                      </h3>
                      <p className="text-gray-600">Please try again</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-insta-pink to-insta-purple bg-clip-text text-transparent">
                    Send Collaboration Inquiry
                  </h3>

                  {[
                    { label: 'Your Name', name: 'name', type: 'text', icon: '👤' },
                    { label: 'Email Address', name: 'email', type: 'email', icon: '📧' },
                    { label: 'Brand/Company', name: 'brand', type: 'text', icon: '🏢' }
                  ].map((field, index) => (
                    <div key={field.name} className="relative group/field">
                      <div className={`absolute -inset-1 bg-gradient-to-r from-insta-pink to-insta-purple rounded-xl blur opacity-0 ${hoveredField === field.name ? 'opacity-50' : 'group-hover/field:opacity-30'} transition-all`} />
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <span className="text-lg">{field.icon}</span>
                          {field.label} *
                        </label>
                        <input
                          ref={el => inputRefs.current[index] = el}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={() => setHoveredField(field.name)}
                          onBlur={() => setHoveredField(null)}
                          className="w-full p-4 bg-gray-50/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:border-insta-pink focus:ring-2 focus:ring-insta-pink/20 transition-all hover:bg-white/80 text-gray-800 placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                  ))}

                  {/* Budget Field */}
                  <div className="relative group/field">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-insta-pink to-insta-purple rounded-xl blur opacity-0 ${hoveredField === 'budget' ? 'opacity-50' : 'group-hover/field:opacity-30'} transition-all`} />
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-lg">💰</span>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setHoveredField('budget')}
                        onBlur={() => setHoveredField(null)}
                        className="w-full p-4 bg-gray-50/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:border-insta-pink focus:ring-2 focus:ring-insta-pink/20 transition-all hover:bg-white/80 text-gray-800"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹25K">Under ₹25K</option>
                        <option value="₹25K - ₹50K">₹25K - ₹50K</option>
                        <option value="₹50K - ₹1L">₹50K - ₹1L</option>
                        <option value="₹1L - ₹2L">₹1L - ₹2L</option>
                        <option value="Above ₹2L">Above ₹2L</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative group/field">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-insta-pink to-insta-purple rounded-xl blur opacity-0 ${hoveredField === 'message' ? 'opacity-50' : 'group-hover/field:opacity-30'} transition-all`} />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <span className="text-lg">📝</span>
                          Campaign Details *
                        </label>
                        <button
                          type="button"
                          onClick={handleGenerateMessage}
                          disabled={isGenerating}
                          className="relative group/btn"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink to-insta-purple rounded-lg blur opacity-0 group-hover/btn:opacity-50 transition-opacity" />
                          <div className="relative px-4 py-2 bg-gradient-to-r from-insta-pink to-insta-purple text-white text-sm font-semibold rounded-lg hover:scale-105 transition-transform disabled:opacity-50 flex items-center gap-2">
                            {isGenerating ? (
                              <>
                                <span className="animate-spin">✨</span>
                                Generating...
                              </>
                            ) : (
                              <>
                                <span>✨</span>
                                AI Generate
                              </>
                            )}
                          </div>
                        </button>
                      </div>
                      <textarea
                        ref={el => inputRefs.current[3] = el}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setHoveredField('message')}
                        onBlur={() => setHoveredField(null)}
                        rows="5"
                        className="message-field w-full p-4 bg-gray-50/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:border-insta-pink focus:ring-2 focus:ring-insta-pink/20 transition-all hover:bg-white/80 resize-none text-gray-800 placeholder-gray-400"
                        placeholder="Tell me about your campaign, goals, and deliverables..."
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full group/submit"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-xl blur-xl opacity-50 group-hover/submit:opacity-75 transition-opacity animate-pulse" />
                    <div className="relative w-full py-5 rounded-xl bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow text-white font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/submit:translate-y-0 transition-transform duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">📤</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Inquiry
                            <span className="text-2xl group-hover/submit:rotate-12 transition-transform">🚀</span>
                          </>
                        )}
                      </span>
                    </div>
                  </button>

                  <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    I'll respond within 24 hours!
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .group:hover .rotate-3d {
          transform: rotateX(10deg) rotateY(10deg) scale(1.1);
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}