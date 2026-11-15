/**
 * SuccessView Component — Submission Confirmation
 *
 * Shows congratulations message, registration reference ID, and start over option.
 */

export default function SuccessView({ formData, onReset }) {
  const referenceId = `NP-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="text-center py-6 sm:py-10 space-y-5 animate-fade-in">
      {/* Success Badge */}
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Welcome aboard, {formData.fullName}!
        </h2>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Your account has been successfully created. We sent a verification link to{' '}
          <strong className="text-slate-800">{formData.email}</strong>.
        </p>
      </div>

      {/* Confirmation Summary Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-2">
        <div className="flex justify-between">
          <span className="text-slate-500 font-medium">Reference ID:</span>
          <span className="font-mono font-bold text-slate-800">{referenceId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 font-medium">Workspace:</span>
          <span className="font-semibold text-slate-800">{formData.organization}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 font-medium">Plan:</span>
          <span className="font-semibold text-indigo-600 uppercase">{formData.plan}</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        >
          Register Another Account
        </button>
      </div>
    </div>
  );
}
