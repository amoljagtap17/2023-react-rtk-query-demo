import { createApi } from "@reduxjs/toolkit/query/react";
import { iUser } from "app/types";
import { axiosBaseQuery } from "app/utils";

const baseUrl = process.env.REACT_APP_API_URL as string;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<iUser[], void>({
      query: () => ({ url: "/users", method: "GET" }),
    }),
    addUser: builder.mutation<iUser, Omit<iUser, "id">>({
      query: (data) => ({ url: "/users", method: "POST", data }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
