import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800">
      {/* Navbar */}
      <nav className="px-6 lg:px-8 h-16 flex items-center justify-between border-b border-surface-200/50 dark:border-surface-700/50 backdrop-blur-sm bg-surface-50/50 dark:bg-surface-900/50 fixed top-0 w-full z-10">
        <div className="font-display font-bold text-xl text-surface-900 dark:text-surface-50">
          PresentAI
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-surface-900 dark:text-surface-50 
            bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
            Bulletproof your presentation
          </h1>

          {/* Subheadline */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-surface-600 dark:text-surface-300 font-display">
              Remove ambiguity and deliver with confidence
            </p>
            <p className="text-lg text-surface-500 dark:text-surface-400">
              Our AI analyzes your presentation, anticipates questions, and helps you 
              prepare for every scenario before you step on stage.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="px-8 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-xl 
              font-medium shadow-lg hover:shadow-xl transition-all duration-150 
              text-lg animate-slide-in">
              Try Now
            </button>
          </div>

          {/* Visual Element */}
          <div className="mt-16 p-8 rounded-2xl bg-surface-100 dark:bg-surface-800 shadow-xl 
            border border-surface-200 dark:border-surface-700">
            <div className="h-64 flex items-center justify-center text-surface-400 dark:text-surface-500">
              <span className="text-sm">Presentation Preview Placeholder</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;