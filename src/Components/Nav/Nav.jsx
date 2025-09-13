import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      const mainContainer = document.querySelector('main');
      const containerScroll = mainContainer ? mainContainer.scrollTop : 0;
      const scrollPosition = Math.max(windowScroll, containerScroll);
      setIsScrolled(scrollPosition > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mainContainer) {
        mainContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const preventTouchMove = (e) => {
      // Allow touch events only within the mobile menu
      const mobileMenu = e.target.closest('[data-mobile-menu]');
      if (!mobileMenu) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (menuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Fix body position to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Add event listeners to prevent all forms of scrolling
      document.addEventListener('touchmove', preventTouchMove, { passive: false });
      
      // Also prevent scrolling on main container
      const mainContainer = document.querySelector('main');
      if (mainContainer) {
        mainContainer.style.overflow = 'hidden';
      }
    } else {
      // Remove all event listeners
      document.removeEventListener('touchmove', preventTouchMove);
      
      // Get stored scroll position
      const scrollY = document.body.style.top;
      
      // Restore body styles
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Restore main container
      const mainContainer = document.querySelector('main');
      if (mainContainer) {
        mainContainer.style.overflow = '';
      }
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup all event listeners
      document.removeEventListener('touchmove', preventTouchMove);
      
      // Restore styles
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      const mainContainer = document.querySelector('main');
      if (mainContainer) {
        mainContainer.style.overflow = '';
      }
    };
  }, [menuOpen]);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "GOKART", href: "/gokart" },
    { name: "REEV", href: "/reev" },
    { name: "ACHIEVEMENTS", href: "/achievements" },
    { name: "TEAM", href: "/team1" },
    { name: "JOIN US", href: "/joinus" },
  ];

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 h-24 grid items-center z-[99999] w-full transition-all duration-500 ${
          location.pathname === "/" 
            ? (isScrolled ? 'bg-black backdrop-blur-md shadow-lg' : 'bg-transparent')
            : 'bg-black backdrop-blur-md shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Desktop Menu - Left Side */}
            <motion.div 
              className="hidden lg:flex items-center space-x-8"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Link 
                    to={item.href}
                    className={`font-semibold text-xl xl:text-base hover:text-red-600 transition-colors duration-300 relative group ${
                      location.pathname === item.href ? 'text-red-600' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Brand Logo - Right */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Link to="/" className="block">
                {!menuOpen && <img 
                  src="/a-removebg-preview.png" 
                  alt="REEV" 
                  className="h-12 w-auto sm:h-20 lg:h-24 transition-transform duration-300 hover:scale-110"
                />}
              </Link>
            </motion.div>

            {/* Mobile Hamburger Menu Button */}
            <motion.button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative z-[10001] flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 hover:bg-red-600/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <motion.span 
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
                animate={{ 
                  backgroundColor: menuOpen ? '#ef4444' : '#ffffff'
                }}
              />
              <motion.span 
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <motion.span 
                className={`bg-white block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
                animate={{ 
                  backgroundColor: menuOpen ? '#ef4444' : '#ffffff'
                }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="lg:hidden w-screen fixed inset-0 z-[10000]"
            data-mobile-menu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="relative flex flex-col justify-center w-screen items-center h-full text-center px-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Logo */}
              <motion.div 
                className="mb-12"
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <img 
                  src="/a-removebg-preview.png" 
                  alt="REEV" 
                  className="h-24 w-auto mx-auto"
                />
              </motion.div>

              {/* Menu Items */}
              <motion.ul className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.1 * index, 
                      ease: [0.34, 1.56, 0.64, 1] 
                    }}
                  >
                    <Link 
                      to={item.href}
                      onClick={handleMenuItemClick}
                      className="text-white font-mono font-bold text-2xl sm:text-3xl hover:text-red-600 transition-all duration-300 transform hover:scale-110 block py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Social Icons */}
              <motion.div 
                className="flex gap-8 mt-16"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {[
                  { icon: "bi-instagram", label: "Instagram" },
                  { icon: "bi-twitter-x", label: "Twitter" },
                  { icon: "bi-github", label: "GitHub" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="text-white hover:text-red-600 transition-all duration-300 transform hover:scale-125"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${social.icon} text-3xl`}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;