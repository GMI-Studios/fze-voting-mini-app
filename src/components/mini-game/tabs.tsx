"use client";

import { MINI_GAME_TABS } from "@/lib/tabs";
import { setMiniGameTab, useTabStore } from "@/store/TabStore";
import { Crown, Heart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const TabsMiniGame = () => {
  const currentTab = useTabStore((state) => state.miniGameTab);

  const handleChangeTab = (value: string) => {
    setMiniGameTab(value);
  };

  return (
    <Tabs
      defaultValue={currentTab}
      onValueChange={handleChangeTab}
      className="w-full px-4 my-4"
    >
      <TabsList className="flex items-center bg-[#121212]">
        <TabsTrigger
          value={MINI_GAME_TABS.VOTE}
          className="group flex flex-col items-center justify-center gap-1 rounded-full px-3 py-2 w-1/2 bg-[#121212] data-[state=active]:bg-[#121212]"
        >
          <Heart
            size={20}
            fill={currentTab === MINI_GAME_TABS.VOTE ? "#CBFF70" : "#BABABA"}
            stroke={currentTab === MINI_GAME_TABS.VOTE ? "#CBFF70" : "#BABABA"}
          />

          <span className="text-sm font-normal text-[#BABABA] group-data-[state=active]:text-[#CBFF70]">
            Vote
          </span>
        </TabsTrigger>
        <TabsTrigger
          value={MINI_GAME_TABS.LEADER_BOARD}
          className="group flex items-center flex-col justify-center gap-1 rounded-full px-3 py-2 w-1/2 bg-[#121212] data-[state=active]:bg-[#121212]"
        >
          <Crown
            size={20}
            fill={
              currentTab === MINI_GAME_TABS.LEADER_BOARD ? "#CBFF70" : "#BABABA"
            }
            stroke={
              currentTab === MINI_GAME_TABS.LEADER_BOARD ? "#CBFF70" : "#BABABA"
            }
          />
          <span className="text-sm font-normal text-[#BABABA] group-data-[state=active]:text-[#CBFF70]">
            Leader Board
          </span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabsMiniGame;
