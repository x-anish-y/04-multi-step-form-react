# Multi-Step Registration Form — React

A modern, responsive 3-step registration form with client-side validation, progress indicator, state persistence, review screen, and success view. Built with **React** and **Tailwind CSS**.

![Screenshot Placeholder](https://via.placeholder.com/1200x630?text=Multi-Step+Form+React)

## ✨ Features

- **3-Step Wizard Workflow**:
  - **Step 1: Personal Info** — Full Name, Email, and Phone number validation
  - **Step 2: Workspace & Account** — Plan selection cards (Starter, Pro, Enterprise), username handle, organization, and country dropdown
  - **Step 3: Review & Submit** — Summarized overview cards with quick "Edit" jump links back to prior steps and terms acceptance
- **Form State Persistence** — User answers remain intact when navigating backward and forward
- **Real-Time & Blur Validation** — Inline error messages, red input borders, accessibility attributes (`aria-invalid`, `aria-describedby`), and blocked "Next" until step validation passes
- **Visual Progress Indicator** — Responsive stepper showing completed checkmarks, current step badge, and upcoming steps
- **Submission Confirmation** — Animated success screen with reference ID and reset option
- **Keyboard Navigation & Accessibility** — Semantic inputs, labels, and visible focus rings

## 🛠 Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) v4

## 🚀 Setup & Run

```bash
# Clone the repository
git clone https://github.com/x-anish-y/04-multi-step-form-react.git
cd 04-multi-step-form-react

# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## 📁 Project Structure

```
04-multi-step-form-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Stepper.jsx               # Stepper progress indicator
│   │   ├── Step1PersonalInfo.jsx     # Step 1 inputs
│   │   ├── Step2AccountDetails.jsx   # Step 2 inputs & plan picker
│   │   ├── Step3Review.jsx           # Step 3 summary & terms
│   │   └── SuccessView.jsx           # Post-submit success screen
│   ├── App.jsx                       # Main state orchestration & validation
│   ├── index.css                     # Tailwind CSS entry
│   └── main.jsx                      # App entry point
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## 📝 License

This project is for educational/portfolio purposes.
