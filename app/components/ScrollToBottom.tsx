import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

export default function ScrollToBottom({
  showArrow = false,
  scrollAction = () => {},
}) {
  return (
    <button
      className={`${
        showArrow ? "visible" : "invisible"
      } sticky bottom-0 cursor-pointer rounded-full border-black/10 bg-white/80`}
      onClick={scrollAction}
    >
      <span className="flex leading-3 justify-center p-2 opacity-100">
        <ArrowDownCircleIcon className="h-6 w-6" />
      </span>
    </button>
  );
}
