"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignUpButton, useUser } from "@clerk/nextjs";

function StartForFreeButton() {
  const { user } = useUser();

  return user?.id ? (
    <Link href="/dashboard">
      <Button className="px-8 py-5 rounded-sm">Start for Free</Button>
    </Link>
  ) : (
    <SignUpButton mode="modal">
      <Button className="px-8 py-5 rounded-sm">Start for Free</Button>
    </SignUpButton>
  );
}

export default StartForFreeButton;
