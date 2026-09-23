import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

// "modern-frontend" -> "MF", used as a library-style index code
function courseCode(id: string) {
  return id
    .split("-")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="group block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
      <Card className="relative h-full border-l-4 border-ember/70 hover:-translate-y-0.5 hover:shadow-md hover:border-ember hover:ring-ember/40 transition dark:border-ember/60 dark:bg-card/80 dark:hover:shadow-black/40">
        <CardHeader>
          <Badge
            variant="outline"
            className="mb-1 rounded-sm border-dashed font-mono tracking-widest text-muted-foreground"
          >
            № {courseCode(id)}
          </Badge>
          <CardTitle className="font-heading text-lg leading-tight font-semibold group-hover:text-ember-deep dark:group-hover:text-ember-soft">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="flex-1 text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between border-t border-dashed pt-3">
            <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {credits} credits
            </span>
            <Button
              variant="ghost"
              size="sm"
              tabIndex={-1}
              className="text-ember hover:bg-ember-soft hover:text-ember-deep dark:hover:bg-ember/15 dark:hover:text-ember-soft"
            >
              <Heart className="fill-current" /> {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
