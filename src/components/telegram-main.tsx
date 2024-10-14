"use client";

import { useTelegramUser } from "@/telegram/use-telegram-user";
import { MaxWidthWrapper } from "./ui/max-width-wrapper";

export const TelegramMain = () => {
	const { user } = useTelegramUser();

	return (
		<main>
			<MaxWidthWrapper>
				{user?.id}
				<p>Telegram App</p>
				<p>Your Information: {user?.username}</p>
			</MaxWidthWrapper>
		</main>
	);
};
