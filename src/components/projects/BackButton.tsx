"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(
        () => router.back()
      );
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="ink-underline inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-10 tracking-widest uppercase"
    >
      <FiArrowLeft size={14} />
      돌아가기
    </button>
  );
}
