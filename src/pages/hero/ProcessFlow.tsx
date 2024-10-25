// src/components/ProcessFlow.tsx

interface Step {
  title: string;
  duration: string;
  description: string;
  icon: JSX.Element;
}

const ProcessFlow = () => {
  const steps: Step[] = [
    {
      title: "Upload",
      duration: "30s",
      description: "Share your slides",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      )
    },
    {
      title: "Analyze",
      duration: "1m",
      description: "AI review",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Review",
      duration: "1m",
      description: "Get feedback",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Export",
      duration: "30s",
      description: "Download feedback",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4 4l-4-4m0 0l-4 4m4-4v12" />
        </svg>
      )
    }
  ];

  // Arrow component with both horizontal and vertical versions
  const Arrow = () => (
    <>
      {/* Horizontal arrow for desktop */}
      <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 translate-x-1/2">
        <svg
          className="w-5 h-5 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      {/* Vertical arrow for mobile */}
      <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2">
        <svg
          className="w-5 h-5 text-primary-500 transform rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </>
  );

  return (
    <div className="w-full py-8">
      <style>{`
        @keyframes pulseAndPause {
          0%, 15%, 100% {
            transform: scale(1);
          }
          7.5% {
            transform: scale(1.1);
          }
        }

        .animate-pulse-sequential-1 {
          animation: pulseAndPause 4s infinite;
        }

        .animate-pulse-sequential-2 {
          animation: pulseAndPause 4s infinite;
          animation-delay: 0.25s;
        }

        .animate-pulse-sequential-3 {
          animation: pulseAndPause 4s infinite;
          animation-delay: 0.5s;
        }

        .animate-pulse-sequential-4 {
          animation: pulseAndPause 4s infinite;
          animation-delay: 0.75s;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-display font-bold text-surface-900 dark:text-surface-50">
            3 Minutes to Better Presentations
          </h2>
        </div>

        <div className="relative px-4 md:px-6">

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className={`w-12 md:w-14 h-12 md:h-14 rounded-full bg-gradient-to-r 
  from-primary-400 to-primary-600 text-white flex items-center justify-center 
  relative z-10 shadow-md mb-3 animate-pulse-sequential-${index + 1}`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-base font-display font-semibold text-surface-900 dark:text-surface-50 mb-1">
                  {step.title}
                </h3>
                <span className="text-sm text-primary-500 dark:text-primary-400 font-medium mb-1">
                  {step.duration}
                </span>
                <p className="text-sm text-surface-600 dark:text-surface-400 max-w-[200px]">
                  {step.description}
                </p>

                {index < steps.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;