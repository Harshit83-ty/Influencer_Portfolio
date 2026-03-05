import { collaborationPackages } from '../data/influencerData';

export default function CollaborationPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-insta-yellow via-insta-orange to-insta-pink bg-clip-text text-transparent">
              Collaboration Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect package for your brand 💼
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collaborationPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group/card ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-insta-pink to-insta-purple text-white text-sm font-bold rounded-full shadow-lg z-10">
                  ⭐ POPULAR
                </div>
              )}

              <div className={`relative h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 ${
                pkg.popular ? 'border-insta-pink shadow-2xl' : 'border-gray-200'
              } hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-white/90`}>
                <div className={`absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover/card:opacity-30 transition-all ${
                  pkg.popular ? 'bg-gradient-to-r from-insta-pink to-insta-purple' : 'bg-gradient-to-r from-gray-300 to-gray-400'
                }`}></div>
                <div className="text-6xl mb-4 transform group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300">{pkg.icon}</div>

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-insta-pink to-insta-purple bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                </div>

                <div className="mb-6 p-3 bg-gradient-to-r from-insta-pink/10 to-insta-purple/10 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Best for:</span> {pkg.bestFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block w-full py-3 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-insta-pink to-insta-purple text-white shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-r from-insta-purple/10 via-insta-pink/10 to-insta-orange/10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-gray-600 mb-6">
            Let's discuss your specific requirements and create a tailored solution
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-insta-pink to-insta-purple text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Contact Me 💬
          </a>
        </div>
      </div>
    </section>
  );
}
