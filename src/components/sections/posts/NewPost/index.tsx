import { Button, CircularProgress, Stack } from "@mui/material";
import { useAddPostMutation } from "app/store";
import { getRandomPost } from "app/utils";

interface iNewPostProps {
  userId: string;
}

export function NewPost({ userId }: iNewPostProps) {
  const [addPost, { isLoading }] = useAddPostMutation();

  const onNewPostButtonClick = async () => {
    const newPost = getRandomPost(userId as string);

    await addPost(newPost).unwrap();
  };

  return userId ? (
    <Stack direction="row-reverse">
      <Button
        variant="contained"
        onClick={onNewPostButtonClick}
        startIcon={
          isLoading ? <CircularProgress color="secondary" size={20} /> : null
        }
        disabled={isLoading}
      >
        Add New Post
      </Button>
    </Stack>
  ) : null;
}
