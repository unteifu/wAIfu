"use client";

import Script from "next/script";
import ChatInput from "~/components/ChatInput";
import ChatterBox from "~/components/ChatterBox";
import Model from "~/components/Model";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-300">
      <Script src="/live2dcubismcore.min.js" />
      <ChatterBox />
      <Model />
      <ChatInput />
    </main>
  );
}
