import { useState } from "react";
import { getUserViaWindow } from "./get-user-via-window";

export const useTelegramUser = () => {
	const [user, setUser] = useState(getUserViaWindow());

	return { user };
};
