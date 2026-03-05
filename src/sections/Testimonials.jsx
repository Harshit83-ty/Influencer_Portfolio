import { useRef, useEffect } from 'react';
import { brandTestimonials, followerTestimonials } from '../data/influencerData';

export default function Testimonials() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-insta-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-insta-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-insta-pink via-insta-orange to-insta-purple bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by brands and loved by followers 💖
          </p>
        </div>

        {/* Brand Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Brand Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandTestimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="opacity-0 transition-all duration-700 ease-out"
                style={{
                  transform: 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-insta-pink to-insta-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-insta-pink to-insta-purple flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.brandName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{testimonial.brandName}</div>
                        <div className="text-xs text-gray-500">{testimonial.personRole}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follower Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Community Love</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {followerTestimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[brandTestimonials.length + index] = el}
                className="opacity-0 transition-all duration-700 ease-out"
                style={{
                  transform: 'translateY(30px)',
                  transitionDelay: `${(brandTestimonials.length + index) * 100}ms`
                }}
              >
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-insta-orange to-insta-yellow rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-insta-orange to-insta-yellow flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.handle}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{testimonial.comment}</p>
                    <div className="text-xs text-insta-pink font-semibold">{testimonial.platform}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
