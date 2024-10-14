import { MockPosts } from "@/components/mock-posts";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const TelegramMain = dynamic(
	() => import("@/components/telegram-main").then((mod) => mod.TelegramMain),
	{
		loading: () => <div>Loading TelegramMain...</div>,
		ssr: false,
	}
);

export default function Home() {
	return (
		<>
			<TelegramMain />
			<Suspense fallback={<div>Loading...</div>}>
				<MockPosts />
			</Suspense>
		</>
	);
}
