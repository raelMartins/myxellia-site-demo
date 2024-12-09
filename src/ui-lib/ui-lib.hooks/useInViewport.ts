import { MutableRefObject, useEffect, useMemo, useState } from "react";

function useIsInViewport(ref: MutableRefObject<HTMLDivElement | null>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === "undefined") {
      return null;
    }

    return new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));
  }, []);

  useEffect(() => {
    if (!observer || !ref.current) {
      return;
    }

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
