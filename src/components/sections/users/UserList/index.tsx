import { Box, Grid } from "@mui/material";
import { useGetUsersQuery } from "app/store";
import { CircularProgress } from "components/lib";
import { UserListItem } from "components/sections";

export function UserList() {
  const { data, isError, isLoading, isFetching } = useGetUsersQuery();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>error ...</h1>;
  }

  const renderUserList = data?.map((user) => (
    <Grid item xs={12} key={user.id}>
      <UserListItem user={user} />
    </Grid>
  ));

  return (
    <Box>
      <Grid container spacing={4}>
        {renderUserList}
      </Grid>
      {isFetching ? <CircularProgress /> : null}
    </Box>
  );
}
