export const useTelegramUser = () => {
	const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

	return { user };
};
