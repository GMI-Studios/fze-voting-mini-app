import { MINI_GAME_TABS } from "@/lib/tabs";
import { create } from "zustand";

type State = {
  miniGameTab: string;
};

const defaultValue = {
  miniGameTab: MINI_GAME_TABS.VOTE,
};

export const useTabStore = create<State>(() => ({
  ...defaultValue,
}));

export const setMiniGameTab = (tab: string) => {
  useTabStore.setState({ miniGameTab: tab });
};
