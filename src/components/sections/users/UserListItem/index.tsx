import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { iUser } from "app/types";
import { useNavigate } from "react-router-dom";

interface iUserListItemProps {
  user: iUser;
}

export function UserListItem({ user }: iUserListItemProps) {
  const { firstName, lastName, email, avatar, id } = user;
  const navigate = useNavigate();

  return (
    <Card
      sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}
    >
      <Box>
        <CardContent>
          <Typography component="div" variant="h5">
            {firstName}, {lastName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {email}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={() => navigate(`posts?userId=${id}`)}>
            See all posts
          </Button>
        </CardActions>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 150, borderRadius: "50%" }}
        image={avatar}
        alt={`${firstName}, ${lastName}`}
      />
    </Card>
  );
}
