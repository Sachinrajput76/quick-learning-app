// app/help/page.tsx
import React from "react";

const HelpPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Help Center</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">How to Get Started</h2>
        <p className="text-lg">To get started, follow these steps:</p>
        <ol className="list-decimal ml-8 space-y-2">
          <li>
            Sign up for an account by clicking on the &quot;Sign Up&quot; button
            in the top right corner.
          </li>
          <li>
            Once signed up, log in to your account with your credentials and
            start exploring the features.
          </li>
          <li>
            If you encounter any issues, feel free to visit the &quot;Contact
            Support&quot; section.
          </li>
        </ol>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          <li>
            <p className="font-semibold">How can I reset my password?</p>
            <p>
              You can reset your password by clicking the &quot;Forgot
              Password?&quot; link on the login page. Then follow the instructions
              to reset it.
            </p>
          </li>
          <li>
            <p className="font-semibold">How do I contact support?</p>
            <p>
              If you need help, you can contact our support team by clicking on
              the &quot;Support&quot; link in the footer and submitting your
              request.
            </p>
          </li>
          <li>
            <p className="font-semibold">Can I cancel my subscription?</p>
            <p>
              Yes, you can cancel your subscription at any time by going to your
              account settings and selecting the &quot;Cancel Subscription&quot;
              option.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <p className="text-lg">
          If you still need assistance, please reach out to our support team by
          clicking on the &quot;Contact Support&quot; button below.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-600 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default HelpPage;
