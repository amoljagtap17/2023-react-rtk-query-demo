import { Stack } from "@mui/material";
import { PostList } from "components/sections";

export default function PostPage() {
  return (
    <Stack direction="column" spacing={4}>
      <PostList />
    </Stack>
  );
}
