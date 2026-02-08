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
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
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
        className="mt-10 hidden flex-row items-center justify-between bg-white top-0 z-10 tablet:flex"
      >
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
          <div className="flex">
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
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}

            <Button
              onClick={() => window.open("mailto:imaginedbybryan@gmail.com")}
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;