import { getUserViaWindow } from "./get-user-via-window";

export const useTelegramUser = () => {
	const user = getUserViaWindow();

	return { user };
};
