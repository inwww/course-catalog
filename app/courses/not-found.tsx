import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Course not found</h1>
      <p>We couldn&apos;t find a course with that id.</p>
      <Link href="/courses">Back to courses</Link>
    </div>
  );
}