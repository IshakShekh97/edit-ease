"use client";
import { ReactLenis, useLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root options={{ autoRaf: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
