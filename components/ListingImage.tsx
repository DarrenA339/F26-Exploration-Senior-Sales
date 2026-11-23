type Props = {
  src?: string;
  alt: string;
  emoji: string;
  className?: string;
};

/** Shows the photo if there is one, otherwise a gray placeholder tile. */
export default function ListingImage({ src, alt, emoji, className = "" }: Props) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-panel text-5xl ${className}`}
    >
      <span aria-hidden="true">{emoji}</span>
    </div>
  );
}
