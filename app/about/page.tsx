export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-ember uppercase">
        Colophon
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold sm:text-5xl">
        About
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        This is a course catalog built for the &quot;Advanced Web
        Technologies&quot; course. It runs on Next.js with the App Router
        and TypeScript.
      </p>
      <p className="mt-4 text-muted-foreground">
        Styled with Tailwind CSS and shadcn/ui.
      </p>
    </div>
  );
}
