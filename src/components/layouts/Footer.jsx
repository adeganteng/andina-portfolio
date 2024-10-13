import { Link } from "react-router-dom";
import {
  Instagram,
  Mail,
  Palette,
  Film,
  Phone,
  LocateIcon,
} from "lucide-react";
import { useTheme } from "../theme-provider";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`border-t-2 border-primary py-12 ${
        theme === "dark" ? "bg-primary-foreground" : "bg-secondary-foreground"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link>
              <h2 className="text-3xl flex gap-3 font-bold w-full">
                <Palette size={30} />{" "}
                <span className="text-primary">andinaArt</span>
              </h2>
            </Link>
            <p className={`text-slate-500`}>
              Graphic Designer and Painter with 1 years of experience
            </p>
            <div className="flex space-x-4">
              <Link
                to={"https://www.tiktok.com/@andinaa.aul?_t=8qKoZ9Gzayu&_r=1"}
                target="_blank"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <Film size={24} />
              </Link>

              <Link
                to={
                  "https://www.instagram.com/andinaauliaaa/profilecard/?igsh=MWJvb3ZoNjZsNDl1OA=="
                }
                target="_blank"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="flex items-center space-x-2">
              <Mail size={18} />
              <span>andinaaulia1808@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+62 815 4834 1428</span>
            </p>
            <p className="flex items-center space-x-2">
              <LocateIcon size={18} />
              <span>Ngemplak, Boyolali, Jawa Tengah</span>
            </p>
          </div>
        </div>
        <div className="border-t border-primary mt-8 pt-8 text-center">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} andinaArt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
