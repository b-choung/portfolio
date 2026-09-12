"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

interface ViewTransitionLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

export default function ViewTransitionLink({
  href,
  className,
  children,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const supportsViewTransition =
      typeof document !== "undefined" && "startViewTransition" in document;

    if (!supportsViewTransition || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }

    e.preventDefault();
    (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(
      () => {
        router.push(href.toString());
      }
    );
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
