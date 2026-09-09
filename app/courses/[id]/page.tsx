import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
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
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>{course.credits} credits</p>
      <LikeButton initialLikes={course.likes} />
    </div>
  );
}