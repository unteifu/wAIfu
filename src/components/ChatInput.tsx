"use client";

import type { CoreMessage } from "ai";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import {
  isLoadingAtom,
  lastMessageAtom,
  messageHistoryAtom,
} from "~/atoms/ChatAtom";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function ChatInput() {
  const [messages, setMessages] = useAtom(messageHistoryAtom);
  const [lastMessage, setLastMessage] = useAtom(lastMessageAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(lastMessage);
  }, [messages, lastMessage]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const newMessages: CoreMessage[] = [
      ...messages,
      { content: input, role: "user" },
    ];

    setMessages(newMessages);
    setInput("");

    const textResponse = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    });
    const textResult = (await textResponse.json()) as CoreMessage;

    const voiceResponse = await fetch("/api/synthasize", {
      method: "POST",
      body: JSON.stringify({ message: textResult }),
    });
    const voiceResult = await voiceResponse.blob();

    const reader = new FileReader();
    reader.readAsDataURL(voiceResult);
    reader.onload = async () => {
      if (audioRef.current) {
        audioRef.current.src = reader.result as string;
        await audioRef.current.play();
      }
    };
    setLastMessage(textResult);
    setIsLoading(false);
    setMessages([...newMessages, textResult]);
  }

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="absolute bottom-10 h-10 w-full max-w-lg px-5">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full items-center overflow-hidden rounded-full border bg-white shadow">
          <input
            className=" h-full flex-1 px-5 py-2 pr-0 text-neutral-800 outline-none"
            type="text"
            placeholder="Enter your message..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            disabled={isLoading}
          />
          <div className="flex h-full items-center justify-center px-4">
            <audio ref={audioRef} className="mb-2 hidden" />
            <button type="submit" disabled={isLoading}>
              <IoSend className="text-blue-400 transition-colors hover:text-blue-500" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
