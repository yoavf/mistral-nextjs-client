"use client";
import { useChat } from "ai/react";
import type { Message } from "ai/react";
import { useRef } from "react";
import MessageInput from "./MessageInput";
import ExampleMessages from "./ExampleMessages";
import ScrollToBottom from "./ScrollToBottom";
import ChatMessage from "./ChatMessage";
import useScrollToBottom from "../hooks/useScrollToBottom";

export default function Chat() {
  const {
    messages,
    input,
    isLoading,
    handleInputChange,
    append,
    handleSubmit,
  } = useChat({
    initialMessages: [
      {
        id: "initial",
        role: "system",
        content:
          "You are a helpful assistant. You can use Markdown syntax in your replies that will be rendered to html (do not return a markdown block, just content)",
      },
    ],
  });

  const messagesDiv = useRef<HTMLDivElement>(null);
  const { showArrow, scrollToBottom } = useScrollToBottom(messagesDiv);

  const isUserOrAssistantMessage = (message: Message) =>
    message.role === "user" || message.role === "assistant";

  return (
    <>
      <div
        ref={messagesDiv}
        className={`m-4 flex flex-col grow  overflow-y-auto scroll-smooth ${
          messages.filter(isUserOrAssistantMessage).length === 0
            ? "justify-center items-center space-y-4"
            : "space-y-1"
        }`}
      >
        <>
          {messages.filter(isUserOrAssistantMessage).length === 0 && (
            <ExampleMessages
              count={3}
              onClick={async (content) => {
                await append({
                  content: content,
                  role: "user",
                });
              }}
            />
          )}

          {messages.filter(isUserOrAssistantMessage).map((message, index) => {
            return <ChatMessage {...message} key={message.id || index} />;
          })}
        </>
        <ScrollToBottom showArrow={showArrow} scrollAction={scrollToBottom} />
      </div>
      <div className="form px-4 pb-4">
        <MessageInput
          value={input}
          isLoading={isLoading}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
