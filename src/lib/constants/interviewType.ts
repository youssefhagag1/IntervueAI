import IInterviewType from "@/types/interviewType";
import { Terminal, Handshake, Users, Brain, Shuffle } from "lucide-react";

const interviewTypes: IInterviewType[] = [
  {
    label: "Technical",
    icon: Terminal,
  },
  {
    label: "HR",
    icon: Handshake,
  },
  {
    label: "Behavioral",
    icon: Users,
  },
  {
    label: "Mixed",
    icon: Shuffle,
  },
];

export default interviewTypes;
