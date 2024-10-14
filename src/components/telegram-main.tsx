"use client";

import { useTelegramUser } from "@/telegram/use-telegram-user";
import { MaxWidthWrapper } from "./ui/max-width-wrapper";
import { useToast } from "@/hooks/use-toast";

export const TelegramMain = () => {
	const { user } = useTelegramUser();
	const { toast } = useToast();

	if (!user) {
		toast({
			title: "Error",
			description: "User not found",
			variant: "destructive",
		});
	}

	return (
		<MaxWidthWrapper>
			{user?.id}
			<p>Telegram App</p>
			<p>Your Information: {user?.username}</p>
		</MaxWidthWrapper>
	);
};
