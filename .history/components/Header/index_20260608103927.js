import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import data from "../../data/portfolio-updated.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleServicesScroll, handleContactScroll, isBlog }) => {
  const router = useRouter();
  const { name, showBlog } = data;
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const navItems = isBlog
    ? [
        { label: "Home", action: () => { router.push("/"); close(); } },
        ...(showBlog ? [{ label: "Blog", action: () => { router.push("/blog"); close(); } }] : []),
        { label: "Contact", action: () => { window.open("mailto:imaginedbybryan@gmail.com"); close(); } },
      ]
    : [
        { label: "Work", action: () => { handleWorkScroll?.(); close(); } },
        { label: "About", action: () => { handleAboutScroll?.(); close(); } },
        { label: "Services", action: () => { handleServicesScroll?.(); close(); } },
        { label: "Contact", action: () => { handleContactScroll?.(); close(); } },
        ...(showBlog ? [{ label: "Blog", action: () => { router.push("/blog"); close(); } }] : []),
      ];

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-5 py-5 lg:px-0 lg:py-8">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="focus:outline-none"
          aria-label="Home"
        >
          <Image
            src="/images/my-logo-04.svg"
            alt="Bryan Lordeus logo"
            width={52}
            height={52}
            priority
            className="opacity-90 hover:opacity-100 transition-opacity duration-200 invert"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="text-sm font-medium text-cream/60 hover:text-cream tracking-wide transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-cream rounded-full transition-all duration-200" />
          <span className="block w-4 h-0.5 bg-cream rounded-full transition-all duration-200" />
          <span className="block w-5 h-0.5 bg-cream rounded-full transition-all duration-200" />
        </button>
      </header>

      {/* ── Mobile slide-in overlay ──────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-graphite-mid border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <Image
            src="/images/my-logo-04.svg"
            alt="logo"
            width={36}
            height={36}
            className="invert opacity-80"
          />
          <button onClick={close} className="focus:outline-none" aria-label="Close menu">
            <svg className="w-6 h-6 text-cream/70 hover:text-cream transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 px-4 py-8 flex-1">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={item.action}
              className="text-left px-4 py-4 text-xl font-serif text-cream/80 hover:text-cream hover:bg-white/5 rounded-xl transition-all duration-200"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-8 py-6 border-t border-white/10">
          <p className="text-xs text-cream/30 tracking-widest uppercase">Imagined by Bryan</p>
        </div>
      </div>
    </>
  );
};

export default Header;
