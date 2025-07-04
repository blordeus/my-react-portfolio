import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleServiceScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              {/* <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}
              </h1> */}
              <img
                className="h-6"
                src={`/images/${
                  theme === "dark"
                    ? "my-logo-inverted-01.svg"
                    : "my-logo-01.svg"
                }`}
                onClick={() => router.push("/")}
              ></img>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "sun.svg" : "moon.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleServiceScroll}>Services</Button>
                  {/* <Button onClick={handleAboutScroll}>About</Button> */}
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {/*showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:imaginedbybryan@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )*/}

                  <Button
                    onClick={() =>
                      window.open("mailto:imaginedbybryan@gmail.com")
                    }
                  >
                    Contact
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("https://bryanlordeus.myportfolio.com")
                    }
                  >
                    Other Work
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
                  {/*showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )*/}

                  <Button
                    onClick={() =>
                      window.open("https://bryanlordeus.myportfolio.com")
                    }
                  >
                    Graphics
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
      <div
        className={`mt-10 hidden flex-row items-center justify-between  ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <img
          className="h-12"
          src={`/images/${
            theme === "dark" ? "my-logo-inverted-04.svg" : "my-logo-04.svg"
          }`}
          onClick={() => router.push("/")}
        ></img>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleServiceScroll}>Services</Button>
            {/* <Button onClick={handleAboutScroll}>About</Button> */}
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {/*showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )*/}

            <Button
              onClick={() => window.open("mailto:imaginedbybryan@gmail.com")}
            >
              Contact
            </Button>
            <Button
              onClick={() =>
                window.open("https://bryanlordeus.myportfolio.com")
              }
            >
              Other Work
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt={theme === "dark" ? "Moon icon" : "Sun icon"}
                  width={24}
                  height={24}
                  priority
                />
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {/*showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )*/}

            <Button
              onClick={() => window.open("mailto:imaginedbybryan@gmail.com")}
            >
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
