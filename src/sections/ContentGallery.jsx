import { useState } from 'react';
import { contentGallery, contentCategories } from '../data/influencerData';

export default function ContentGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentGallery);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredContent(contentGallery);
    } else {
      setFilteredContent(contentGallery.filter(item => item.category === filter));
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  const filters = ['All', ...contentCategories.map(cat => cat.name.split(' ')[0])];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-insta-purple via-insta-pink to-insta-orange bg-clip-text text-transparent">
              Content Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore my best performing content 🔥
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-insta-pink to-insta-purple text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-insta-pink to-insta-purple rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-insta-pink/20 to-insta-purple/20 flex items-center justify-center text-6xl">
                {item.type === 'reel' && '🎥'}
                {item.type === 'video' && '🎬'}
                {item.type === 'post' && '📷'}
              </div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase">
                {item.type}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                
                <div className="flex items-center gap-4 text-white text-sm">
                  <div className="flex items-center gap-1">
                    <span>👁️</span>
                    <span>{formatNumber(item.views)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💖</span>
                    <span>{formatNumber(item.likes)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{formatNumber(item.comments)}</span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-white/70">
                  {item.category}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-insta-pink to-insta-purple text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
            View More Content
          </button>
        </div>
      </div>
    </section>
  );
}
