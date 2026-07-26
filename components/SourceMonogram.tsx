export function initialsOf(source: string): string {
  const words = source.split(/[^A-Za-z0-9]+/).filter(Boolean);
  if (!words.length) return "?";
  if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function SourceMonogram({ source }: { source: string }) {
  return (
    <span className="monogram" aria-hidden="true">
      {initialsOf(source)}
    </span>
  );
}
