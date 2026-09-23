"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <Button
      variant="stamp"
      size="lg"
      onClick={() => setLikes((current) => current + 1)}
      className="px-4 font-mono"
    >
      <Heart className="fill-current" /> {likes}
    </Button>
  );
}
