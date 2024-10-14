import { getUserViaWindow } from "@/telegram/get-user-via-window";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export default function AppMiddleware(req: NextRequest) {
	const user = getUserViaWindow();

	// special case for /metatags
	if (!user) {
		notFound();
	}
	return NextResponse.next();
}
