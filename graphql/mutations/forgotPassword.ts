import { gql } from 'graphql-request'

const forgotPassword = gql`
   mutation forgotPassword($input: String!) {
      ForgotPassword(email: $input) { 
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

export default forgotPassword