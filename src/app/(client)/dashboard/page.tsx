import Text, { Title, SubTitle } from "@/components/Text";
import { currentUser } from "@clerk/nextjs/server";
import { CheckCircle, ClipboardList, Play, Podium, Star } from "lucide-react";
import Link from "next/link";
import {format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const recentInterviews = [
  {
    id: 1,
    title: "System Design Interview",
    role: "Backend Engineer",
    date: "2023-06-15",
    score: 8.5,
    status: "Completed",
  },
  {
    id: 2,
    title: "Algorithm Interview",
    role: "Frontend Engineer",
    date: "2023-06-10",
    score: 7.8,
    status: "Completed",
  },
  {
    id: 3,
    title: "Behavioral Interview",
    role: "Product Manager",
    date: "2023-06-20",
    score: null,
    status: "In Progress",
  },
];

async function Dashboard() {
  const user = await currentUser();

  const hour = new Date().getHours();

  const date =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <Title className="text-start mb-2 md:text-4xl text-lg">
          {date}, {user?.firstName}!
        </Title>
        <Text className="text-gray-500">
          Ready to crush your next technical interview?
        </Text>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-sm shadow-sm p-5 space-y-8">
            <div className="space-y-2">
              <SubTitle className="text-start text-2xl text-bold">
                 New <br /> Interview
              </SubTitle>
              <Text className="text-gray-500">
                Practice algorithmic challenges or system design with our AI
                interviewer.
              </Text>
            </div>
            <Link
              href="/interview"
              className="flex items-center gap-2 text-center w-fit px-8 py-3 rounded-sm text-white bg-primary"
            >
              <Play size={16} />
              <span>Start New Interview</span>
            </Link>
          </div>
          <div className="space-y-5">
            <div className="space-y-4 bg-white rounded-sm shadow-sm p-5">
              <div className="flex items-center text-sm">
                <CheckCircle size={16} />
                <span className="ml-2 uppercase">Completed</span>
              </div>
              <span className="text-2xl font-bold">90</span>
            </div>
            <div className="space-y-4 bg-white rounded-sm shadow-sm p-5">
              <div className="flex items-center text-sm">
                <Star size={16} />
                <span className="ml-2 uppercase">Avg Score</span>
              </div>
              <span className="text-2xl font-bold">
                8.4<span className="text-sm text-gray-500">/10</span>
              </span>
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-4 bg-white rounded-sm shadow-sm p-5">
              <div className="flex items-center text-sm">
                <ClipboardList size={16} />
                <span className="ml-2 uppercase">Questions</span>
              </div>
              <span className="text-2xl font-bold">24</span>
            </div>
            <div className="space-y-4 bg-white rounded-sm shadow-sm p-5">
              <div className="flex items-center text-sm">
                <Podium size={16} />
                <span className="ml-2 uppercase">Best Score</span>
              </div>
              <span className="text-2xl font-bold ">
                84<span className="text-sm text-gray-500">pts</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <SubTitle className="bg-white px-4 py-2 rounded-t-sm">
          Recent Interviews
        </SubTitle>
        <Table className="">
          <TableHeader className="bg-gray-100">
            <TableRow className="px-4">
              <TableHead className="px-4">Title</TableHead>
              <TableHead className="px-4 hidden lg:table-cell">Role</TableHead>
              <TableHead className="px-4 hidden lg:table-cell">Date</TableHead>
              <TableHead className="px-4 hidden md:table-cell">Score</TableHead>
              <TableHead className="px-4 hidden md:table-cell">
                Status
              </TableHead>
              <TableHead className="px-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentInterviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell className="font-small md:font-medium px-4  truncate">
                  {interview.title}
                </TableCell>
                <TableCell className="cell">
                  {interview.role}
                </TableCell>
                <TableCell className="cell">
                  {format(new Date(interview.date), "MMM dd, yyyy")}
                </TableCell>
                <TableCell className="px-4 hidden md:table-cell text-gray-700">
                  {interview.score ? `${interview.score}/10` : "N/A"}
                </TableCell>
                <TableCell className="px-4 hidden md:table-cell">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium  ${
                      interview.status === "Completed"
                        ? "bg-green-600 text-green-100"
                        : "bg-yellow-500 text-yellow-100"
                    }`}
                  >
                    {interview.status}
                  </span>
                </TableCell>
                <TableCell className="px-4">
                  <Button
                    className="cursor-pointer rounded-[2px] w-15 border border-gray-300 bg-transparent text-black hover:bg-gray-200 "
                    size="sm"
                  >
                    {interview.status === "Completed" ? "View" : "Resume"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
