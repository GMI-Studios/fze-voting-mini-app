import { Candidate, Voter } from "@/types/model-types";
import { fwbAxios, axios } from "../axios.config";
import { Announcement } from "@/types/api-types";

export const signIn = async (telegramId: string) => {
  const response = await axios.post<{
    data: { token: string; data: Voter };
  }>("/voters/sign-in", { telegramId });
  return response.data.data;
};

export const getMe = async () => {
  const response = await fwbAxios.get<{
    data: Voter;
    announcement: Announcement | null;
  }>("/voters/me");
  return response.data;
};

export const voteCandidate = async (candidateId: string) => {
  const response = await fwbAxios.post<{
    isVoted: boolean;
    candidate: Candidate;
    announcement: Announcement | null;
  }>(`/voters/vote/${candidateId}`);
  return response.data;
};
