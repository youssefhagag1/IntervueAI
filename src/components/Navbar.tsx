"use client";
import Logo from "./Logo";
import Container from "./Container";
import NavLinks from "./NavLinks";
import StartForFreeButton from "./StartForFreeButton";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import XClose from "./XClose";
import SignIn from "./SignIn";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
function Navbar() {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white h-[70px] py-4 border-b border-gray-200">
        <Container>
          <div className="flex items-center  justify-between">
            <Logo />
            <NavLinks className="hidden md:flex gap-4" />
            <div className="hidden md:flex items-center space-x-4">
              {user?.id ? (
                <UserButton />
              ) : (
                <>
                  <SignIn />
                  <StartForFreeButton />
                </>
              )}
            </div>
            <div className="md:hidden flex items-center smooth ">
              {isSidebarOpen ? (
                <XClose OnToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
              ) : (
                <BurgerMenu OnToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
              )}
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`md:hidden w-full h-[calc(100vh-68px)] fixed left-0 top-[70px] z-50 -translate-x-full ${isSidebarOpen ? "translate-x-0" : ""} transition-transform smooth`}
      >
        <div className="flex flex-col border-e w-80 h-full bg-white p-4">
          <NavLinks className="flex-col gap-4 mb-4" />
          {!user?.id && (
            <>
              <StartForFreeButton />
              <SignIn className="bg-secondary text-white mt-2" />
            </>
          )}
        </div>
        <div className="fixed bottom-0 left-0 p-4 border-t w-80 flex items-center gap-2 ">
          <UserButton />
          <h4 className="font-medium underline">{user?.fullName}</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
