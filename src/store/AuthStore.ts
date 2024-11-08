import { create } from "zustand";
import { Candidate, Voter } from "@/types/model-types";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStoreState {
  voter?: Voter | null;
  token?: string | null;
  announcement?: {
    ended: boolean;
    winner: Candidate | null;
  } | null;
}

const defaultValue: AuthStoreState = {
  voter: null,
  token: null,
  announcement: null,
};

export const useAuthStore = create<AuthStoreState>()(
  persist(
    () => ({
      ...defaultValue,
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const setVoter = (voter: Voter) => {
  useAuthStore.setState((state) => ({
    ...state,
    voter,
  }));
};

export const setAuth = (args: { token: string; voter: Voter }) => {
  useAuthStore.setState((state) => ({
    ...state,
    ...args,
  }));
};

export const setAnnouncement = (announcement: {
  ended: boolean;
  winner: Candidate | null;
}) => {
  useAuthStore.setState((state) => ({
    ...state,
    announcement,
  }));
};
