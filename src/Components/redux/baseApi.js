import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDecryptedAccessToken } from "../../utils/tokenUtils";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://car-nextjs-api.cheatdev.online",
  prepareHeaders: (headers) => {
    const token = getDecryptedAccessToken();
    console.log("the token at baseQuery: ", token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
});
