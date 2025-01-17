import { gql } from "@apollo/client";

// app/graphql/queries.ts
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
    }
  }
`;
