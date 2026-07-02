import Image from "next/image";

export default function ProjectImages({ images }: { images: string[] }) {
  return (
    <div className="glass rounded-xl p-8 mb-6">
      <p className="text-xs font-mono text-primary mb-4 tracking-widest">
        &gt; screenshots
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-video rounded-lg overflow-hidden border border-border"
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
