// app/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
    }
  }
`;

export const GET_TEACHERS = gql`
  query GetTeachers {
    teachers {
      id
      name
      experience
      totalMinutesTaught
    }
  }
`;
