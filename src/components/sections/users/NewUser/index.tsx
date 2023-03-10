import { Button, CircularProgress, Stack } from "@mui/material";
import { useAddUserMutation } from "app/store";
import { getRandomUser } from "app/utils";

export function NewUser() {
  const [addUser, { isLoading, isError }] = useAddUserMutation();

  const onNewUserButtonClick = async () => {
    const newUser = getRandomUser();

    await addUser(newUser).unwrap();
  };

  return (
    <Stack direction="row-reverse">
      <Button
        variant="contained"
        onClick={onNewUserButtonClick}
        startIcon={
          isLoading ? <CircularProgress color="secondary" size={20} /> : null
        }
        disabled={isLoading}
      >
        Add New User
      </Button>
    </Stack>
  );
}
