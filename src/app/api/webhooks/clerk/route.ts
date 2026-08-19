import { headers } from "next/headers";
import { Webhook } from "svix";

import prisma from "@/lib/prisma";
import clerkWebhook from "@/types/clerkWebhook";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return new Response("Missing webhook secret", {
      status: 500,
    });
  }

  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", {
      status: 400,
    });
  }

  const payload = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET);

  let event;

  try {
    event = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as clerkWebhook[];
  } catch {
    return new Response("Invalid signature", {
      status: 400,
    });
  }

  if (event.type === "user.created") {
    const user = event.data;

    const email = user.email_addresses[0]?.email_address;

    if (!email) {
      return new Response("User has no email", {
        status: 400,
      });
    }

    await prisma.user.create({
      data: {
        clerkUserId: user.id,
        firstName: user.first_name ?? "",
        lastName: user.last_name ?? "",
        email,
      },
    });
  }

  return new Response("Webhook received", {
    status: 200,
  });
}
