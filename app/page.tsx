import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";
import ChatBox from "./components/ChatBox";

export default function Chat() {
  noStore();
  if (!process.env.MISTRAL_API_KEY) {
    redirect("/error/api-key");
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-4/5 max-w-2xl h-4/5 flex flex-col">
      <div className="bg-blue-500 p-4 text-white font-bold text-lg flex-none">
        Mistral
      </div>
      <ChatBox />
    </div>
  );
}
