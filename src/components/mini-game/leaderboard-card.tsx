import { Candidate } from "@/types/model-types";
import React from "react";

type Props = {
  candidate: Candidate;
  top: number;
};

const LeaderBoardCard: React.FC<Props> = ({ candidate, top }) => {
  return (
    <div className="rounded-xl bg-[#CBFF70] px-5 py-2 flex items-center gap-3">
      <span className="text-sm font-bold">{top + 1}</span>
      <img
        src={candidate.profilePhotoUrl}
        alt="avatar"
        width={120}
        height={120}
        className="rounded-full w-8 h-8 object-cover"
      />
      <div className="flex items-center gap-2 text-black text-sm grow">
        {candidate.name}
        <p className="font-bold">|</p>
        <p className="font-bold">{candidate.voteCount}pts</p>
      </div>
    </div>
  );
};

export default LeaderBoardCard;
