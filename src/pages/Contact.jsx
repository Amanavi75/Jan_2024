import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null); // Success or Error status
  const [loading, setLoading] = useState(false); // Loading state for submission

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus(null); // Reset status
    setLoading(true); // Set loading to true

    const formData = new FormData(event.target);
    formData.append("access_key", "6dedb7c3-a069-4cfc-a71f-b28dc83fee6c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Form submitted successfully!",
        });
        event.target.reset(); // Reset the form
      } else {
        setFormStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="container__wrapper">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg p-6">
          <h1 className="text-2xl font-medium text-gray-800 text-center">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Got questions or comments? Use the form below to get in touch.
          </p>

          {formStatus && (
            <div
              className={`mt-6 p-4 rounded ${
                formStatus.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-00 rounded-md shadow-sm  sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="contact"
                  placeholder="Your phone number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject*
                </label>

                <select
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                  required
                >
                  <option value="" disabled selected>
                    Select a subject
                  </option>
                  <option value="general">Hire</option>
                  <option value="support">Exciting Project</option>
                  <option value="feedback">Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="issue"
                className="block text-sm font-medium text-gray-700"
              >
                Describe your issue*
              </label>
              <textarea
                id="issue"
                name="issue"
                placeholder="Describe your issue"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm resize-none"
                required
              ></textarea>
            </div>
            <div
              class="h-captcha"
              data-captcha="true"
           
              data-onload="myFunction"
              
            
            ></div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 text-white font-medium text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit Form"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
