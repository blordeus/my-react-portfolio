import { useState, useEffect } from "react";
import { useRouter } from "next/router";
imp
import data from "../../data/portfolio-updated.json";

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleServicesScroll,
  handleContactScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { showBlog } = data;
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Work");

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const navItems = isBlog
    ? [
        {
          label: "Home",
          action: () => {
            router.push("/");
            close();
          },
        },
        ...(showBlog
          ? [
              {
                label: "Blog",
                action: () => {
                  router.push("/blog");
                  close();
                },
              },
            ]
          : []),
        {
          label: "Contact",
          action: () => {
            window.open("mailto:imaginedbybryan@gmail.com");
            close();
          },
        },
      ]
    : [
        {
          label: "Work",
          action: () => {
            handleWorkScroll?.();
            setActive("Work");
            close();
          },
        },
        {
          label: "About",
          action: () => {
            handleAboutScroll?.();
            setActive("About");
            close();
          },
        },
        {
          label: "Services",
          action: () => {
            handleServicesScroll?.();
            setActive("Services");
            close();
          },
        },
        ...(showBlog
          ? [
              {
                label: "Blog",
                action: () => {
                  router.push("/blog");
                  close();
                },
              },
            ]
          : []),
      ];

  const initials = data.name
    ? data.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "BL";

  return (
    <>
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

        <nav className="hidden lg:flex items-center gap-1 bg-graphite-mid border border-white/10 rounded-full px-2 py-1.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                active === item.label
                  ? "text-cream"
                  : "text-cream/50 hover:text-cream/80"
              }`}
            >
              {item.label}
              {active === item.label && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-px bg-cream rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              handleContactScroll?.();
            }}
            className="hidden lg:flex items-center px-5 py-2 text-sm font-semibold text-graphite-black bg-cream rounded-full hover:bg-cream-accent transition-colors duration-200"
          >
            Let&apos;s Talk
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-cream rounded-full" />
            <span className="block w-4 h-0.5 bg-cream rounded-full" />
            <span className="block w-5 h-0.5 bg-cream rounded-full" />
          </button>
        </div>
      </header>

      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-graphite-mid border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <span className="text-sm font-semibold text-cream/70 tracking-wide">
            Menu
          </span>
          <button
            onClick={close}
            className="focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-cream/70 hover:text-cream transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

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

        <div className="px-8 py-6 border-t border-white/10">
          <button
            onClick={() => {
              handleContactScroll?.();
              close();
            }}
            className="w-full py-3 text-sm font-semibold text-graphite-black bg-cream rounded-full hover:bg-cream-accent transition-colors duration-200"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
