import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2403-ftb-et-web-pt";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["player"],
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
      providesTags: ["player"],
    }),
    getSinglePlayer: builder.query({
      query: ({ id }) => `/players/${id}`,
      providesTags: ["player"],
    }),
    addPlayer: builder.mutation({
      query: (body) => ({
        url: "/players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["player"],
    }),
    deletePlayer: builder.mutation({
      query: ({ id }) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["player"],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetSinglePlayerQuery,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = api;
