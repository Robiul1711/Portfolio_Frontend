import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialSidebar = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Robiul1711", 
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/robiulislam-dev/", 
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:robiulislam.1711@gmail.com", 
    },
  ];

  // Default styles for the fixed Desktop Sidebar
  const defaultSidebarClasses = "fixed bottom-5 left-4 hidden md:flex flex-col items-center gap-6 z-50";
  
  // If a custom className is passed (like from Mobile Menu), we use that.
  // Otherwise, we use the default fixed sidebar styles.
  const containerClasses = className || defaultSidebarClasses;

  // Determine orientation based on className (if custom class is present, assume horizontal/flexible)
  const listOrientation = className ? "flex-row" : "flex-col";

  return (
    <div className={containerClasses}>
      <ul className={`flex ${listOrientation} gap-6 list-none p-0 m-0`}>
        {socialLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 block p-2"
              aria-label={item.name}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      

    </div>
  );
};

export default SocialSidebar;