"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CoursesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-xl">
      <p className="font-mono text-xs tracking-widest text-destructive uppercase">
        Error
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold">
        Something went wrong
      </h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
      <Button variant="outline" className="mt-6" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
