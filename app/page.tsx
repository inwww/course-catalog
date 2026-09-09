import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Course Catalog</h1>
      <p>Welcome! Browse the courses offered this semester.</p>
      <Link href="/courses">View courses</Link>
    </div>
  );
}