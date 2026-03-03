import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio-updated.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { name, showBlog, showResume } = data;

  return (
    <>
      {/* Mobile Menu - Hidden on desktop */}
      <Popover className="block lg:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2">
              <Image
                className="h-6"
                src="/images/my-logo-04.svg"
                alt="My logo"
                width={70}
                height={70}
                priority
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
              />

              <div className="flex items-center">
                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                    alt={!open ? "Open menu" : "Close menu"}
                    width={26}
                    height={26}
                    priority
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md"
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}

                  <Button
                    onClick={() =>
                      window.open("https://bryanlordeus.myportfolio.com")
                    }
                  >
                    Creative Work
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://casestudiesbybryan.myportfolio.com")
                    }
                  >
                    Case Studies
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("mailto:imaginedbybryan@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}

                  <Button
                    onClick={() =>
                      window.open("https://bryanlordeus.myportfolio.com")
                    }
                  >
                    Creative Work
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://casestudiesbybryan.myportfolio.com")
                    }
                  >
                    Case Studies
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("mailto:imaginedbybryan@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop Nav - Hidden on mobile */}
      <div className="mt-10 hidden lg:flex flex-row items-center justify-between top-0 z-10 py-4">
        <Image
          className="h-12"
          src="/images/my-logo-04.svg"
          alt="My logo"
          width={60}
          height={60}
          priority
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        />
        {!isBlog ? (
          <nav className="flex gap-8 items-center">
            <button 
              onClick={handleWorkScroll}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              Work
            </button>
            <button 
              onClick={handleAboutScroll}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              About
            </button>
            {showBlog && (
              <button 
                onClick={() => router.push("/blog")}
                className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
              >
                Blog
              </button>
            )}
            <button 
              onClick={() => window.open("https://bryanlordeus.myportfolio.com")}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              Creative Work
            </button>
            <button 
              onClick={() => window.open("https://casestudiesbybryan.myportfolio.com")}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              Case Studies
            </button>
            <button 
              onClick={() => window.open("mailto:imaginedbybryan@gmail.com")}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        ) : (
          <nav className="flex gap-8 items-center">
            <button 
              onClick={() => router.push("/")}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              Home
            </button>
            {showBlog && (
              <button 
                onClick={() => router.push("/blog")}
                className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
              >
                Blog
              </button>
            )}
            <button 
              onClick={() => window.open("mailto:imaginedbybryan@gmail.com")}
              className="text-base font-medium text-graphite hover:text-slate transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;