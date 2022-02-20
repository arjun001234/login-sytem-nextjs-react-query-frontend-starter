
import { ClientError } from "graphql-request"
import toast from "react-hot-toast"
import { useQuery, useQueryClient } from "react-query"
import fetchGetMe from "../graphql/fetching/fetchGetMe"
import { User } from "../graphql/generated/types"
import { getMeKey } from "../graphql/keys/key"

const useGetMe = () => {
    const client = useQueryClient()
   return useQuery<User,ClientError>(getMeKey(),() => fetchGetMe(),{
       onError: (error) => {
           if (error.response.errors){
                client.removeQueries(getMeKey())
                toast.error(error.response.errors[0].message)
           }
       }
   })
}

export default useGetMe