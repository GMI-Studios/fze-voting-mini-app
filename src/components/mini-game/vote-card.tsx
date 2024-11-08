import { cn } from "@/lib/utils";
import { Candidate } from "@/types/model-types";
import { VoteButton, VotedBadge } from "./vote-button";

const VoteCard: React.FC<{
  candidate: Candidate;
  isLoading: boolean;
  isVoted: boolean;
  isCandidateVoted: boolean;
  onVoted: () => void;
}> = ({ candidate, isLoading, isVoted, isCandidateVoted, onVoted }) => {
  const profilePhotoUrl = candidate.profilePhotoUrl;
  const name = candidate.name;
  const socialLinks = Object.entries(candidate.socialLinks || {})
    .filter(([_, value]) => value)
    .map(([key, value]) => ({
      icon: key,
      url: value,
    }));

  return (
    <div
      className={cn(
        "shadow-[0px_0px_4px_0px_#0000001A] rounded-2xl flex items-center gap-2 p-2.5 w-full ",
        isCandidateVoted
          ? "bg-[#121212]"
          : !isVoted
          ? "bg-[#CBFF70]"
          : "bg-[#DFDFDF]"
      )}
    >
      <img
        className="rounded-2xl w-[75px] h-[75px] object-cover flex-shrink-0"
        src={profilePhotoUrl}
        alt="avatar"
        width={75}
        height={75}
      />

      <div
        className={cn(
          "flex flex-col gap-1 flex-grow",
          isCandidateVoted ? "text-[#CBFF70]" : "text-black"
        )}
      >
        <p className="text-xl">{name}</p>
        <p className="text-base flex items-center gap-1">
          {socialLinks.map(({ icon, url }) => (
            <>
              <img
                key={icon}
                src={`/icons/${
                  isVoted ? "twitter-fill-yellow.svg" : "twitter-fill-black.svg"
                }`}
                alt="twitter-fill-black"
                width={18}
                height={18}
              />
              @{url}
            </>
          ))}
        </p>
      </div>
      {isLoading && (
        <div className="w-16 h-16 border-4 border-[#CBFF70] border-t-transparent rounded-full animate-spin"></div>
      )}
      {!isVoted && <VoteButton onPressed={onVoted} />}
      {isVoted && isCandidateVoted && <VotedBadge />}
    </div>
  );
};

export default VoteCard;
