import IPrecisionTools from "@/types/precisionTools";
import {
  MessagesSquare,
  Lightbulb,
  ChartNoAxesColumnIncreasing,
  Languages,
} from "lucide-react";

const precisionTools: IPrecisionTools[] = [
  {
    icon: MessagesSquare,
    title: "AI-Powered Interviews",
    description:
      "Engage in dynamic, conversational technical screens that adapt to your responses.",
  },
  {
    icon: Lightbulb,
    title: "Instant Feedback",
    description:
      "Receive granular, line-by-line critiques on your code efficiency, complexity.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Performance Tracking",
    description:
      "Track your progress and see how your interview performance improves over time.",
    stat: "85% AVG SUCCESS",
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description:
      "Practice in Python, Java, C++, Go, JavaScript, and more. Our engine evaluates best practices.",
  },
];

export default precisionTools;
