import { createApi } from "@reduxjs/toolkit/query/react";
import { iPost } from "app/types";
import { axiosBaseQuery } from "app/utils";

const baseUrl = process.env.REACT_APP_API_URL as string;

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<iPost[], void>({
      query: () => ({ url: "/posts", method: "GET" }),
      providesTags: [{ type: "Post", id: "LIST" }],
    }),
    getPostsByUserId: builder.query<iPost[], string>({
      query: (userId) => ({ url: `/posts?userId=${userId}`, method: "GET" }),
      providesTags: [{ type: "Post", id: "LIST" }],
    }),
    addPost: builder.mutation<iPost, Omit<iPost, "id">>({
      query: (data) => ({ url: "/posts", method: "POST", data }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostsByUserIdQuery,
} = postsApi;
