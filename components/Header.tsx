"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const LoginButton = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-slate-900 w-full sm:w-auto">Login</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href="/voter-auth">Login as a voter</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#">Login as a Party</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#">Login as Election Commission</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-30">
      <section className="flex justify-between items-center p-5 md:p-0 md:pl-5 bg-zinc-50 ">
        <Logo />
        <div className="hidden md:block relative w-1/3">
          <div className="w-full h-[76px] bg-header-pattern bg-contain relative"></div>
          <div className="bg-gradient-to-r from-zinc-50 to-transparent w-[180px] h-[76px] absolute inset-0">

          </div>
        </div>
      </section>
      <nav className="bg-orange-400 text-orange-50 flex items-center h-16 px-6 text-lg relative">
        <div className="flex-1 flex items-center">
          <button
            onClick={toggleMenu}
            className="sm:hidden focus:outline-none mr-4"
          >
            {isMenuOpen ? (
              <IoClose className="text-orange-50 h-8 w-8" />
            ) : (
              <IoMenu className="text-orange-50 h-8 w-8" />
            )}
          </button>
          <div className="hidden sm:flex items-center gap-8">
            <a href="/" className="hover:text-black hover:scale-110">
              Home
            </a>
            <a href="/aboutus" className="hover:text-black hover:scale-110">
              About us
            </a>
            <a href="#" className="hover:text-black hover:scale-110">
              Contact Us
            </a>
            <a href="#" className="hover:text-black hover:scale-110">
              Complaints
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center">
          {!isSmallScreen &&
            (isLoggedIn ? (
              <div className="flex items-center gap-8">
                <a href="#" className="hover:text-black">
                  Dashboard
                </a>
                <a href="#" className="hover:text-black">
                  Logout
                </a>
              </div>
            ) : (
              <LoginButton />
            ))}
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-50 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        ref={menuRef}
        className={`fixed left-0 top-0 w-[85%] h-full bg-orange-400 z-50 p-6 overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 mt-16">
          <a href="#" className="hover:text-black" onClick={closeMenu}>
            Home
          </a>
          <a href="#" className="hover:text-black" onClick={closeMenu}>
            About us
          </a>
          <a href="#" className="hover:text-black" onClick={closeMenu}>
            Contact Us
          </a>
          <a href="#" className="hover:text-black" onClick={closeMenu}>
            Complaints
          </a>
          {isLoggedIn ? (
            <>
              <a href="#" className="hover:text-black" onClick={closeMenu}>
                Dashboard
              </a>
              <a href="#" className="hover:text-black" onClick={closeMenu}>
                Logout
              </a>
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
