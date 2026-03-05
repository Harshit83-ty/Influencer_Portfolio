import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { influencerInfo, socialStats, mediaKitStats } from '../data/influencerData';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function InfluencerHero() {
  const heroRef = useRef(null);
  const [followerCount, setFollowerCount] = useState(0);
  const profileRef = useRef(null);
  const statsRef = useRef([]);
  const particlesRef = useRef([]);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Enhanced follower count animation with 3D effect
    gsap.to({ val: 0 }, {
      val: mediaKitStats.totalFollowers,
      duration: 3,
      ease: "expo.out",
      onUpdate: function() {
        setFollowerCount(Math.floor(this.targets()[0].val));
      }
    });

    // 3D Parallax effect on profile
    gsap.to(profileRef.current, {
      y: 30,
      rotationX: 5,
      rotationY: 5,
      scale: 1.02,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Floating particles with 3D rotation
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: `+=${Math.random() * 100 - 50}`,
        x: `+=${Math.random() * 100 - 50}`,
        rotationX: `+=${Math.random() * 360}`,
        rotationY: `+=${Math.random() * 360}`,
        scale: 1 + Math.random() * 0.5,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1
      });
    });

    // Floating elements animation
    floatingElementsRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: `+=${Math.random() * 30 - 15}`,
        rotation: `+=${Math.random() * 10}`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2
      });
    });

    // Stats cards 3D hover effect setup
    statsRef.current.forEach((stat, i) => {
      stat.addEventListener('mousemove', (e) => {
        const rect = stat.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(stat, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(heroRef.current, {
          scale: 1 - self.progress * 0.1,
          opacity: 1 - self.progress * 0.3,
          duration: 0.1
        });
      }
    });

  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 3D Layered Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-insta-purple via-insta-pink to-insta-orange opacity-90" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-insta-pink/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-insta-purple/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-insta-yellow/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </div>

      {/* 3D Particles Grid */}
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-50px)' }}>
        <div className="absolute inset-0 grid grid-cols-6 gap-8 p-8 opacity-30">
          {[...Array(36)].map((_, i) => (
            <div
              key={`particle-${i}`}
              ref={el => particlesRef.current[i] = el}
              className="w-2 h-2 bg-white rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                transform: `translateZ(${Math.random() * 100}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={`floating-${i}`}
            ref={el => floatingElementsRef.current[i] = el}
            className="absolute text-4xl"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${5 + (i * 8)}%`,
              transform: `translateZ(${50 + i * 30}px) rotateX(${i * 45}deg) rotateY(${i * 45}deg)`,
              opacity: 0.2,
              filter: 'blur(1px)'
            }}
          >
            {['✨', '💫', '⭐', '🌟', '💖', '🎀', '🌸', '✨'][i]}
          </div>
        ))}
      </div>

      <div 
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Profile Image with 3D Ring Animation */}
        <div ref={profileRef} className="relative inline-block mb-8" style={{ transformStyle: 'preserve-3d' }}>
          {/* 3D Rotating Rings */}
          <div className="absolute -inset-8">
            <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin-slow" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '16s' }} />
          </div>

          {/* Glowing effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-insta-yellow via-insta-pink to-insta-purple rounded-full blur-2xl opacity-75 animate-pulse-slow" />
          
          {/* 3D Profile Image */}
          <div 
            className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl"
            style={{
              transform: 'rotateX(5deg) rotateY(5deg) translateZ(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 2px rgba(255,255,255,0.1)'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-insta-pink to-insta-purple flex items-center justify-center text-7xl font-bold text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              {influencerInfo.name.charAt(0)}
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-insta-pink to-insta-purple rounded-full p-3 shadow-xl animate-float">
            <span className="text-3xl filter drop-shadow-lg">✨</span>
          </div>
          <div className="absolute -top-2 -left-2 bg-gradient-to-br from-insta-yellow to-insta-orange rounded-full p-2 shadow-xl animate-float animation-delay-1000">
            <span className="text-2xl filter drop-shadow-lg">⭐</span>
          </div>
        </div>

        {/* Name with 3D Text Effect */}
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{
            textShadow: '0 20px 40px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)',
            transform: 'translateZ(30px)'
          }}
        >
          <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            {influencerInfo.name}
          </span>
        </h1>

        <p 
          className="text-3xl md:text-4xl text-white/90 mb-6 font-medium"
          style={{ transform: 'translateZ(20px)' }}
        >
          {influencerInfo.handle}
        </p>

        {/* Tagline with animation */}
        <p 
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
          style={{ transform: 'translateZ(10px)' }}
        >
          {influencerInfo.tagline}
        </p>

        {/* Stats with 3D Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-12" style={{ transformStyle: 'preserve-3d' }}>
          {[
            { value: formatNumber(followerCount) + '+', label: 'Total Followers', icon: '👥' },
            { value: mediaKitStats.avgEngagementRate + '%', label: 'Engagement Rate', icon: '📊' },
            { value: mediaKitStats.brandsWorkedWith + '+', label: 'Brand Collaborations', icon: '🤝' }
          ].map((stat, i) => (
            <div
              key={i}
              ref={el => statsRef.current[i] = el}
              className="relative group cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${20 + i * 10}px)`
              }}
            >
              {/* 3D Card Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl -translate-z-2 blur-lg group-hover:blur-xl transition-all" />
              
              {/* Main Card */}
              <div className="relative bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="text-4xl font-bold text-white flex items-center gap-2">
                  {stat.value}
                  <span className="text-2xl opacity-70">{stat.icon}</span>
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
                
                {/* 3D Edge Effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/30" style={{ transform: 'translateZ(2px)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTAs with 3D Effects */}
        <div className="flex flex-wrap justify-center gap-4" style={{ transformStyle: 'preserve-3d' }}>
          <a
            href="#contact"
            className="relative group px-10 py-5 bg-white font-bold rounded-full text-lg hover:scale-110 transition-all duration-300 shadow-2xl overflow-hidden"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-insta-pink to-insta-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-insta-pink group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              Work With Me
              <span className="text-2xl group-hover:rotate-12 transition-transform">🚀</span>
            </span>
          </a>
          
          <a
            href="#collaborations"
            className="relative group px-10 py-5 bg-white/20 backdrop-blur-md text-white font-bold rounded-full text-lg hover:scale-110 transition-all duration-300 border-2 border-white/50 overflow-hidden"
            style={{ transform: 'translateZ(30px)' }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>

        {/* Social Links with 3D Floating Effect */}
        <div className="flex justify-center gap-6 mt-16" style={{ transformStyle: 'preserve-3d' }}>
          {Object.entries(socialStats).map(([platform, data], i) => (
            <a
              key={platform}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              style={{ transform: `translateZ(${20 + i * 5}px)` }}
            >
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-3xl hover:scale-125 transition-all duration-300 border border-white/30 hover:border-white/60">
                {platform === 'instagram' && '📸'}
                {platform === 'youtube' && '📹'}
                {platform === 'tiktok' && '🎵'}
                {platform === 'twitter' && '🐦'}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <div className="relative">
          <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
          <div className="relative w-8 h-14 border-2 border-white/50 rounded-full flex justify-center overflow-hidden backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        @keyframes scroll {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { transform: translateY(20px); opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .-translate-z-2 {
          transform: translateZ(-2px);
        }
      `}</style>
    </section>
  );
}