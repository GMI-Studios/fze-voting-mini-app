import Image from "next/image";
import React from "react";

type Props = {
  userName: string;
  point: number;
  avatar: string;
  top: number;
};

const LeaderBoardCard: React.FC<Props> = ({ userName, point, avatar, top }) => {
  return (
    <div className="rounded-xl bg-[#CBFF70] px-5 py-2 flex items-center gap-3">
      <span className="text-sm font-bold">{top + 1}</span>
      <Image
        src={avatar}
        alt="avatar"
        width={120}
        height={120}
        className="rounded-full w-8 h-8 object-cover"
      />
      <div className="flex items-center gap-2 text-black text-sm grow">
        {userName}
        <p className="font-bold">|</p>
        <p className="font-bold">{point}pts</p>
      </div>
    </div>
  );
};

export default LeaderBoardCard;
