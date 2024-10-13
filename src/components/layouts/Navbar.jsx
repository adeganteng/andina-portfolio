import { Moon, Palette, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full flex items-center justify-between px-3 py-3 md:px-24 md:py-5 transition-all duration-200 ${
        scrollPosition > 0
          ? "bg-white/10  backdrop-blur-3xl shadow-md border-b border-b-primary"
          : "bg-transparent"
      }`}
    >
      <Link to={"/"} onClick={() => scrollTo(0, 0)}>
        <h1 className="flex items-center gap-2 font-extrabold tracking-wide text-xl md:text-2xl">
          <Palette size={30} />{" "}
          <p className="flex justify-start items-start text-primary">
            <span className="text-base md:text-lg underline decoration-primary decoration">
              andina
            </span>
            <span>Art</span>
          </p>
        </h1>
      </Link>

      <nav className="flex items-center justify-center gap-3 max-md:hidden ">
        <NavLink
          to={"/"}
          className={`flex flex-col items-center text-base font-medium`}
          onClick={() => scrollTo(0, 0)}
        >
          <span>Home</span>
          {location.pathname === "/" && (
            <hr className="w-[85%] border-2 border-primary" />
          )}
        </NavLink>
        <NavLink
          to={"/about"}
          className={`flex flex-col items-center text-base font-medium`}
          onClick={() => scrollTo(0, 0)}
        >
          <span>About</span>
          {location.pathname === "/about" && (
            <hr className="w-[85%] border-2 border-primary" />
          )}
        </NavLink>
        <NavLink
          onClick={() => scrollTo(0, 0)}
          to={"/project"}
          className={`flex flex-col items-center text-base font-medium`}
        >
          <span>Projects</span>
          {location.pathname === "/project" && (
            <hr className="w-[85%] border-2 border-primary" />
          )}
        </NavLink>
        <NavLink
          onClick={() => scrollTo(0, 0)}
          to={"/contact"}
          className={`flex flex-col items-center text-base font-medium`}
        >
          <span>Contact</span>
          {location.pathname === "/contact" && (
            <hr className="w-[85%] border-2 border-primary" />
          )}
        </NavLink>
      </nav>

      <div className="flex items-center justify-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              size="icon"
              className="bg-transparent rounded-full outline-primary cursor-pointer"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
              <span className="sr-only">Toggle theme</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="transition-all duration-200"
          >
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className={theme === "light" ? "bg-primary/10" : "bg-transparent"}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className={theme === "dark" ? "bg-primary/10" : "bg-transparent"}
            >
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
