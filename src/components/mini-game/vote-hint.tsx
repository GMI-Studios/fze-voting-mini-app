import { Info } from "lucide-react";

const VoteHint: React.FC = () => {
  return (
    <div className="text-[#CBFF70] text-base flex relative mx-4 bg-[#121212] py-2 rounded-lg mb-5">
      <Info
        size={20}
        fill="#CBFF70"
        stroke="#121212"
        className="self-start ml-2"
      />
      <span className="flex-grow text-center -ml-2">
        You can only vote for 1 person
      </span>
    </div>
  );
};

export default VoteHint;
