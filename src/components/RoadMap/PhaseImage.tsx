
interface PhaseImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function PhaseImage({ src, alt = "", className = "" }: PhaseImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain rounded-3xl aspect-[0.97] ${className}`}
    />
  );
}
