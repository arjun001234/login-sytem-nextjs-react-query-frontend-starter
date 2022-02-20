import { gql } from 'graphql-request'

const loginUserMutation = gql`
   mutation loginUserMutation($input: LoginInput!){
      LoginUser(data: $input){
          id
          firstName
          lastName
          email
          password
          createdAt
          updatedAt
      }
  }
`;

export default loginUserMutation