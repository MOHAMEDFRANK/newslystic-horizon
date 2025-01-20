import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/?category=technology" },
    { label: "Business", href: "/?category=business" },
    { label: "Sports", href: "/?category=sports" },
    { label: "Entertainment", href: "/?category=entertainment" },
  ];

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-4">
      {navItems.map((item) => (
        <li key={item.label}>
          <Link
            to={item.href}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Newslystic
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