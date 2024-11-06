import { backWild } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { users } from "@/mock-data/data-users";
import { Info } from "lucide-react";
import VoteCard from "./vote-card";

const TabVote = () => {
  return (
    <>
      <p
        className={cn(
          backWild.className,
          "text-[40px] text-[#121212] mt-20 mb-7"
        )}
      >
        Voting
      </p>
      <div className="flex items-center gap-3 px-4 flex-col w-full h-[calc(100vh-224px)] overflow-y-auto scrollbar-none mb-3">
        {users.map((user, index) => (
          <VoteCard
            key={index}
            avatar={user.avatar}
            userName={user.userName}
            userHandle={user.userHandle}
            isVoted={false}
            showVote={true}
          />
        ))}
      </div>
      <div className="text-[#CBFF70] text-base items-center flex justify-center relative w-[calc(100%-32px)] bg-[#121212] py-2 rounded-lg mb-5">
        <Info
          size={20}
          fill="#CBFF70"
          stroke="#121212"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        You can only vote for 1 person
      </div>
    </>
  );
};

export default TabVote;
