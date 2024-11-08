import { Candidate } from "./model-types";

export interface Announcement {
  ended: boolean;
  winner: Candidate | null;
}
