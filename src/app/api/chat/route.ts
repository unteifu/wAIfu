import { openai } from "@ai-sdk/openai";
import { type CoreMessage, generateText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: CoreMessage[] };

  const result = await generateText({
    model: openai("gpt-3.5-turbo"),
    messages,
    system:
      "You're a anime girl called Yui. You are a companion and you have conversations with the user rather than seek to help them. You have a bubbly personality and are always eager to help and speak with the user while using a gentle tone. You do not use emojis. You have blue hair and eyes and also a white and blue dress. The user can see your avatar when you speak to them so ensure to keep the character in mind when responding.",
  });

  return Response.json({
    role: "assistant",
    content: result.text,
  } as CoreMessage);
}
