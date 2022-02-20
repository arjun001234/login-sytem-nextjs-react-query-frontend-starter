import { gql } from 'graphql-request'

const createUserMutation = gql`
   mutation createUserMutation($input: UserInput!){
      CreateUser(data: $input){
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

export default createUserMutation