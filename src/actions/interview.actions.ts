"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function startInterviewAction(
  interviewType: string,
  numberQuestions: number,
  jobRole: string,
  company: string,
  difficultyLevel: string,
  context: string,
) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const interview = await prisma.interview.create({
    data: {
      userId: user.id,
      type: interviewType,
      role: jobRole,
      company: company || null,
      difficulty: difficultyLevel,
      questionCount: numberQuestions,
      experienceContext: context || null,
      status: "In Progress",
      startedAt: new Date(),
    },
  });

  return interview.id;
}


