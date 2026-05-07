"use client";

import { useState } from "react";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "basyle08@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto w-full">
      <div className="mb-10">
        <p className="text-sm font-mono text-muted-foreground mb-3 tracking-widest uppercase">
          Contact
        </p>
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">연락하기</span>
        </h2>
      </div>

      <div className="glass-strong rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <FiMail size={20} className="text-primary shrink-0" />
          <span className="font-mono text-lg text-foreground">{EMAIL}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass border border-border text-sm font-mono hover:border-primary/40 hover:text-primary transition-colors"
          >
            {copied ? (
              <>
                <FiCheck size={15} className="text-primary" />
                복사됨
              </>
            ) : (
              <>
                <FiCopy size={15} />
                복사
              </>
            )}
          </button>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono font-semibold text-primary-foreground transition-opacity hover:opacity-80"
            style={{ background: "linear-gradient(135deg, #00ff88, #00ccff)" }}
          >
            <FiMail size={15} />
            메일 보내기
          </a>
        </div>
      </div>
    </section>
  );
}
