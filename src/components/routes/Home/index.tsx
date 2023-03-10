import { Stack } from "@mui/material";
import { NewUser, UsersList } from "components/sections";

export default function HomePage() {
  return (
    <Stack direction="column" spacing={4}>
      <NewUser />
      <UsersList />
    </Stack>
  );
}
