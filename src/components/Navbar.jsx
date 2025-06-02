import { cn } from '@/lib/utils';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const navItems = [
  { key: "nav_home", href: "#hero" },
  { key: "nav_about", href: "#about" },
  { key: "nav_skills", href: "#skills" },
  { key: "nav_projects", href: "#projects" },
  { key: "nav_contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Calcular altura del navbar
    const nav = document.querySelector('nav');
    if (nav) setNavbarHeight(nav.offsetHeight);
    
    // Tema guardado
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled 
            ? "py-2 bg-background/90 backdrop-blur-lg shadow-sm border-b border-border/50" 
            : "py-4 bg-background/80 backdrop-blur-md"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10">
              <span className="text-glow text-foreground">Miriam</span> Portfolio
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {t(key)}
              </a>
            ))}

            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-background text-foreground border border-border rounded-md px-3 py-1 cursor-pointer text-sm"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="ca">Català</option>
              <option value="fr">Français</option>
            </select>


            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label={theme === 'light' ? t('switch_to_dark') : t('switch_to_light')}
            >
              {theme === 'light' ? <Moon size={18} className='text-blue-500 dark:text-blue-400' /> : <Sun size={18} className='text-yellow-500 dark:text-yellow-300' />}
            </button>
          </div>

          {/* mobile nav */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label={theme === 'light' ? t('switch_to_dark') : t('switch_to_light')}
            >
              {theme === 'light' ? <Moon size={20} className='text-blue-500 dark:text-blue-400' /> : <Sun size={20} className='text-yellow-500 dark:text-yellow-300' />}
            </button>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground"
              aria-label={isMenuOpen ? t('close_menu') : t('open_menu')}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8 w-full px-6 py-10">
          {navItems.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="w-full text-center py-3 text-2xl font-medium text-foreground/90 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(key)}
            </a>
          ))}
           
            <select
              value={i18n.language}
              onChange={(e) => {
                changeLanguage(e.target.value);
                setIsMenuOpen(false);
              }}
              className="w-full bg-background text-foreground border-2 border-border/50 rounded-lg px-4 py-3 cursor-pointer text-center"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="ca">Català</option>
              <option value="fr">Français</option>
            </select>
        </div>
      </div>
    </>
  );
};