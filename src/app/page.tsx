import { MockPosts } from "@/components/mock-posts";
import { TelegramMain } from "@/components/telegram-main";
import { Suspense } from "react";

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
