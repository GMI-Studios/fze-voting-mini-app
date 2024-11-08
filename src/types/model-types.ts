export interface Candidate {
  id?: string;
  name?: string;
  profilePhotoUrl?: string;
  socialLinks?: { [key: string]: string };
  voteCount?: number;
  isWinner?: boolean;
}

export interface Voter {
  id?: string;
  telegramId?: string;
  votingPower?: number;
  status?: string;
  isVoted?: boolean;
  candidate?: string | Candidate;
}
