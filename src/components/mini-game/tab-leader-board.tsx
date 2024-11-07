import { backWild } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { users } from "@/mock-data/data-users";
import LeaderBoardCard from "./leaderboard-card";
import TopPoint, { Top } from "./top-point";

const TabLeaderBoard = () => {
  return (
    <>
      <p
        className={cn(
          backWild.className,
          "text-[40px] text-[#121212] mt-20 mb-12"
        )}
      >
        LeaderBoards
      </p>

      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex gap-6 mb-14">
          <TopPoint
            avatar={users[1].avatar}
            userName={users[1].userName}
            top={users[1].top as Top}
            point={users[1].point}
            customClassName="mt-8"
          />
          <TopPoint
            avatar={users[0].avatar}
            userName={users[0].userName}
            top={users[0].top as Top}
            point={users[0].point}
          />
          <TopPoint
            avatar={users[2].avatar}
            userName={users[2].userName}
            top={users[2].top as Top}
            point={users[2].point}
            customClassName="mt-8"
          />
        </div>

        <div className="bg-[#E5FDF2] w-full rounded-t-xl px-4 pt-5 flex flex-col gap-2 h-[calc(100vh-520px)] overflow-y-auto scrollbar-none">
          {users.map((user, index) => (
            <LeaderBoardCard
              key={index}
              avatar={user.avatar}
              userName={user.userName}
              top={user.top as Top}
              point={user.point}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabLeaderBoard;
