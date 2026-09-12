interface TickerStripProps {
  items: string[];
}

export default function TickerStrip({ items }: TickerStripProps) {
  const line = items.join("   ✦   ");

  return (
    <div className="marquee bg-primary text-primary-foreground py-3 rule-b border-b-transparent">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-serif italic text-lg md:text-xl px-4 tracking-wide"
            aria-hidden={i === 1}
          >
            {line}&nbsp;&nbsp;✦&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
