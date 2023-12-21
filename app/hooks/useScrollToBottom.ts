import { useCallback, useState, useEffect } from "react";

const useScrollToBottom = (ref: React.RefObject<HTMLElement>) => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToBottom = useCallback(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [ref]);

  useEffect(() => {
    const div = ref.current;

    if (!div) return;

    const handleScroll = () => {
      const scrolledToBottom =
        div.scrollTop + div.clientHeight >= div.scrollHeight;

      setShowArrow(!scrolledToBottom);
    };

    div.addEventListener("scroll", handleScroll);

    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return { showArrow, scrollToBottom };
};

export default useScrollToBottom;
