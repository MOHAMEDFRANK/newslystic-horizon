import { Menu, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.report"), href: "/report" },
  ];

  const languages = [
    { label: "English", code: "en" },
    { label: "Español", code: "es" },
    { label: "Français", code: "fr" },
    { label: "Deutsch", code: "de" },
    { label: "中文", code: "zh" },
  ];

  const NavLinks = () => (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col md:flex-row gap-4 items-center">
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
        <li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {t("nav.language")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-2 w-48">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => i18n.changeLanguage(lang.code)}
                          className={`w-full text-left px-2 py-2 hover:bg-accent rounded-md transition-colors ${
                            i18n.language === lang.code ? "bg-accent" : ""
                          }`}
                        >
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
      </ul>
      {isMobile && <ThemeToggle />}
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
            <div className="flex-1 flex justify-center items-center gap-4">
              <NavLinks />
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;