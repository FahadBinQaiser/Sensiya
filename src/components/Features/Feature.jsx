import React from 'react';

const Features = () => {
  const features = [
    {
      image: '/illustrations/arrow.png',
      title: 'AI-Powered Generation',
      description:
        'Generate stunning designs with simple text prompts. Our AI understands your vision and brings it to life instantly.',
    },
    {
      image: '/illustrations/time.png',
      title: 'Lightning Fast',
      description:
        'Create professional designs in seconds. No more waiting hours for revisions or starting from scratch.',
    },
    {
      image: '/illustrations/idea.png',
      title: 'Smart Color Palettes',
      description:
        'AI-curated color schemes that perfectly match your brand and create visual harmony across all designs.',
    },
    {
      image: '/illustrations/AI.png',
      title: 'Intelligent Layout',
      description:
        'Advanced algorithms ensure perfect composition, spacing, and visual hierarchy in every design.',
    },
    {
      image: '/illustrations/export.png',
      title: 'Multi-Format Export',
      description:
        'Export your designs in any format you need — PNG, SVG, PDF, or directly to your favorite platforms.',
    },
    {
      image: '/illustrations/diamond.png',
      title: 'Style Adaptation',
      description:
        'Transform existing designs into different styles and formats while maintaining brand consistency.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl luckiest-guy md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Powerful features for <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              modern creators
            </span>
          </h2>
          <p className="text-xl space-grotesk text-gray-600 max-w-3xl mx-auto">
            Everything you need to create exceptional designs, <br /> powered by
            cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ image, title, description }, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={image}
                  alt={title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
