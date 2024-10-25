const BenefitsSection = () => {
  const benefits = [
    {
      title: "Accelerate Your Career Growth",
      description: "Clear communicators are 2x more likely to reach leadership positions. Nail every presentation and be recognized as a key player in your organization.",
      icon: (
        <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Command Respect in Every Room",
      description: "Transform from presenter to thought leader. When you anticipate every question, you build instant credibility with executives and stakeholders.",
      icon: (
        <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Turn Complexity into Clarity",
      description: "Stop losing your audience to confusion. Our AI helps you explain complex ideas so clearly that even the most technical concepts become accessible.",
      icon: (
        <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Build a Strong Executive Presence",
      description: "Develop the confidence of a seasoned leader. When you're prepared for every scenario, you naturally command attention and respect.",
      icon: (
        <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-4">
            Transform Your Professional Impact
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Join thousands of <strong>Fortune 500</strong> professionals who've elevated their careers through better presentations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 bg-white dark:bg-surface-800 rounded-xl shadow-lg 
                hover:shadow-xl transition-shadow duration-300 border border-surface-200/50 
                dark:border-surface-700/50"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center 
                rounded-lg bg-success-50 dark:bg-success-900/20">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-surface-900 
                  dark:text-surface-50 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-success-600 dark:text-success-400 font-medium mb-4">
            Used by professionals from companies like
          </p>
          <div className="flex justify-center gap-8 opacity-70">
            {/* Company logos would go here - using placeholder text for now */}
            <span className="text-surface-400 dark:text-surface-500">Google</span>
            <span className="text-surface-400 dark:text-surface-500">Microsoft</span>
            <span className="text-surface-400 dark:text-surface-500">Amazon</span>
            <span className="text-surface-400 dark:text-surface-500">Meta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;