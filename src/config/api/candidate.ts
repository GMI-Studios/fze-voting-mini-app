import { Candidate } from "@/types/model-types";
import { Announcement } from "@/types/api-types";
import { fwbAxios } from "../axios.config";

export const getCandidates = async () => {
  const response = await fwbAxios.get<{
    candidates: Candidate[];
    announcement: Announcement | null;
  }>("/candidates/top");
  return response.data;
};
