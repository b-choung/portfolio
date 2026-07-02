"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/personal";

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_MS = 2000;

export default function TypewriterRole() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = personal.roles[roleIndex];

    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      const next = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % personal.roles.length);
      }, 400);
      return () => clearTimeout(next);
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
