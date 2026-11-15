/**
 * Step 3: Review & Confirmation Component
 *
 * Displays a summary of all entered details before submission.
 * Includes inline edit shortcuts to earlier steps and terms acceptance.
 */

export default function Step3Review({ formData, errors, touched, onChange, onBlur, onEditStep }) {
  const planNames = {
    starter: 'Starter (Free)',
    pro: 'Pro ($29/mo)',
    enterprise: 'Enterprise (Custom)',
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Review &amp; Submit</h2>
        <p className="text-sm text-slate-500 mt-1">
          Please confirm your details before completing registration.
        </p>
      </div>

      <div className="space-y-4">
        {/* Personal Info Summary Card */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              Personal Information
            </h3>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline focus:outline-none"
            >
              Edit
            </button>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div>
              <dt className="text-slate-400 font-medium">Full Name</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">{formData.fullName || '—'}</dd>
            </div>
            <div>
              <dt className="text-slate-400 font-medium">Email Address</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">{formData.email || '—'}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-slate-400 font-medium">Phone</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">{formData.phone || '—'}</dd>
            </div>
          </dl>
        </div>

        {/* Account & Workspace Summary Card */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              Account &amp; Workspace
            </h3>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline focus:outline-none"
            >
              Edit
            </button>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div>
              <dt className="text-slate-400 font-medium">Selected Plan</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">
                {planNames[formData.plan] || formData.plan || '—'}
              </dd>
            </div>
            <div>
              <dt className="text-slate-400 font-medium">Username</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">@{formData.username || '—'}</dd>
            </div>
            <div>
              <dt className="text-slate-400 font-medium">Organization</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">{formData.organization || '—'}</dd>
            </div>
            <div>
              <dt className="text-slate-400 font-medium">Country / Region</dt>
              <dd className="text-slate-800 font-semibold mt-0.5">{formData.country || '—'}</dd>
            </div>
          </dl>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={onChange}
              onBlur={onBlur}
              aria-invalid={touched.agreeTerms && Boolean(errors.agreeTerms)}
              className="mt-0.5 w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I agree to the{' '}
              <a href="#terms" className="text-indigo-600 font-medium underline">
                Terms of Service
              </a>{' '}
              and acknowledge the{' '}
              <a href="#privacy" className="text-indigo-600 font-medium underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {touched.agreeTerms && errors.agreeTerms && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.agreeTerms}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
