"use client";

import { backWild } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import LeaderBoardCard from "./leaderboard-card";
import TopPoint, { Top } from "./top-point";
import { useCandidatesQuery } from "@/hooks/use-auth";
import ResultButton from "./result-button";

const TabLeaderBoard: React.FC<{
  hasResult: boolean;
  onResultPressed?: () => void;
}> = ({ hasResult, onResultPressed }) => {
  const candidatesQuery = useCandidatesQuery();

  const sortedCandidates = candidatesQuery.data?.candidates.sort(
    (a, b) => (b.voteCount ?? 0) - (a.voteCount ?? 0)
  );

  return (
    <div className="w-full overflow-y-auto scrollbar-none">
      <p
        className={cn(
          backWild.className,
          "text-[40px] text-[#121212] mt-20 mb-12 text-center"
        )}
      >
        LeaderBoards
      </p>

      {hasResult && <ResultButton onPressed={onResultPressed} />}

      <div
        className={cn("w-full flex items-center justify-center flex-col", {
          "mt-2": hasResult,
        })}
      >
        <div className="flex gap-6 mb-14">
          <TopPoint
            candidate={sortedCandidates?.[1]}
            top={Top.second}
            customClassName="mt-8"
          />
          <TopPoint candidate={sortedCandidates?.[0]} top={Top.first} />
          <TopPoint
            candidate={sortedCandidates?.[2]}
            top={Top.third}
            customClassName="mt-8"
          />
        </div>

        {candidatesQuery.isLoading && (
          <div className="w-full h-20 bg-white rounded-xl animate-pulse" />
        )}

        <div className="bg-[#E5FDF2] w-full rounded-t-xl px-4 pt-5 flex flex-col gap-2">
          {candidatesQuery.isSuccess &&
            sortedCandidates?.map((user, index) => (
              <LeaderBoardCard
                key={user.id}
                candidate={user}
                top={index as Top}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TabLeaderBoard;
