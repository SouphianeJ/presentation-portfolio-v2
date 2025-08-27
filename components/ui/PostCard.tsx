import Card from "./Card";
import Link from "next/link";
import type { PostItem } from "@/lib/types";

export default function PostCard({ post }: { post: PostItem }) {
  return (
    <Card>
      <div className="text-sm">
        {post.type === "curation" ? "Curation" : "Article"} — {" "}
        <Link href={post.url} className="text-mustard underline">
          {post.title}
        </Link>
      </div>
      {post.summary && <p className="text-xs text-ink-300 mt-1">{post.summary}</p>}
    </Card>
  );
}
