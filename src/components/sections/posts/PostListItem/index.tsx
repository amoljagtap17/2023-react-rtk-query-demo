import { Button, ListItem, ListItemText } from "@mui/material";
import { iPost } from "app/types";
import { useNavigate } from "react-router-dom";

interface iPostListItemProps {
  post: iPost;
}

export function PostListItem({ post }: iPostListItemProps) {
  const { id, title, createdAt } = post;
  const navigate = useNavigate();

  return (
    <ListItem
      secondaryAction={
        <Button size="small" onClick={() => navigate(`/posts/${id}`)}>
          Read more
        </Button>
      }
    >
      <ListItemText
        primary={title}
        secondary={new Date(createdAt).toLocaleDateString()}
      />
    </ListItem>
  );
}
