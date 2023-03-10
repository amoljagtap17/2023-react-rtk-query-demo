import { useGetUsersQuery } from "app/store";

export function UsersList() {
  const { data, isError, isLoading, error } = useGetUsersQuery();

  return <h1>UsersList</h1>;
}
