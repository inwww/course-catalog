import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { Badge } from "@/components/ui/badge";
import { getCourse, getCourses } from "@/lib/courses";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  if (id === "broken") {
    throw new Error("Simulated failure while loading this course.");
  }

  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-2xl">
      <Link
        href="/courses"
        className="font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-ember"
      >
        ← All courses
      </Link>
      <h1 className="mt-4 font-heading text-4xl leading-tight font-semibold sm:text-5xl">
        {course.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="rounded-sm font-mono uppercase">
          {course.credits} credits
        </Badge>
        <Badge
          className={
            course.isElective
              ? "rounded-sm bg-ember-soft font-mono text-ember-deep uppercase dark:bg-ember/20 dark:text-ember-soft"
              : "rounded-sm font-mono uppercase"
          }
        >
          {course.isElective ? "Elective" : "Core"}
        </Badge>
      </div>
      <p className="mt-6 text-lg text-muted-foreground">{course.description}</p>
      <div className="mt-8">
        <LikeButton initialLikes={course.likes} />
      </div>
    </article>
  );
}
