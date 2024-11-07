"use client";

import ResultModal from "@/components/mini-game/result-modal";
import TabLeaderBoard from "@/components/mini-game/tab-leader-board";
import TabVote from "@/components/mini-game/tab-vote";
import TabsMiniGame from "@/components/mini-game/tabs";
import { MINI_GAME_TABS } from "@/lib/constants/tabs";
import { cn } from "@/lib/utils";
import { users } from "@/mock-data/data-users";
import { useTabStore } from "@/store/TabStore";
import { useState } from "react";

const GamePage = () => {
  const currentTab = useTabStore((state) => state.miniGameTab);

  const [isShowingResult, setIsShowingResult] = useState(false);

  return (
    <div className="mx-auto h-screen w-full max-w-md overflow-x-hidden bg-[url('/images/banner-minigame.png')] bg-cover relative flex flex-col items-center justify-between">
      {MINI_GAME_TABS.VOTE === currentTab && <TabVote />}

      {MINI_GAME_TABS.LEADER_BOARD === currentTab && <TabLeaderBoard />}

      <div
        className={cn(
          "w-full",
          currentTab === MINI_GAME_TABS.LEADER_BOARD && "bg-[#E5FDF2]"
        )}
      >
        <TabsMiniGame />
      </div>

      <ResultModal
        isShowing={isShowingResult}
        onClose={() => setIsShowingResult(false)}
        avatar={users[0].avatar}
        userName={users[0].userName}
        userHandle={users[0].userHandle}
      />
    </div>
  );
};

export default GamePage;
