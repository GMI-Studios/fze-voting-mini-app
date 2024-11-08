import { getMe, signIn, voteCandidate } from "@/config/api/voter";
import {
  setAnnouncement,
  setAuth,
  setVoter,
  useAuthStore,
} from "@/store/AuthStore";
import { useMutation, useQuery } from "react-query";
import { useToast } from "./use-toast";
import { AxiosError } from "axios";
import { getCandidates } from "@/config/api/candidate";

export function getAxiosError(error: unknown) {
  let errorMessage;
  if (error instanceof AxiosError) {
    const errors = error.response?.data.errors as { message: string }[];
    const firstError = errors[0];
    errorMessage = firstError?.message;
  }
  return errorMessage || "Something went wrong";
}

export const useAnnouncement = () => {
  const announcement = useAuthStore((state) => state.announcement);
  return {
    ended: announcement?.ended ?? false,
    winner: announcement?.winner || null,
  };
};

export const useAuth = () => {
  const { voter, token } = useAuthStore();

  const isAuthenticated = !!token;

  return { voter, token, isAuthenticated };
};

export const useSignIn = (args: { onSignedIn?: () => void }) => {
  const { toast } = useToast();
  const signInMut = useMutation({
    mutationFn: (telegramId: string) => signIn(telegramId),
    onSuccess: (data) => {
      setAuth({ token: data.token, voter: data.data });
      args.onSignedIn?.();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: getAxiosError(error),
      });
    },
  });
  return signInMut;
};

export const useVote = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}) => {
  const { toast } = useToast();
  const voteMut = useMutation({
    mutationFn: (candidateId: string) => voteCandidate(candidateId),
    onSuccess: (data) => {
      const { candidate, announcement } = data;
      if (announcement) {
        setAnnouncement(announcement);
      }
      toast({
        title: "Success",
        description: `You have voted for ${candidate.name}`,
      });
      onSuccess?.();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: getAxiosError(error),
      });
      onError?.(error);
    },
  });
  return voteMut;
};

export const useCandidatesQuery = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
} = {}) => {
  const candidatesMut = useQuery({
    queryKey: ["candidates"],
    queryFn: () => getCandidates(),
    onSuccess: (data) => {
      const { announcement } = data;
      if (announcement) {
        setAnnouncement(announcement);
      }
      onSuccess?.();
    },
    onError: (error) => {
      console.log(error);
      onError?.(error);
    },
  });
  return candidatesMut;
};

export const useMeQuery = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
} = {}) => {
  const { toast } = useToast();
  const meMut = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
    onSuccess: (data) => {
      const { announcement, data: voter } = data;
      if (announcement) {
        setAnnouncement(announcement);
      }
      onSuccess?.();
      setVoter(voter);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: getAxiosError(error),
      });
      onError?.(error);
    },
  });
  return meMut;
};
