import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "app/utils";

const baseUrl = process.env.REACT_APP_API_URL as string;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => ({ url: "/users", method: "GET" }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
