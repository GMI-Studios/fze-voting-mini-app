import { Check } from "lucide-react";
import { Button } from "../ui/button";

export const VoteButton: React.FC<{
  onPressed: () => void;
}> = ({ onPressed }) => {
  return (
    <Button
      onClick={onPressed}
      className="flex items-center gap-2 bg-black text-white rounded-[10px] px-2.5 py-3 text-base"
    >
      <img src="/icons/heart-red.svg" alt="heart-red" width={21} height={18} />
      Vote
    </Button>
  );
};

export const VotedBadge: React.FC = () => {
  return (
    <div className="flex items-center gap-2 bg-black text-[#CBFF70] text-base rounded-[10px] px-2.5 py-3">
      <div className="w-5 h-5 rounded-full bg-[#CBFF70] flex items-center justify-center">
        <Check strokeWidth={3} stroke="black" size={14} />
      </div>
      Voted
    </div>
  );
};
