import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-xl">
      <p className="font-mono text-xs tracking-widest text-ember uppercase">
        Error 404
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold">
        Course not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        We couldn&apos;t find a course with that id.
      </p>
      <Button
        variant="outline"
        className="mt-6"
        nativeButton={false}
        render={<Link href="/courses" />}
      >
        Back to courses
      </Button>
    </div>
  );
}
