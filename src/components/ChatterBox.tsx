"use client";

import { useAtom } from "jotai";
import React from "react";
import { isLoadingAtom, lastMessageAtom } from "~/atoms/ChatAtom";
import Spinner from "./Spinner";

export default function ChatterBox() {
  const [message] = useAtom(lastMessageAtom);
  const [isLoading] = useAtom(isLoadingAtom);

  if (!message && !isLoading) {
    return null;
  }

  return (
    <div className="absolute top-7 flex flex-col-reverse items-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex max-w-3xl justify-center rounded-xl border bg-white p-4 shadow">
          <span className="overflow-scroll text-center font-medium">
            {message?.content as string}
          </span>
        </div>
      )}
    </div>
  );
}
