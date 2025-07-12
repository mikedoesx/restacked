"use client";

import { Container, Flex, IconButton, Link } from "@radix-ui/themes";
import { MenuIcon, XIcon } from "lucide-react";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Container size="4">
        <Flex align="center" justify="between" p="4">
          <Link href="/">
            <Image
              src="/logo-header.png"
              width={280 * 0.8}
              height={60 * 0.8}
              alt="Restack, LLC Logo"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex">
            <Flex align="center" gap="6">
              <NavLinks />
            </Flex>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <IconButton
              variant="ghost"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Flex>

        {/* Mobile menu dropdown */}
        <div
          className={clsx(
            "flex flex-col gap-4 md:hidden mt-2 transition-all duration-300 overflow-hidden",
            menuOpen
              ? "max-h-[500px] opacity-100 px-4 pb-4"
              : "max-h-0 opacity-0",
          )}
        >
          <NavLinks mobile />
        </div>
      </Container>
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const linkClass = clsx(
    "text-muted-foreground hover:text-primary transition-colors",
    mobile && "text-lg px-2",
  );

  return (
    <>
      <Link href="/services" className={linkClass}>
        Services
      </Link>
      <Link href="/work" className={linkClass}>
        Work
      </Link>
      <Link href="/about" className={linkClass}>
        About
      </Link>
      <Link href="/contact" className={linkClass}>
        Contact
      </Link>
    </>
  );
};
