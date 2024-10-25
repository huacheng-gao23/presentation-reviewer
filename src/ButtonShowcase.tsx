const ButtonShowcase = () => {
  return (
    <div className="p-8 space-y-8 bg-surface-100 dark:bg-surface-800 rounded-lg">
      {/* Section: Primary Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-semibold text-surface-900 dark:text-surface-50">Primary Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {/* Primary Default */}
          <button className="px-4 h-10 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium 
            shadow-md hover:shadow-lg transition-all duration-150">
            Primary Button
          </button>

          {/* Primary Large */}
          <button className="px-6 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium 
            shadow-md hover:shadow-lg transition-all duration-150 text-lg">
            Large Button
          </button>

          {/* Primary Small */}
          <button className="px-3 h-8 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium 
            shadow-sm hover:shadow transition-all duration-150 text-sm">
            Small Button
          </button>
        </div>
      </div>

      {/* Section: Secondary Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-semibold text-surface-900 dark:text-surface-50">Secondary Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {/* Secondary Default */}
          <button className="px-4 h-10 border border-surface-300 dark:border-surface-600 
            hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-200 
            rounded-lg font-medium shadow-sm hover:shadow transition-all duration-150">
            Secondary Button
          </button>

          {/* Secondary with Icon */}
          <button className="px-4 h-10 border border-surface-300 dark:border-surface-600 
            hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-200 
            rounded-lg font-medium shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New
          </button>
        </div>
      </div>

      {/* Section: State Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-semibold text-surface-900 dark:text-surface-50">State Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {/* Success Button */}
          <button className="px-4 h-10 bg-success-500 hover:bg-success-600 text-white 
            rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-150">
            Success
          </button>

          {/* Warning Button */}
          <button className="px-4 h-10 bg-warning-500 hover:bg-warning-600 text-white 
            rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-150">
            Warning
          </button>

          {/* Error Button */}
          <button className="px-4 h-10 bg-error-500 hover:bg-error-600 text-white 
            rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-150">
            Error
          </button>

          {/* Disabled Button */}
          <button disabled className="px-4 h-10 bg-surface-200 dark:bg-surface-700 text-surface-400 
            dark:text-surface-500 rounded-lg font-medium cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>

      {/* Section: Gradient Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-semibold text-surface-900 dark:text-surface-50">Gradient Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {/* Gradient Primary */}
          <button className="px-4 h-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 
            hover:to-primary-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg 
            transition-all duration-150">
            Gradient Primary
          </button>

          {/* Gradient Success */}
          <button className="px-4 h-10 bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 
            hover:to-success-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg 
            transition-all duration-150">
            Gradient Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;