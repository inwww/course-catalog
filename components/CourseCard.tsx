import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{credits} credits</p>
      <p>❤ {likes}</p>
    </Link>
  );
}