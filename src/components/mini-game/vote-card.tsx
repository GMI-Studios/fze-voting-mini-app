"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  avatar: string;
  userName: string;
  userHandle: string;
  isVoted?: boolean;
  showVote?: boolean;
};

const VoteCard: React.FC<Props> = ({
  avatar,
  userName,
  userHandle,
  isVoted,
  showVote,
}) => {
  return (
    <div
      className={cn(
        "shadow-[0px_0px_4px_0px_#0000001A] rounded-2xl flex items-center justify-between p-2.5 w-full ",
        isVoted ? "bg-[#121212]" : showVote ? "bg-[#CBFF70]" : "bg-[#DFDFDF]"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          className="rounded-2xl w-[75px] h-[75px] object-cover"
          src={avatar}
          alt="avatar"
          width={75}
          height={75}
        />

        <div
          className={cn(
            "flex flex-col gap-1",
            isVoted ? "text-[#CBFF70]" : "text-black"
          )}
        >
          <p className="text-xl ">{userName}</p>
          <p className="text-base flex items-center gap-1">
            <Image
              src={`/icons/${
                isVoted ? "twitter-fill-yellow.svg" : "twitter-fill-black.svg"
              }`}
              alt="twitter-fill-black"
              width={18}
              height={18}
            />
            @{userHandle}
          </p>
        </div>
      </div>
      {isVoted ? (
        <div className="flex items-center gap-2 bg-black text-[#CBFF70] text-base rounded-[10px] px-2.5 py-3">
          <div className="w-5 h-5 rounded-full bg-[#CBFF70] flex items-center justify-center">
            <Check strokeWidth={3} stroke="black" size={14} />
          </div>
          Voted
        </div>
      ) : (
        showVote && (
          <button className="flex items-center gap-2 bg-black text-white rounded-[10px] px-2.5 py-3 text-base">
            <Image
              src="/icons/heart-red.svg"
              alt="heart-red"
              width={21}
              height={18}
            />
            Vote
          </button>
        )
      )}
    </div>
  );
};

export default VoteCard;
