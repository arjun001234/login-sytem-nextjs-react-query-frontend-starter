import { gql } from 'graphql-request'

const logoutUserMutation = gql`
   mutation logoutUserMutation {
      Logout {
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

export default logoutUserMutation