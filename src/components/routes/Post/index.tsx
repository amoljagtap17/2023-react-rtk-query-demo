import { Stack } from "@mui/material";
import { NewPost, PostList, PostListByUserId } from "components/sections";
import { useSearchParams } from "react-router-dom";

export default function PostPage() {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");

  return (
    <Stack direction="column" spacing={4}>
      {userId ? <NewPost userId={userId} /> : <></>}
      {userId ? <PostListByUserId userId={userId} /> : <PostList />}
    </Stack>
  );
}
