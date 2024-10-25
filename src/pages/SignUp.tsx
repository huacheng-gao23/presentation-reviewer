// src/pages/SignUp.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: number;
}

const PRICING_TIERS: Record<string, PricingTier> = {
  free: { name: 'Free', price: 0 },
  pro: { name: 'Pro', price: 29 },
  enterprise: { name: 'Enterprise', price: 299 }
};

const ROLES = [
  'CEO',
  'CTO',
  'Technical Lead',
  'Engineering Manager',
  'Product Manager',
  'Software Engineer',
  'Other'
];

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get selected tier from URL params or default to free
  const searchParams = new URLSearchParams(location.search);
  const selectedTier = searchParams.get('tier') || 'free';
  const pricingTier = PRICING_TIERS[selectedTier];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    role: ROLES[0],
    acceptedTerms: false
  });

  const [step, setStep] = useState(1); // 1 for signup form, 2 for checkout

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to checkout
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log('Processing payment for', pricingTier.name);
    // Navigate to dashboard or success page
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800 p-6">
      <div className="max-w-2xl mx-auto pt-16">
        {step === 1 ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-surface-900 dark:text-surface-50">
                Create your account
              </h1>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                You're signing up for the {pricingTier.name} plan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-surface-800 p-8 rounded-xl shadow-lg">
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-surface-200 dark:border-surface-600 rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      dark:bg-surface-700 dark:text-surface-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-surface-200 dark:border-surface-600 rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      dark:bg-surface-700 dark:text-surface-100"
                  />
                </div>
              </div>

              {/* Email & Password */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-surface-200 dark:border-surface-600 rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      dark:bg-surface-700 dark:text-surface-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-surface-200 dark:border-surface-600 rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      dark:bg-surface-700 dark:text-surface-100"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-surface-200 dark:border-surface-600 rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      dark:bg-surface-700 dark:text-surface-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-surface-200 dark:border-surface-600 rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      dark:bg-surface-700 dark:text-surface-100"
                  >
                    {ROLES.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-surface-300 rounded"
                />
                <label className="ml-2 block text-sm text-surface-700 dark:text-surface-300">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.acceptedTerms}
                className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 
                  text-white rounded-lg font-medium transition-colors duration-150"
              >
                Continue to Checkout
              </button>
            </form>
          </>
        ) : (
          // Checkout Screen
          <div className="bg-white dark:bg-surface-800 p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-surface-900 dark:text-surface-50">
                Complete your purchase
              </h2>
            </div>

            <div className="space-y-6">
              {/* Order Summary */}
              <div className="border-b border-surface-200 dark:border-surface-700 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-surface-600 dark:text-surface-400">Plan</span>
                  <span className="font-medium text-surface-900 dark:text-surface-50">
                    {pricingTier.name}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-surface-600 dark:text-surface-400">Total</span>
                  <span className="font-bold text-surface-900 dark:text-surface-50">
                    ${pricingTier.price}/month
                  </span>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg 
                  font-medium transition-colors duration-150 flex items-center justify-center gap-2"
              >
                {pricingTier.price === 0 ? 'Start Free Plan' : `Pay $${pricingTier.price}/month`}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;