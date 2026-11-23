type Props = {
  rating: number;
  count?: number;
};

export default function StarRating({ rating, count }: Props) {
  const filled = Math.round(rating);

  return (
    <span
      className="inline-flex items-center gap-1 text-sm"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      <span aria-hidden="true" className="tracking-tight text-amber-400">
        {"★".repeat(filled)}
        <span className="text-black/20">{"★".repeat(5 - filled)}</span>
      </span>
      {count !== undefined && <span>({count})</span>}
    </span>
  );
}
