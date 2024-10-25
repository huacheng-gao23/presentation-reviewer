// src/components/AIReviewChecklist.tsx

interface ReviewCategory {
  title: string;
  benefit: string;
  icon: JSX.Element;
  color: string;
}

const AIReviewChecklist = () => {
  const categories: ReviewCategory[] = [
    {
      title: "Structure",
      benefit: "Perfect flow and logical progression",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Clarity",
      benefit: "Crystal clear messaging that resonates",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Impact",
      benefit: "Memorable takeaways that drive action",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-red-500 to-red-600"
    },
    {
      title: "Engagement",
      benefit: "Keep your audience captivated",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      title: "Data Visualization",
      benefit: "Charts and graphs that tell stories",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Delivery Tips",
      benefit: "Present with confidence and authority",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="py-16 px-6 lg:px-8 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-surface-50">
            Comprehensive AI Review
          </h2>
          <p className="mt-4 text-lg text-surface-600 dark:text-surface-400">
            Every aspect of your presentation analyzed and improved
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-surface-800 rounded-xl 
                shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} 
                opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative flex items-start space-x-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} 
                  text-white flex items-center justify-center`}>
                  {category.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-surface-900 
                    dark:text-surface-50 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-surface-600 dark:text-surface-400">
                    {category.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIReviewChecklist;