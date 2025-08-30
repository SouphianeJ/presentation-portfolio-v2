import postsData from "@/data/posts.json";
import PostCard from "@/components/ui/PostCard";
import type { PostItem } from "@/lib/types";

const posts = postsData as PostItem[];

export default function EcritsPage() {
  return (
    <div className="container-narrow">
      <h1 className="title text-3xl mb-4">Écrits</h1>
      <p className="text-sm text-ink-200 mb-4">Articles & notes sur pédagogie, dev et data.</p>
      <div className="grid gap-3">
        {posts.map((p) => (<PostCard key={p.title} post={p} />))}
      </div>
    </div>
  );
}
