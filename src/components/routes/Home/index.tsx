import { Stack } from "@mui/material";
import { NewUser, UserList } from "components/sections";

export default function HomePage() {
  return (
    <Stack direction="column" spacing={4}>
      <NewUser />
      <UserList />
    </Stack>
  );
}
