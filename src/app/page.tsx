"use client";

import { useAuth, useSignIn } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useTelegramUser } from "@/telegram/use-telegram-user";
import { Anton } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const Start = () => {
  const { isAuthenticated } = useAuth();
  const signInMut = useSignIn({
    onSignedIn: () => {
      router.push("/mini-game");
    },
  });
  const { user: telegramUser } = useTelegramUser();
  const router = useRouter();
  const { toast } = useToast();
  const handleEnterGame = () => {
    const telegramId = telegramUser?.id?.toString() ?? "";
    if (!telegramId) {
      toast({
        title: "Error",
        description: "Failed to verify your telegram account",
      });
      return;
    }
    if (!isAuthenticated) {
      signInMut.mutate(telegramId);
    } else {
      router.push("/mini-game");
    }
  };

  return (
    <div className="mx-auto h-screen w-full max-w-md overflow-x-hidden bg-[url('/images/bg-start.png')] bg-cover relative flex flex-col items-center justify-between">
      <Image
        src="/images/banner-start.png"
        alt="banner"
        width={472}
        height={268}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src="/icons/logo-fze.svg"
        width={144}
        height={68}
        alt="logo"
        className="mt-[110px]"
      />
      <button
        className={cn(
          anton.className,
          "mb-14 bg-[#121212] rounded-lg  w-[calc(100%-32px)] flex items-center justify-center text-[#CBFF70] text-2xl py-3.5 z-10"
        )}
        onClick={handleEnterGame}
      >
        Enter Game
      </button>
    </div>
  );
};

export default Start;
