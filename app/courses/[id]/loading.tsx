import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-2xl" aria-label="Loading course...">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="mt-4 h-12 w-3/4" />
      <Skeleton className="mt-6 h-5 w-full" />
      <Skeleton className="mt-2 h-5 w-2/3" />
      <Skeleton className="mt-8 h-9 w-24" />
    </div>
  );
}
