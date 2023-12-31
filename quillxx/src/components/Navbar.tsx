import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex he-14 items-center justify-between">
          <Link href="/" className="flex  z-40 font-semibold">
            <span className="mt-2">Quillxx</span>
          </Link>

          {/* add mobile navbar */}
          <div className=" hidden items-center space-x-4 mt-2 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              > Sign In</LoginLink>
               <RegisterLink
                className={buttonVariants({
                variant: "outline",
                  size: "sm"
                })}
              > Get Started <ArrowRight className="ml-1.5 h-5 w-4"/></RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
