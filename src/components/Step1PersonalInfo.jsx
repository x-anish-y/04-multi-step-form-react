/**
 * Step 1: Personal Info Component
 *
 * Collects Full Name, Email Address, and Phone Number.
 * Displays inline validation error messages.
 */

export default function Step1PersonalInfo({ formData, errors, touched, onChange, onBlur }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>
        <p className="text-sm text-slate-500 mt-1">
          Please provide your personal contact details so we can verify your profile.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={touched.fullName && Boolean(errors.fullName)}
            aria-describedby={touched.fullName && errors.fullName ? 'fullName-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none ${
              touched.fullName && errors.fullName
                ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600'
            }`}
          />
          {touched.fullName && errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={touched.email && Boolean(errors.email)}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none ${
              touched.email && errors.email
                ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600'
            }`}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 012-3456"
            value={formData.phone}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={touched.phone && Boolean(errors.phone)}
            aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none ${
              touched.phone && errors.phone
                ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600'
            }`}
          />
          {touched.phone && errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.phone}
            </p>
          ) : (
            <p className="mt-1 text-xs text-slate-400">Include country code or at least 10 digits.</p>
          )}
        </div>
      </div>
    </div>
  );
}
