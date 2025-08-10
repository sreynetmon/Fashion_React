
import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
    reducerPath: "auth",
    endpoints: (build) =>({
        login: build.mutation({
            query:({useLogin}) =>({
                url: 'login',
                method: "POST",
                body: JSON.stringify({email, password})
            })
        })
    })
})

export const{
    useLoginMutation
} = authApi;