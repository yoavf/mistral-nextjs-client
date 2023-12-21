import type { ChatRequestOptions } from "ai";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    options?: ChatRequestOptions,
  ) => void;
  isLoading: boolean;
}

export default function MessageInput({
  value,
  onChange,
  onSubmit,
  isLoading,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        disabled={isLoading}
        className="w-full pl-3 pr-10 py-2 border rounded disabled:bg-gray-100"
        value={value}
        placeholder="Say something..."
        onChange={onChange}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
        aria-label="Send message"
      >
        <ArrowRightIcon className="h-6 w-6 disabled:opacity-80" />
      </button>
    </form>
  );
}
