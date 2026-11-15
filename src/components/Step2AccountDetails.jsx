/**
 * Step 2: Account & Workspace Details Component
 *
 * Collects Plan/Account Type, Username, Organization / Workspace name, and Country.
 */

const ACCOUNT_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Free',
    description: 'Perfect for side projects and individual learning.',
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: '$29/mo',
    description: 'Full access to advanced analytics and team sharing.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom',
    description: 'Dedicated infrastructure, SSO, and 24/7 priority support.',
  },
];

export default function Step2AccountDetails({ formData, errors, touched, onChange, onBlur, setFieldValue }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Account &amp; Workspace</h2>
        <p className="text-sm text-slate-500 mt-1">
          Configure your workspace preferences and account credentials.
        </p>
      </div>

      <div className="space-y-5">
        {/* Plan Selection Cards */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Select Your Plan <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ACCOUNT_PLANS.map(plan => {
              const isSelected = formData.plan === plan.id;
              return (
                <button
                  type="button"
                  key={plan.id}
                  onClick={() => setFieldValue('plan', plan.id)}
                  className={`p-3.5 text-left rounded-xl border transition-all text-sm flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-bold text-slate-900">{plan.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {plan.description}
                  </p>
                </button>
              );
            })}
          </div>
          {touched.plan && errors.plan && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.plan}</p>
          )}
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-1">
            Username / Handle <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-medium">@</span>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="janesmith"
              value={formData.username}
              onChange={onChange}
              onBlur={onBlur}
              aria-invalid={touched.username && Boolean(errors.username)}
              aria-describedby={touched.username && errors.username ? 'username-error' : undefined}
              className={`w-full pl-8 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none ${
                touched.username && errors.username
                  ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                  : 'border-slate-300 bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600'
              }`}
            />
          </div>
          {touched.username && errors.username && (
            <p id="username-error" className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.username}
            </p>
          )}
        </div>

        {/* Organization / Workspace Name */}
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-1">
            Organization or Workspace <span className="text-rose-500">*</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            placeholder="Acme Analytics"
            value={formData.organization}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={touched.organization && Boolean(errors.organization)}
            aria-describedby={touched.organization && errors.organization ? 'org-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none ${
              touched.organization && errors.organization
                ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600'
            }`}
          />
          {touched.organization && errors.organization && (
            <p id="org-error" className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.organization}
            </p>
          )}
        </div>

        {/* Country / Region */}
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-1">
            Country / Region <span className="text-rose-500">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={touched.country && Boolean(errors.country)}
            aria-describedby={touched.country && errors.country ? 'country-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none bg-white ${
              touched.country && errors.country
                ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                : 'border-slate-300 hover:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600'
            }`}
          >
            <option value="">Select country...</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
          {touched.country && errors.country && (
            <p id="country-error" className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
