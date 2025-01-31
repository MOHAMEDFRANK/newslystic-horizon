import { Link } from "react-router-dom";
import { ExternalLink, Github, Twitter, Cpu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="bg-[#ea384c] text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Features Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/?category=technology" className="hover:text-gray-300 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Tech News
                </Link>
              </li>
              <li>
                <Link to="/?category=business" className="hover:text-gray-300 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Business Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Have questions? Reach out to us at:
              <br />
              <a href="mailto:contact@newslystic.com" className="hover:text-white">
                contact@newslystic.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Pulse New Horizon by Avodstudio. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm font-mono">
              <Cpu className="w-4 h-4" />
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;