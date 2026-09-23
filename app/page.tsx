import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="grid gap-10 py-6 md:grid-cols-[1.4fr_1fr] md:items-end md:py-16">
      <div>
        <p className="font-mono text-xs tracking-widest text-ember uppercase">
          Fall semester 2026
        </p>
        <h1 className="mt-3 font-heading text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
          Course <span className="italic text-ember">Catalog</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Welcome! Browse the courses offered this semester.
        </p>
        <Button
          variant="stamp"
          size="lg"
          className="mt-8 px-4"
          nativeButton={false}
          render={<Link href="/courses" />}
        >
          View courses <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
      <div className="hidden rotate-2 rounded-lg border border-dashed bg-card p-6 font-mono text-sm shadow-sm md:block">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Index card
        </p>
        <p className="mt-4 border-b border-dashed pb-2">№ MF · Modern Frontend</p>
        <p className="mt-2 border-b border-dashed pb-2">№ BF · Backend Foundations</p>
        <p className="mt-2 border-b border-dashed pb-2">№ AD · API Design</p>
        <p className="mt-2 text-muted-foreground">…</p>
      </div>
    </section>
  );
}
