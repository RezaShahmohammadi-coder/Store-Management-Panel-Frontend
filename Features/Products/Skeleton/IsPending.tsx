export default function ProductSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
        <div className="h-5 w-32 animate-pulse rounded-md bg-zinc-200" />

        <div className="h-8 w-24 animate-pulse rounded-lg bg-zinc-200" />
      </div>

      {/* Product rows */}
      <div className="divide-y divide-zinc-100">

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-5 px-6 py-4"
          >
            {/* Image */}
            <div className="h-16 w-16 shrink-0 animate-pulse rounded-xl bg-zinc-200" />

            {/* Product title */}
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="h-4 w-40 animate-pulse rounded bg-zinc-200" />
              <div className="h-3 w-24 animate-pulse rounded bg-zinc-100" />
            </div>

            {/* Category */}
            <div className="h-7 w-20 animate-pulse rounded-full bg-zinc-200" />

            {/* Price */}
            <div className="h-4 w-28 animate-pulse rounded bg-zinc-200" />

            {/* Actions */}
            <div className="flex gap-2">
              <div className="h-9 w-9 animate-pulse rounded-lg bg-zinc-200" />
              <div className="h-9 w-9 animate-pulse rounded-lg bg-zinc-200" />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}