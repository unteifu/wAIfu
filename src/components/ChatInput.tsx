export default function ChatInput() {
  return (
    <div className="absolute bottom-10 h-10 w-full max-w-lg px-5">
      <input
        className="h-full w-full rounded-full border bg-white px-5 text-neutral-800 shadow outline-none"
        type="text"
        placeholder="Enter your message..."
      />
    </div>
  );
}
