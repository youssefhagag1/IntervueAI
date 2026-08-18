"use client";
import Text, { Title, SubTitle } from "@/components/Text";
import interviewTypes from "@/lib/constants/interviewType";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Interview() {
  const [interviewType, setInterviewType] = useState<string>("Technical");
  const [numberQuestions, setNumberQuestions] = useState<number>(10);
  const [jobRole, setJobRole] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [errors, setErrors] = useState<{ jobRole?: boolean; company?: boolean }>({});
  const [difficuLtylevel, setDifficultyLevel] = useState<string>("Medium");
  const [context, setContext] = useState<string>("");
  const handleStartInterview = () => {
    if(!jobRole){
       setErrors((prev) => ({ ...prev, jobRole:true }));
    }
    if(!company){
       setErrors((prev) => ({ ...prev, company: true }));
    }
    if(!jobRole || !company) return;
    // startInterviewAction(interviewType , numberQuestions , jobRole , company , difficuLtylevel , context)
  }
  return (
    <div className="p-4 md:p-6 flex flex-col gap-10 border rounded-md border-gray bg-white">
      <div>
        <Title className="text-start mb-2 md:text-4xl text-lg">
          Configure Session
        </Title>
        <Text className="text-gray-500">
          Customize your AI interviewer parameters below to begin.
        </Text>
      </div>
      <div className="space-y-4">
        <Text className="uppercase text-gray-700 font-semibold">
          Interview Type
        </Text>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {interviewTypes.map((type) => {
            const Icon = type.icon;
            return (
              <li
                key={type.label}
                onClick={() => setInterviewType(type.label)}
                className={`flex flex-col items-center justify-center gap-4  p-8 border rounded-md border-gray cursor-pointer group ${interviewType === type.label ? "bg-primary/10 border-primary" : "hover:bg-gray-100"}`}
              >
                <span
                  className={`group-hover:text-primary ${interviewType === type.label && "text-primary"}`}
                >
                  <Icon />
                </span>
                <span>{type.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <form>
        <FieldGroup className="grid md:grid-cols-2 gap-5">
          <Field data-invalid={errors.jobRole}>
            <FieldLabel
              htmlFor="job-role"
              className="uppercase text-gray-700 font-semibold"
            >
              Job Role
            </FieldLabel>
            <Input
              id="job-role"
              placeholder="e.g. Software Engineer"
              value={jobRole}
              onChange={(e) => {
                setJobRole(e.target.value);
                setErrors((prev) => ({ ...prev, jobRole: false }));
              }}
              aria-invalid={errors.jobRole}
              className="input"
            />
          </Field>
          <Field data-invalid={errors.company}>
            <FieldLabel
              htmlFor="company"
              className="uppercase text-gray-700 font-semibold"
            >
              Company
            </FieldLabel>
            <Input
              id="company"
              placeholder="e.g. Google"
              className="input"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                setErrors((prev) => ({ ...prev, company: false }));
              }}
              aria-invalid={errors.company}
              
            />
          </Field>
        </FieldGroup>
      </form>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Text className="uppercase text-gray-700 font-semibold">
            Number Questions
          </Text>
          <ul className="flex gap-2 md:gap-3">
            {[5, 10, 15, 20].map((num) => (
              <li
                key={num}
                onClick={() => setNumberQuestions(num)}
                className={`cursor-pointer flex-1 h-15 flex items-center justify-center text-center border border-gray text-gray rounded-sm ${num === numberQuestions ? "text-white bg-primary" : "hover:bg-primary/10"}`}
              >
                {num}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <Text className="uppercase text-gray-700 font-semibold">
            Difficulty Level
          </Text>
          <ul className="flex gap-1 md:gap-3">
            {["Ease", "Medium", "Hard"].map((level) => (
              <li
                key={level}
                onClick={() => setDifficultyLevel(level)}
                className={`cursor-pointer flex-1 h-15 flex items-center justify-center text-center border border-gray text-gray rounded-sm ${difficuLtylevel === level ? "text-white bg-primary" : "hover:bg-primary/10"}`}
              >
                {level}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-2">
        <Text className="uppercase text-gray-700 font-semibold">
          Prior Experience Context (Optional)
        </Text>
        <textarea
          name=""
          id=""
          rows={6}
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="w-full border p-4 rounded-[6px] caret-primary"
          placeholder="Briefly describe your background or paste your resume highlights here to allow the AI to tailor the interview context..."
        />
      </div>
      <div className="ms-auto gap-x-4 flex items-center">
        <Link
          href="/dashboard"
          className="px-4 py-3 h-12 block rounded bg-white text-black border border-gray hover:bg-gray-100 cursor-pointer"
        >
          Cancle
        </Link>
        <Button
          onClick={handleStartInterview}
          className="px-4 py-6 rounded cursor-pointer"
        >
          <span>Start Interview</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Interview;
