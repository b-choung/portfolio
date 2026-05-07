"use client";

import { useState, useEffect } from "react";

const ROLES = ["Frontend Developer", "React Engineer", "UI 구현 전문가"];
const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_MS = 2000;

export default function TypewriterRole() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const timeout = setTimeout(
      () =>
        setText(isDeleting ? text.slice(0, -1) : current.slice(0, text.length + 1)),
      isDeleting ? DELETE_SPEED : TYPE_SPEED
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-primary font-mono">
      {text}
      <span className="border-r-2 border-primary ml-0.5 animate-pulse">&nbsp;</span>
    </span>
  );
}
