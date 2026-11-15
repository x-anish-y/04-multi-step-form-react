/**
 * App.jsx — Multi-Step Registration Form
 *
 * Demonstrates:
 * - 3-step structured wizard (Personal Info -> Workspace -> Review)
 * - State management preserving data across steps
 * - Comprehensive client-side validation per step
 * - Accessible stepper indicator and inline error reporting
 * - Final confirmation state
 */

import { useState } from 'react';
import Stepper from './components/Stepper';
import Step1PersonalInfo from './components/Step1PersonalInfo';
import Step2AccountDetails from './components/Step2AccountDetails';
import Step3Review from './components/Step3Review';
import SuccessView from './components/SuccessView';

const STEPS = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Workspace' },
  { id: 3, title: 'Review & Submit' },
];

const INITIAL_FORM_STATE = {
  // Step 1
  fullName: '',
  email: '',
  phone: '',

  // Step 2
  plan: 'pro',
  username: '',
  organization: '',
  country: '',

  // Step 3
  agreeTerms: false,
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Field change handler
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Direct field setter (for buttons/select cards)
  const setFieldValue = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Mark field as touched on blur
  const handleBlur = e => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  // Validation function
  const validate = () => {
    const errors = {};

    // Step 1 Validation
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (phoneDigits.length < 10) {
      errors.phone = 'Phone number must have at least 10 digits.';
    }

    // Step 2 Validation
    if (!formData.plan) {
      errors.plan = 'Please select a plan.';
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!formData.username.trim()) {
      errors.username = 'Username is required.';
    } else if (!usernameRegex.test(formData.username.trim())) {
      errors.username = 'Username must be 3-20 letters, numbers, or underscores.';
    }

    if (!formData.organization.trim()) {
      errors.organization = 'Organization/Workspace name is required.';
    } else if (formData.organization.trim().length < 2) {
      errors.organization = 'Organization name must be at least 2 characters.';
    }

    if (!formData.country) {
      errors.country = 'Please select a country.';
    }

    // Step 3 Validation
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the Terms and Privacy Policy.';
    }

    return errors;
  };

  const allErrors = validate();

  // Validate step-specific fields
  const isStepValid = step => {
    if (step === 1) {
      return !allErrors.fullName && !allErrors.email && !allErrors.phone;
    }
    if (step === 2) {
      return !allErrors.plan && !allErrors.username && !allErrors.organization && !allErrors.country;
    }
    if (step === 3) {
      return !allErrors.agreeTerms;
    }
    return true;
  };

  // Next step handler
  const handleNext = () => {
    // Touch current step fields
    if (currentStep === 1) {
      setTouched(prev => ({ ...prev, fullName: true, email: true, phone: true }));
    } else if (currentStep === 2) {
      setTouched(prev => ({ ...prev, plan: true, username: true, organization: true, country: true }));
    }

    if (isStepValid(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    }
  };

  // Back step handler
  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Edit shortcut from review step
  const handleEditStep = targetStep => {
    setCurrentStep(targetStep);
  };

  // Submit handler
  const handleSubmit = e => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      plan: true,
      username: true,
      organization: true,
      country: true,
      agreeTerms: true,
    });

    if (isStepValid(1) && isStepValid(2) && isStepValid(3)) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  // Reset form to start again
  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setTouched({});
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto w-full">
        {/* App Title Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold mb-3">
            <span>✨</span> Module 2 Frontend Tasks
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Account Registration
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Complete the form below to configure your workspace.
          </p>
        </header>

        {/* Form Container Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-10">
          {!isSubmitted ? (
            <>
              {/* Stepper Progress */}
              <Stepper steps={STEPS} currentStep={currentStep} />

              {/* Form Content */}
              <form onSubmit={handleSubmit} noValidate>
                {currentStep === 1 && (
                  <Step1PersonalInfo
                    formData={formData}
                    errors={allErrors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}

                {currentStep === 2 && (
                  <Step2AccountDetails
                    formData={formData}
                    errors={allErrors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    setFieldValue={setFieldValue}
                  />
                )}

                {currentStep === 3 && (
                  <Step3Review
                    formData={formData}
                    errors={allErrors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onEditStep={handleEditStep}
                  />
                )}

                {/* Form Navigation Actions */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < STEPS.length ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid(currentStep)}
                      className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all shadow-sm ${
                        isStepValid(currentStep)
                          ? 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md cursor-pointer'
                          : 'bg-indigo-300 cursor-not-allowed opacity-60'
                      }`}
                    >
                      Next Step
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isStepValid(3) || isSubmitting}
                      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all shadow-sm ${
                        isStepValid(3) && !isSubmitting
                          ? 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-md cursor-pointer'
                          : 'bg-emerald-300 cursor-not-allowed opacity-60'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Registration'
                      )}
                    </button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <SuccessView formData={formData} onReset={handleReset} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 mt-8">
        Multi-Step Form · Built with React &amp; Tailwind CSS
      </footer>
    </div>
  );
}
