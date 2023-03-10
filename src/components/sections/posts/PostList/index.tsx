import { Box, List } from "@mui/material";
import { useGetPostsQuery } from "app/store";
import { CircularProgress } from "components/lib";
import { PostListItem } from "components/sections";

export function PostList() {
  const { data, isError, isLoading, isFetching } = useGetPostsQuery();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>error ...</h1>;
  }

  const renderPostList = data?.map((post) => (
    <PostListItem post={post} key={post.id} />
  ));

  return (
    <Box>
      <List>{renderPostList}</List>
      {isFetching ? <CircularProgress /> : null}
    </Box>
  );
}
