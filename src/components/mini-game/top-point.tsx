import { cn } from "@/lib/utils";
import { Candidate } from "@/types/model-types";

export enum Top {
  "first",
  "second",
  "third",
}

type Props = {
  candidate?: Candidate;
  top: Top;
  customClassName?: string;
};

const TopPoint: React.FC<Props> = ({ candidate, top, customClassName }) => {
  if (!candidate) return null;
  return (
    <div
      className={cn("flex flex-col items-center text-black", customClassName)}
    >
      <div className="rounded-full relative border-[3px] border-[#CBFF70] mb-5">
        <img
          src={candidate.profilePhotoUrl}
          alt="avatar"
          className={cn(
            "rounded-full w-full h-full object-cover",
            top === Top.first ? "w-[84px] h-[84px]" : "w-[74px] h-[74px]"
          )}
          width={120}
          height={120}
        />

        {top === Top.first && (
          <img
            src="/icons/crown.svg"
            alt="crown"
            width={32}
            height={26}
            className="absolute -top-[22px] left-1/2 -translate-x-1/2 "
          />
        )}

        <div className="flex items-center justify-center w-7 h-7 rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#CBFF70]">
          <p className="text-base font-bold">{top + 1}</p>
        </div>
      </div>
      <p className="text-sm font-bold mb-1">{candidate.name}</p>
      <p className="text-sm flex items-center gap-0.5">
        <img src="/icons/star-tip.svg" alt="tip" width={16} height={16} />
        {candidate.voteCount} pts
      </p>
    </div>
  );
};

export default TopPoint;
