// app/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_TEACHERS = gql`
  query GetTeachers {
    teachers {
      id
      name
      experience
      totalMinutesTaught
      subjects {
        id
        name
        level
      }
      ratings {
        average
        count
      }
      joinedDate
    }
  }
`;
export const GET_TEACHER_DETAILS = gql`
  query GetTeacherDetails($id: ID!) {
    teacherDetails(id: $id) {
      id
      name
      experience
      subjects
      ratings
      joinedDate
    }
  }
`;