import React from "react";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

import {
  Bot,
  Dot,
  BriefcaseBusiness,
  ClipboardList,
  Building2,
  Gauge,
} from "lucide-react";
import { SubTitle, Title } from "@/components/Text";
import { Button } from "@/components/ui/button";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
const timer = () => {};
const handleEndInterview = () => {};

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  const { id } = await params;

  const interview = await prisma.interview.findFirst({
    where: {
      id,
      user: {
        clerkUserId: userId,
      },
    },
  });

  if (!interview) {
    return <div>Interview not found</div>;
  }

  console.log("Interview data:", interview);

  return (
    <div>
      <div className="bg-white px-6 py-4 border-b border-gray-200 fixed top-17.5 z-10 le:left-15 lg:left-64 w-[calc(100%-60px)] lg:w-[calc(100%-16rem)]">
        <div className="flex justify-between mb-4 ">
          <div className="flex gap-4 items-center ">
            <span className="bg-primary-container  text-primary rounded w-12 h-12 md:w-14 md:h-14  flex items-center justify-center">
              <Bot size={36} />
            </span>
            <div className="flex flex-col gap-1">
              <Title className="text-lg md:text-xl text-start font-bold capitalize">
                {interview.role} Interview
              </Title>
              <div className="gap-4 items-center hidden md:flex">
                <div className="flex items-center bg-gray-300 px-4 rounded-full text-sm h-5">
                  <Dot size={32} className="text-primary" />
                  <h6 className="flex items-center  text-sm whitespace-nowrap">
                    AI Interviewer <Dot size={32} className="text-green-500" />{" "}
                    Active
                  </h6>
                </div>
                <div className="flex  items-center bg-gray-300 px-4 rounded-full h-5">
                  <Dot size={32} className="text-gray-500" />
                  <p className="text-sm">{timer() || "00:00"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="border-destructive bg-transparent text-destructive rounded-sm px-8 py-2 hover:bg-destructive/10 cursor-pointer">
              End Interview
            </Button>
          </div>
        </div>
        <div>
          <Progress value={56} className="w-full">
            <ProgressLabel>Qustions 3 of 20</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1"></div>
        <div className="hidden py-2 md:block w-64 fixed top-53 h-[calc(100vh-48px-70px)] right-0 border-l space-y-4 border-gray-200 bg-white">
          {interview?.experienceContext && (
            <div className="mb-5 border-b border-gray-200 p-5 space-y-2">
              <SubTitle>Interview Context</SubTitle>
              <p className="text-sm text-gray-500">
                {interview?.experienceContext}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-4 p-5 pt-0 border-b border-gray-200">
            <div className="flex gap-4 ">
              <span className="text-primary bg-primary-container w-10 h-10 flex items-center justify-center">
                <BriefcaseBusiness size={20} />
              </span>
              <div className="flex flex-col">
                <h6 className="text-sm font-medium uppercase">Target Role</h6>
                <p className="text-sm text-gray-500">{interview.role}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-primary bg-primary-container w-10 h-10 flex items-center justify-center">
                <ClipboardList size={20} />
              </span>
              <div className="flex flex-col">
                <h6 className="text-sm font-medium uppercase">Type</h6>
                <p className="text-sm text-gray-500">{interview.type}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-primary bg-primary-container w-10 h-10 flex items-center justify-center">
                <Building2 size={20} />
              </span>
              <div className="flex flex-col">
                <h6 className="text-sm font-medium uppercase">Company</h6>
                <p className="text-sm text-gray-500">{interview.company}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-primary bg-primary-container w-10 h-10 flex items-center justify-center">
                <Gauge size={20} />
              </span>
              <div className="flex flex-col">
                <h6 className="text-sm font-medium uppercase">Difficulty</h6>
                <p className="text-sm text-gray-500">{interview.difficulty}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-5 pt-0 ">
            <div className="flex gap-4">
              <span className="text-primary bg-primary-container w-10 h-10 flex items-center justify-center">
                <Gauge size={20} />
              </span>
              <div className="flex flex-col">
                <h6 className="text-sm font-medium uppercase">Status</h6>
                <p className="text-sm text-gray-500">{interview.status}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-primary bg-primary-container w-10 h-10 flex items-center justify-center">
                <Gauge size={20} />
              </span>
              <div className="flex flex-col">
                <h6 className="text-sm font-medium uppercase">Date</h6>
                <p className="text-sm text-gray-500">
                  {format(
                    new Date(interview.startedAt),
                    "dd MMM yyyy, hh:mm a",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
