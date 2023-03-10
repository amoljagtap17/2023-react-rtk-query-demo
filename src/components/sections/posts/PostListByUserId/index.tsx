import { Box, List } from "@mui/material";
import { useGetPostsByUserIdQuery } from "app/store";
import { CircularProgress } from "components/lib";
import { PostListItem } from "components/sections";

interface iPostListByUserIdProps {
  userId: string;
}

export function PostListByUserId({ userId }: iPostListByUserIdProps) {
  const { data, isError, isLoading, isFetching } =
    useGetPostsByUserIdQuery(userId);

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
