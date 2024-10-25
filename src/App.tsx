// App.tsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignUpPage from './pages/SignUp';
import BenefitsSection from './pages/hero/BenefitsSection';
import ProcessFlow from './pages/hero/ProcessFlow';
import AIReviewChecklist from './pages/hero/AIReviewChecklist';

// Hero/Landing Page Component
const HeroPage = () => {
  const navigate = useNavigate();

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
            Bulletproof your Presentation
          </h1>

          {/* Subheadline */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-surface-600 dark:text-surface-300 font-display">
              Remove ambiguity and deliver with confidence
            </p>
            <p className="text-lg text-surface-500 dark:text-surface-400">
              Our AI analyzes your presentation, anticipates questions, and helps you
              prepare for every scenario before you step into the meeting room.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-xl 
                font-medium shadow-lg hover:shadow-xl transition-all duration-150 
                text-lg animate-slide-in">
              Try Now
            </button>
          </div>

          {/* Benefits Section */}
          <BenefitsSection />

          {/* AI Review Checklist */}
          <AIReviewChecklist />

          {/* Visual Element */}
          <div className="mt-16 p-8 rounded-2xl bg-surface-100 dark:bg-surface-800 shadow-xl 
            border border-surface-200 dark:border-surface-700">
            <div className="flex items-center justify-center text-surface-400 dark:text-surface-500">
              {/* Process Flow */}
              <ProcessFlow />
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-xl 
                font-medium shadow-lg hover:shadow-xl transition-all duration-150 
                text-lg animate-slide-in">
              Explore Plans and Try Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Pricing Page Component
const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800">
      {/* Navbar */}
      <nav className="px-6 lg:px-8 h-16 flex items-center justify-between border-b border-surface-200/50 dark:border-surface-700/50 backdrop-blur-sm bg-surface-50/50 dark:bg-surface-900/50 fixed top-0 w-full z-10">
        <div className="font-display font-bold text-xl text-surface-900 dark:text-surface-50">
          PresentAI
        </div>
      </nav>

      {/* Pricing Section */}
      <main className="pt-32 pb-16 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-surface-50">
            Choose Your Plan
          </h1>
          <p className="text-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include our core AI analysis features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-8 space-y-6 hover:shadow-lg transition-shadow duration-150">
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-surface-900 dark:text-surface-50">Free</h3>
              <p className="text-surface-600 dark:text-surface-400">Perfect for trying out</p>
              <div className="text-3xl font-bold text-surface-900 dark:text-surface-50">$0</div>
            </div>
            <ul className="space-y-4 text-surface-600 dark:text-surface-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3 presentations / month
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic AI analysis
              </li>
            </ul>
            <button
              onClick={() => navigate('/signup?tier=free')}
              className="w-full h-12 border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 rounded-lg font-medium transition-colors duration-150">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="rounded-xl border border-primary-500 bg-surface-50 dark:bg-surface-800 p-8 space-y-6 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-surface-900 dark:text-surface-50">Pro</h3>
              <p className="text-surface-600 dark:text-surface-400">For regular presenters</p>
              <div className="text-3xl font-bold text-surface-900 dark:text-surface-50">$29</div>
            </div>
            <ul className="space-y-4 text-surface-600 dark:text-surface-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited presentations
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced AI analysis
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom templates
              </li>
            </ul>
            <button
              onClick={() => navigate('/signup?tier=pro')}
              className="w-full h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-150">
              Start Trial
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-8 space-y-6 hover:shadow-lg transition-shadow duration-150">
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-surface-900 dark:text-surface-50">Enterprise</h3>
              <p className="text-surface-600 dark:text-surface-400">For teams & companies</p>
              <div className="text-3xl font-bold text-surface-900 dark:text-surface-50">Custom</div>
            </div>
            <ul className="space-y-4 text-surface-600 dark:text-surface-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <button
              onClick={() => navigate('/signup?tier=enterprise')}
              className="w-full h-12 border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 rounded-lg font-medium transition-colors duration-150">
              Contact Sales
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component with Router
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;