import {gql} from 'graphql-request'

const getMeQuery = gql`
   query getMeQuery{
      GetMe{
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

export default getMeQuery