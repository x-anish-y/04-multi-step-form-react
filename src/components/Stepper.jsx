/**
 * Stepper Component — Visual progress indicator for multi-step forms
 *
 * Displays step numbers, labels, completed checks, and active states.
 */

export default function Stepper({ steps, currentStep }) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center justify-between w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <li
              key={step.id}
              className={`relative flex-1 ${
                index !== steps.length - 1 ? 'pr-4 sm:pr-8' : ''
              }`}
            >
              <div className="flex items-center">
                {/* Step Circle / Badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 z-10 ${
                    isCompleted
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                      : isCurrent
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-md shadow-indigo-200'
                      : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>

                {/* Connecting Line (except on last step) */}
                {index !== steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 sm:mx-4 rounded transition-all duration-300 ${
                      isCompleted ? 'bg-emerald-500' : 'bg-slate-200'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Step Title & Subtitle */}
              <div className="mt-2">
                <span
                  className={`block text-xs font-semibold uppercase tracking-wider ${
                    isCurrent
                      ? 'text-indigo-600'
                      : isCompleted
                      ? 'text-emerald-700'
                      : 'text-slate-400'
                  }`}
                >
                  Step {stepNumber}
                </span>
                <span
                  className={`block text-sm font-medium transition-colors ${
                    isCurrent
                      ? 'text-slate-900 font-bold'
                      : isCompleted
                      ? 'text-slate-700'
                      : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
