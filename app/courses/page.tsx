import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div>
      <header className="mb-8 border-b border-dashed pb-6">
        <p className="font-mono text-xs tracking-widest text-ember uppercase">
          Index · {courses.length} entries
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold sm:text-5xl">
          Courses
        </h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </div>
  );
}
