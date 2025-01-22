// mocks/teachersMock.ts

import { Teacher } from "../app/utils/mockDataTypes";

export interface TeachersResponse {
  data: {
    teachers: Teacher[];
  };
}

// Mock data with type annotations
export const teachersData: TeachersResponse = {
  data: {
    teachers: [
      {
        id: "1",
        name: "John Doe",
        experience: 10,
        totalMinutesTaught: 10000,
        subjects: [
          {
            id: "101",
            name: "Mathematics",
            level: "High School",
          },
          {
            id: "102",
            name: "Physics",
            level: "High School",
          },
        ],
        ratings: {
          average: 4.8,
          count: 250,
        },
        joinedDate: "2012-08-15",
      },
      {
        id: "2",
        name: "Jane Smith",
        experience: 5,
        totalMinutesTaught: 5000,
        subjects: [
          {
            id: "103",
            name: "Biology",
            level: "Middle School",
          },
        ],
        ratings: {
          average: 4.5,
          count: 120,
        },
        joinedDate: "2017-03-22",
      },
      {
        id: "3",
        name: "Alice Brown",
        experience: 7,
        totalMinutesTaught: 7000,
        subjects: [
          {
            id: "104",
            name: "Chemistry",
            level: "High School",
          },
          {
            id: "105",
            name: "Environmental Science",
            level: "College",
          },
        ],
        ratings: {
          average: 4.9,
          count: 300,
        },
        joinedDate: "2015-09-01",
      },
    ],
  },
};


