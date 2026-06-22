import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  speed = 38,
  startDelay = 500,
): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let index = 0;
    let timer: number;

    function typeNext() {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        setDone(true);
        return;
      }

      timer = window.setTimeout(typeNext, speed);
    }

    timer = window.setTimeout(typeNext, startDelay);

    return () => window.clearTimeout(timer);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

type TypewriterTextProps = {
  text: string;
  className?: string;
};

export function TypewriterText({ text, className }: TypewriterTextProps) {
  const { displayed, done } = useTypewriter(text);

  return (
    <span className={className}>
      {displayed}
      <span
        aria-hidden="true"
        data-typewriter-cursor
        className={`ml-1 inline-block w-[0.08em] bg-current align-[-0.08em] ${
          done ? "typewriter-cursor-done" : "animate-blink"
        }`}
      >
        &nbsp;
      </span>
    </span>
  );
}
