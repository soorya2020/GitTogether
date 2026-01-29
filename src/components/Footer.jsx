import React from "react";
import { Github, Linkedin, Instagram, Copyright } from "lucide-react";
const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/soorya2020",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/soorya-krishnanunni",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/so0rya_krishnanunni",
      icon: Instagram,
    },
  ];
  return (
    <footer className="footer hidden sm:flex sm:flex-row items-center justify-between bg-base-300 px-6 py-4 shadow-inner">
      <aside className="flex items-center gap-3">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current text-primary"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="text-sm text-gray-600">
          Copyright © {new Date().getFullYear()} — All rights reserved
        </p>
      </aside>

      <div className="flex items-center gap-6">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-xl bg-base-200/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5 text-base-content/60 group-hover:text-primary transition-colors" />
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
