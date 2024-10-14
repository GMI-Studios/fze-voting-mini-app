"use client";

import { useTelegramUser } from "@/telegram/use-telegram-user";
import { MaxWidthWrapper } from "./ui/max-width-wrapper";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

export const TelegramMain = () => {
	const { user } = useTelegramUser();
	const { toast } = useToast();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!user && mounted) {
			toast({
				title: "Error",
				description: "User not found",
				variant: "destructive",
			});
		}
	}, [user, mounted]);

	return (
		<MaxWidthWrapper>
			{user?.id}
			<p>Telegram App</p>
			<p>Your Information: {user?.username}</p>
		</MaxWidthWrapper>
	);
};
