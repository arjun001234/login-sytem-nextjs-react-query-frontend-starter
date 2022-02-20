import { getMeKey } from '../../graphql/keys/key';
import { ClientError } from 'graphql-request';
import client from '../../reactQueryClient';
import fetchGetMe from '../../graphql/fetching/fetchGetMe';
import { User } from '../../graphql/generated/types';

const prefetchMe  = async() => {
    await client.prefetchQuery<User,ClientError>(getMeKey(),() => fetchGetMe({}))
};

export default prefetchMe;