import { gql } from 'graphql-request'

const googleLoginMutation = gql`
   mutation googleLoginMutation {
      GoogleLogin { 
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

export default googleLoginMutation