import getMeQuery from '../../graphql/queries/getMe';
import gqlClient from "../../graphql/client"
import { GetMeResponse } from '../../graphql/types/user';

const fetchGetMe = async() => {
    const {GetMe} = await gqlClient.request<GetMeResponse>(getMeQuery)
    return GetMe
};

export default fetchGetMe;