"use client";

import dynamic from "next/dynamic";

const TelegramMain = dynamic(
	() => import("@/components/telegram-main").then((mod) => mod.TelegramMain),
	{
		ssr: false,
	}
);

export default function Home() {
	return <TelegramMain />;
}
