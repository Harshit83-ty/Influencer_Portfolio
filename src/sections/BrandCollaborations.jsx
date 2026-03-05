import { brandCollaborations } from '../data/influencerData';

export default function BrandCollaborations() {
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <section id="collaborations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow bg-clip-text text-transparent">
              Brand Collaborations
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading brands to create authentic content 🔥
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brandCollaborations.map((collab, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-insta-pink/10 to-insta-purple/10 rounded-bl-full"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-insta-pink to-insta-purple rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-insta-pink to-insta-purple rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                      {collab.brandName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{collab.brandName}</h3>
                      <span className="text-sm text-gray-500">{collab.category}</span>
                    </div>
                  </div>
                  <span className="text-3xl">{collab.category === 'Beauty' ? '💅' : collab.category === 'Fashion' ? '👠' : '✈️'}</span>
                </div>

                <h4 className="text-xl font-bold mb-3 text-gray-800">
                  {collab.campaignTitle}
                </h4>

                <p className="text-gray-600 mb-6">
                  {collab.description}
                </p>

                <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                  <span>📅</span>
                  <span>{collab.duration}</span>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Deliverables:</h5>
                  <div className="flex flex-wrap gap-2">
                    {collab.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-insta-pink/10 to-insta-purple/10 rounded-full text-sm text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-insta-pink/5 to-insta-purple/5 rounded-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-insta-pink">
                      {formatNumber(collab.results.reach)}
                    </div>
                    <div className="text-xs text-gray-600">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-insta-orange">
                      {formatNumber(collab.results.engagement)}
                    </div>
                    <div className="text-xs text-gray-600">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-insta-purple">
                      {formatNumber(collab.results.impressions)}
                    </div>
                    <div className="text-xs text-gray-600">Impressions</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow text-white font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Let's Collaborate 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
