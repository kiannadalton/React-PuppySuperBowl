import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2403-ftb-et-web-pt";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["player"],
  endpoints: (builder) => ({
    // getPlayers
    // getSinglePlayer
    // addPlayer
    // deletePlayer
  }),
});

export const {} = api;
