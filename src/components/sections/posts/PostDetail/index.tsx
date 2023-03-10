import { Box, Typography } from "@mui/material";
import { useGetPostQuery } from "app/store";
import { iPost } from "app/types";
import { CircularProgress } from "components/lib";

interface iPostDetailProps {
  postId: string;
}

export function PostDetail({ postId }: iPostDetailProps) {
  const { data, isLoading, isError } = useGetPostQuery(postId);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>error ...</h1>;
  }

  const { title, body } = data as iPost;

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: body }} />
    </Box>
  );
}
