"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link, idx) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <SheetClose asChild key={idx}>
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <Link href={link.route} className={`${isActive?'primary-gradient text-light-900 rounded-lg':'text-dark300_light900 '} flex items-center  gap-4 p-4`}>
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive?'':'invert-colors'}`}
              />
              <p className={`${isActive?'base-bold':'base-medium'}`}>{link.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          width={36}
          height={36}
          alt="menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="background-light900_dark200 border-none"
      >
        <Link href={"/"} className="flex items-center">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow logo"
          />
          <p className="h2-bold  text-dark100_light900 font-spaceGrotesk pl-2">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={"/sign-in"}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Login</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/sign-up"}>
                <Button className="small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  Signup
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
