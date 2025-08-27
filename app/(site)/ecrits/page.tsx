import postsData from "@/data/posts.json";
import PostCard from "@/components/ui/PostCard";
import type { PostItem } from "@/lib/types";

const posts = postsData as PostItem[];

export default function EcritsPage() {
  return (
    <div className="container-narrow">
      <h1 className="mb-4 text-2xl font-semibold">Écrits</h1>
      <div className="grid gap-3">
        {posts.map((p) => (<PostCard key={p.title} post={p} />))}
      </div>
    </div>
  );
}
