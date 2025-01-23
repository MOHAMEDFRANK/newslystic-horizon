import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Report", href: "/report" },
  ];

  const NavLinks = () => (
    <div className="flex items-center gap-4">
      <ul className="flex flex-col md:flex-row gap-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );

  return (
    <nav className="border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Pulse Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-[#ea384c]">
              Pulse
            </span>
          </Link>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white"
                  size="icon"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-8">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <NavLinks />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;