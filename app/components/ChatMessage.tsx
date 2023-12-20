import Markdown from "react-markdown";

import type { Message } from "ai";

export default function ChatMessage(message: Message) {
  return (
    <div className="chat-message flex flex-col text-left p-2">
      <div className="font-semibold select-none pb-2">
        {message.role === "user" ? "You" : "Mistral"}
      </div>
      <div className="message-content space-y-3">
        <Markdown>{message.content}</Markdown>
      </div>
    </div>
  );
}
