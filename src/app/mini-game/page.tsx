"use client";

import ResultModal from "@/components/mini-game/result-modal";
import TabLeaderBoard from "@/components/mini-game/tab-leader-board";
import TabVote from "@/components/mini-game/tab-vote";
import TabsMiniGame from "@/components/mini-game/tabs";
import { useAnnouncement } from "@/hooks/use-auth";
import { MINI_GAME_TABS } from "@/lib/constants/tabs";
import { cn } from "@/lib/utils";
import { useTabStore } from "@/store/TabStore";
import { useEffect, useState } from "react";

const GamePage = () => {
  const { ended, winner } = useAnnouncement();
  const currentTab = useTabStore((state) => state.miniGameTab);
  const [isShowingResult, setIsShowingResult] = useState(false);

  useEffect(() => {
    if (ended) {
      setIsShowingResult(true);
    }
  }, [ended]);

  return (
    <div className="mx-auto h-screen w-full max-w-md overflow-x-hidden bg-[url('/images/banner-minigame.png')] bg-cover relative flex flex-col items-center justify-between">
      {MINI_GAME_TABS.VOTE === currentTab && (
        <TabVote
          hasResult={ended}
          onResultPressed={() => setIsShowingResult(true)}
        />
      )}

      {MINI_GAME_TABS.LEADER_BOARD === currentTab && (
        <TabLeaderBoard
          hasResult={ended}
          onResultPressed={() => setIsShowingResult(true)}
        />
      )}

      <div
        className={cn(
          "w-full",
          currentTab === MINI_GAME_TABS.LEADER_BOARD && "bg-[#E5FDF2]"
        )}
      >
        <TabsMiniGame />
      </div>

      {winner && (
        <ResultModal
          isShowing={isShowingResult}
          onClose={() => setIsShowingResult(false)}
          candidate={winner}
        />
      )}
    </div>
  );
};

export default GamePage;
