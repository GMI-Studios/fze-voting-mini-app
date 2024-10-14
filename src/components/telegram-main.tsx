"use client";

import { useTelegramUser } from "@/telegram/use-telegram-user";

export const TelegramMain = () => {
	const { user } = useTelegramUser();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 w-full max-w-full bg-red-500 overflow-hidden">
			{user?.id}
			<p>Telegram App</p>
			<p>Your Information: {user?.username}</p>
		</main>
	);
};
