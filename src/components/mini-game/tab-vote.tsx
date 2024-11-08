"use client";

import { backWild } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import VoteCard from "./vote-card";
import {
  useAnnouncement,
  useCandidatesQuery,
  useMeQuery,
  useVote,
} from "@/hooks/use-auth";
import { Candidate } from "@/types/model-types";
import VoteHint from "./vote-hint";
import { Button } from "../ui/button";
import ResultButton from "./result-button";

const TabVote: React.FC<{
  hasResult: boolean;
  onResultPressed?: () => void;
}> = ({ hasResult, onResultPressed }) => {
  const { ended } = useAnnouncement();
  const meQuery = useMeQuery();
  const candidatesQuery = useCandidatesQuery({});
  const voteMut = useVote({
    onSuccess: () => {
      meQuery.refetch();
    },
  });
  return (
    <div className="w-full overflow-y-auto scrollbar-none">
      <p
        className={cn(
          backWild.className,
          "text-[40px] text-[#121212] mt-20 mb-7 text-center"
        )}
      >
        Voting
      </p>

      {hasResult && <ResultButton onPressed={onResultPressed} />}

      <div className="flex items-center gap-3 px-4 flex-col w-full mb-3">
        {candidatesQuery.isLoading && (
          <div className="w-full h-[calc(100vh-224px)] flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#CBFF70] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {candidatesQuery.data?.candidates.map((candidate) => (
          <VoteCard
            key={candidate.id}
            candidate={candidate}
            isVoted={meQuery.data?.data.isVoted ?? false}
            isCandidateVoted={
              candidate.id === (meQuery.data?.data.candidate as Candidate)?.id
            }
            isLoading={candidatesQuery.isLoading || voteMut.isLoading}
            onVoted={() => {
              voteMut.mutate(candidate.id!);
            }}
          />
        ))}
      </div>
      <VoteHint />
    </div>
  );
};

export default TabVote;
