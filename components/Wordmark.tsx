export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      tech.ai<span className="text-sky">.</span>studio
    </span>
  );
}
