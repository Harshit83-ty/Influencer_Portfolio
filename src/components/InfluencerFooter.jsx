import { influencerInfo, socialStats, mediaKitStats } from "../data/influencerData";

export default function InfluencerFooter() {

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  const quickLinks = [
    { name: "Home", href: "#hero", icon: "🏠" },
    { name: "Social Stats", href: "#social", icon: "📊" },
    { name: "Collaborations", href: "#collaborations", icon: "🤝" },
    { name: "Gallery", href: "#gallery", icon: "🖼️" },
    { name: "Packages", href: "#packages", icon: "📦" },
    { name: "Contact", href: "#contact", icon: "📧" },
  ];

  return (
    <footer 
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* 3D Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-insta-pink/5 via-insta-purple/5 to-insta-orange/5" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(236,72,153,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>



        {/* Gradient Orbs */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-insta-pink/20 to-insta-purple/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-insta-orange/20 to-insta-yellow/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-insta-purple/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section - 3D Card */}
          <div className="footer-section lg:col-span-2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink to-insta-purple rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
            
            <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              {/* Logo with 3D Effect */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-purple rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-insta-pink via-insta-orange to-insta-purple flex items-center justify-center text-white font-bold text-3xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3d transition-all duration-300">
                    {influencerInfo.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {influencerInfo.name}
                  </h3>
                  <p className="text-insta-pink font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {influencerInfo.handle}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                {influencerInfo.tagline}
              </p>
              
              {/* Stats with 3D Cards */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { value: formatNumber(mediaKitStats.totalFollowers) + '+', label: 'Total Followers', gradient: 'from-insta-pink to-insta-orange', icon: '👥' },
                  { value: mediaKitStats.avgEngagementRate + '%', label: 'Engagement', gradient: 'from-insta-orange to-insta-yellow', icon: '📈' },
                  { value: mediaKitStats.brandsWorkedWith + '+', label: 'Brands', gradient: 'from-insta-purple to-insta-pink', icon: '🏢' }
                ].map((stat, i) => (
                  <div key={i} className="relative group/stat">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-0 group-hover/stat:opacity-50 transition-opacity`} />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent flex items-center gap-1`}>
                        {stat.value}
                        <span className="text-lg opacity-70">{stat.icon}</span>
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links with 3D Animation */}
              <div className="flex gap-4">
                {Object.entries(socialStats).map(([platform, data], i) => (
                  <a
                    key={platform}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/social"
                    style={{ transform: `translateZ(${5 + i * 5}px)` }}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink to-insta-purple rounded-xl blur-lg opacity-0 group-hover/social:opacity-50 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl hover:bg-gradient-to-r hover:from-insta-pink hover:to-insta-purple hover:scale-125 transition-all duration-300 border border-white/20 shadow-xl">
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

          {/* Quick Links - 3D Card */}
          <div className="footer-section relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink to-insta-orange rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
            
            <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl h-full">
              <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-insta-pink to-insta-orange bg-clip-text text-transparent flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                Quick Links
              </h4>
              
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group/link flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
                      style={{ transform: `translateX(${i * 2}px)` }}
                    >
                      <span className="text-xl transform group-hover/link:scale-110 group-hover/link:rotate-12 transition-all">
                        {link.icon}
                      </span>
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-insta-pink to-insta-orange group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <span className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all">→</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Decorative floating icons */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <span className="text-4xl animate-float">✨</span>
              </div>
            </div>
          </div>

          {/* Contact Info - 3D Card */}
          <div className="footer-section relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-insta-orange to-insta-yellow rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
            
            <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl h-full">
              <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-insta-orange to-insta-yellow bg-clip-text text-transparent flex items-center gap-2">
                <span className="text-2xl">📬</span>
                Get In Touch
              </h4>
              
              <ul className="space-y-4">
                <li className="group/contact">
                  <a 
                    href={`mailto:${influencerInfo.email}`} 
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/5"
                  >
                    <span className="relative">
                      <div className="absolute inset-0 bg-insta-pink rounded-full blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity" />
                      <span className="relative text-2xl transform group-hover/contact:scale-110 transition-transform">📧</span>
                    </span>
                    <span className="flex-1">{influencerInfo.email}</span>
                  </a>
                </li>
                
                <li className="group/contact">
                  <div className="flex items-center gap-3 text-gray-400 p-3 rounded-xl hover:bg-white/5 transition-all">
                    <span className="relative">
                      <div className="absolute inset-0 bg-insta-purple rounded-full blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity" />
                      <span className="relative text-2xl">📍</span>
                    </span>
                    <span>{influencerInfo.location}</span>
                  </div>
                </li>
                
                <li className="group/contact">
                  <div className="flex items-center gap-3 text-gray-400 p-3 rounded-xl hover:bg-white/5 transition-all">
                    <span className="relative">
                      <div className="absolute inset-0 bg-insta-orange rounded-full blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity" />
                      <span className="relative text-2xl">💼</span>
                    </span>
                    <span>Open for collaborations</span>
                  </div>
                </li>
              </ul>

              {/* Availability Badge */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-2">
                  <span className="relative">
                    <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
                    <span className="relative w-2 h-2 bg-green-500 rounded-full" />
                  </span>
                  <span className="text-sm text-green-400">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - 3D Card */}
        <div className="footer-section relative group mb-16">
          <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink via-insta-purple to-insta-orange rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-slow" />
          
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-insta-pink/10 via-insta-purple/10 to-insta-orange/10 rounded-3xl p-12 border border-white/20 shadow-2xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {['✨', '💫', '⭐', '🌟'].map((emoji, i) => (
                <div
                  key={i}
                  className="absolute text-4xl opacity-20 animate-float"
                  style={{
                    left: `${10 + i * 25}%`,
                    top: `${Math.random() * 60 + 20}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>

            <div className="relative text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Let's create something amazing together and reach millions of engaged followers!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="relative group/btn"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity animate-pulse" />
                  <div className="relative px-10 py-5 rounded-full bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow text-white font-bold text-lg hover:scale-110 transition-all duration-300 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      Work With Me
                      <span className="text-2xl group-hover/btn:rotate-12 transition-transform">🚀</span>
                    </span>
                  </div>
                </a>

                <a
                  href="#packages"
                  className="relative group/btn"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-insta-purple to-insta-pink rounded-full blur-xl opacity-30 group-hover/btn:opacity-50 transition-opacity" />
                  <div className="relative px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg hover:scale-110 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      View Packages
                      <span className="text-2xl">📦</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span>© {new Date().getFullYear()}</span>
              <span className="w-1 h-1 bg-insta-pink rounded-full" />
              <span className="bg-gradient-to-r from-insta-pink to-insta-orange bg-clip-text text-transparent font-semibold">
                {influencerInfo.name}
              </span>
              <span className="w-1 h-1 bg-insta-pink rounded-full" />
              <span>All rights reserved</span>
              <span className="text-insta-pink animate-pulse">💜</span>
            </p>
            
            <div className="flex gap-8 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Media Kit'].map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className="relative group/link text-gray-400 hover:text-white transition-all"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-insta-pink to-insta-purple group-hover/link:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll to top button */}
          <a
            href="#hero"
            className="absolute -top-12 right-0 group/scroll"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-insta-pink to-insta-purple rounded-full blur-xl opacity-0 group-hover/scroll:opacity-50 transition-opacity" />
            <div className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-insta-pink hover:to-insta-purple transition-all duration-300">
              ↑
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
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
    </footer>
  );
}