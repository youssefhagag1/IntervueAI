import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils';
import { SignInButton } from "@clerk/nextjs";

function SignIn({ className }: { className?: string }) {
  return (
    <SignInButton mode="modal">
      <Button
        className={cn(
          "bg-transparent text-secondary py-5 rounded-sm hover:bg-secondary/20 smooth",
          className,
        )}
        variant="ghost"
      >
        Login
      </Button>
    </SignInButton>
  );
}

export default SignIn;
