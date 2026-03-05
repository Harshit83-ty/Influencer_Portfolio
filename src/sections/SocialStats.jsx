import { useRef, useEffect } from 'react';
import { socialStats } from '../data/influencerData';

export default function SocialStats() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) rotateX(0)';
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  const platforms = [
    {
      name: 'Instagram',
      data: socialStats.instagram,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      icon: '📷',
      stats: [
        { label: 'Followers', value: formatNumber(socialStats.instagram.followers) },
        { label: 'Engagement', value: `${socialStats.instagram.engagement}%` }
      ]
    },
    {
      name: 'YouTube',
      data: socialStats.youtube,
      gradient: 'from-red-600 to-red-500',
      icon: '🎬',
      stats: [
        { label: 'Subscribers', value: formatNumber(socialStats.youtube.subscribers) },
        { label: 'Total Views', value: formatNumber(socialStats.youtube.totalViews) }
      ]
    },
    {
      name: 'TikTok',
      data: socialStats.tiktok,
      gradient: 'from-black via-gray-800 to-pink-600',
      icon: '🎵',
      stats: [
        { label: 'Followers', value: formatNumber(socialStats.tiktok.followers) },
        { label: 'Total Likes', value: formatNumber(socialStats.tiktok.likes) }
      ]
    },
    {
      name: 'Twitter',
      data: socialStats.twitter,
      gradient: 'from-blue-400 to-blue-600',
      icon: '🐦',
      stats: [
        { label: 'Followers', value: formatNumber(socialStats.twitter.followers) }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-insta-purple via-insta-pink to-insta-orange bg-clip-text text-transparent">
              Social Presence
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Building communities across platforms 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="group relative opacity-0 transition-all duration-700 ease-out"
              style={{
                transform: 'translateY(50px) rotateX(10deg)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${platform.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-300`}></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{platform.icon}</span>
                  {platform.data.verified && (
                    <span className="text-blue-500 text-xl">✓</span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900">{platform.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{platform.data.handle}</p>

                <div className="space-y-3">
                  {platform.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold bg-gradient-to-r from-insta-pink to-insta-purple bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={platform.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block w-full py-3 rounded-xl bg-gradient-to-r ${platform.gradient} text-white text-center font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300`}
                >
                  Follow
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
