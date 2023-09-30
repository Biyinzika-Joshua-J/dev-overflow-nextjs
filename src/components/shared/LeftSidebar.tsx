"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section className="background-light900_dark200 light-border shadow-light-300 sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link, idx) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <Link
                key={link.route}
                href={link.route}
                className={`${
                  isActive
                    ? "primary-gradient text-light-900 rounded-lg"
                    : "text-dark300_light900 "
                } flex items-center  gap-4 p-4`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
                  {link.label}
                </p>
              </Link>
            </>
          );
        })}
      </div>
      <div className="pt-10">
      <SignedOut>
          <div className="flex flex-col gap-3">
          
              <Link href={"/sign-in"}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <Image
                    src={'/assets/icons/account.svg'}
                    alt="Login icon"
                    height={20}
                    width={20}
                    className="invert-colors lg:hidden"
                  />
                  <span className="primary-text-gradient max-lg:hidden">Login</span>
                </Button>
              </Link>
            
          
              <Link href={"/sign-up"}>
                <Button className="small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                    src={'/assets/icons/sign-up.svg'}
                    alt="sign up icon"
                    height={20}
                    width={20}
                    className="invert-colors lg:hidden"
                  />
                  <span className="max-lg:hidden">
                    Sign Up
                  </span>
                </Button>
              </Link>
            
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
