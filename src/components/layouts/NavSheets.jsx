import { BookUser, Home, Menu, Palette, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const NavSheets = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <Sheet key={"bottom"} open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={`fixed md:hidden bottom-4 right-4 `}>
          <Menu className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="flex flex-col gap-4 w-[98%] m-auto rounded-md md:hidden"
      >
        <SheetHeader>
          <SheetTitle className="text-center">Navigation</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="w-full flex justify-evenly items-center ">
          <NavLink
            to={"/"}
            className={`flex flex-col justify-center items-center ${
              pathname === "/" && "text-primary"
            }`}
            onClick={() => {
              setOpen(false);
              scrollTo(0, 0);
            }}
          >
            <Home size={24} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to={"/about"}
            className={`flex flex-col justify-center items-center ${
              pathname === "/about" && "text-primary"
            }`}
            onClick={() => {
              setOpen(false);
              scrollTo(0, 0);
            }}
          >
            <BookUser size={24} />
            <span>About</span>
          </NavLink>
          <NavLink
            to={"/project"}
            className={`flex flex-col justify-center items-center ${
              pathname === "/project" && "text-primary"
            }`}
            onClick={() => {
              setOpen(false);
              scrollTo(0, 0);
            }}
          >
            <Palette size={24} />
            <span>Projects</span>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={`flex flex-col justify-center items-center ${
              pathname === "/contact" && "text-primary"
            }`}
            onClick={() => {
              setOpen(false);
              scrollTo(0, 0);
            }}
          >
            <PhoneCall size={24} />
            <span>Contact</span>
          </NavLink>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheets;
