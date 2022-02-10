import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);
  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }
    const updateScrollEvent = () => {
      if (!wrapperRef.current) {
        return;
      }
      const { scrollTop, scrollHeight, offsetHeight } = wrapperRef.current;
      const fullScroll = scrollHeight - offsetHeight;

      scrollY.set(scrollTop); // px
      scrollYProgress.set(scrollTop / fullScroll); // 0-1 %
    };
    wrapperRef.current.addEventListener("scroll", updateScrollEvent);

    return () =>
      wrapperRef.current?.removeEventListener("scroll", updateScrollEvent);
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
