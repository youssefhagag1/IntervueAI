import React from "react";
import StartForFreeButton from "./StartForFreeButton";
import Image from "next/image";
import HeroImage from "../../images/hero.jpg";
import Container from "./Container";
import Text from "@/components/Text";
import SignIn from "./SignIn";
import { auth } from "@clerk/nextjs/server";
async function HeroSection() {
  const { isAuthenticated } = await auth();
  return (
    <div className="py-12 md:h-[calc(100vh-70px)] flex items-center">
      <Container>
        <div className="flex flex-between items-center gap-4 w-full">
          <div className="flex-1 space-y-4">
            <p className="text-2xl lg:text-4xl font-bold">
              Practice Interviwes. <br />
              Get Better. <br />
              Get Hired.
            </p>
            <Text className="max-w-[600px]">
              Experience highly realistic, AI-driven technical interviews.
              Refine your coding and system design skills with precise,
              actionable feedback in a zero-pressure environment.
            </Text>
            <div className="flex gap-4">
              <StartForFreeButton />
              {!isAuthenticated && (
                <SignIn className="bg-white text-dark hover:bg-black hover:text-white smooth" />
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={HeroImage}
              alt="Hero Section Image"
              className="md:w-125"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
