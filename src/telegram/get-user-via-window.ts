export const getUserViaWindow = () => {
	return window.Telegram?.WebApp?.initDataUnsafe?.user;
};
