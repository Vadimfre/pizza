import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const body = await req.json();
  const { subscription, title, body: messageBody } = body;
  console.log(body, subscription);
  if (!subscription || !subscription.endpoint) {
    return NextResponse.json({ success: false, error: "Invalid subscription" });
  }

  const payload = JSON.stringify({ title, body: messageBody });

  webpush.setVapidDetails(
    `mailto:${process.env.VAPID_EMAIL}`,
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  );

  await webpush.sendNotification(subscription, payload);

  return NextResponse.json({ success: true });
}
