import { PostDetail } from "components/sections";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { postId } = useParams();

  return <PostDetail postId={postId || ""} />;
}
