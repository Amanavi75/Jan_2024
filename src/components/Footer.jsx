import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/"
            className="text-xl font-semibold text-white"
          >
            Suman <span className="font-normal text-gray-400">Sourabh</span>
          </Link>

          <nav className="flex flex-wrap justify-center mt-6 gap-x-4 gap-y-2">
            {["Home", "About", "Teams", "Privacy", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Suman Sourabh. All Rights Reserved.
          </p>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[
              { label: "Reddit", icon: "ri-reddit-fill" },
              { label: "Facebook", icon: "ri-facebook-fill" },
              { label: "GitHub", icon: "ri-github-fill" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition"
              >
                <i className={`${social.icon} text-lg`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
