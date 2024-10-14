"use client";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 w-full max-w-full bg-red-500 overflow-hidden">
			{window.Telegram?.WebApp?.initDataUnsafe?.user?.id}
			<p>Telegram App</p>
			<p>
				Your Information:{" "}
				{window.Telegram?.WebApp?.initDataUnsafe?.user?.username}
			</p>
		</main>
	);
}
