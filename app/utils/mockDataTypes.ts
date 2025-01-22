// src/types.ts
export interface Subject {
  id: string;
  name: string;
  level: string;
}

export interface Rating {
  average: number;
  count: number;
}

export interface Teacher {
  id: string;
  name: string;
  experience: number;
  totalMinutesTaught: number;
  subjects: Subject[];
  ratings: Rating;
  joinedDate: string;
}
export interface Student {
  id: string;
  name: string;
  grade: string;
}
export interface TeachersResponse {
  data: {
    teachers: Teacher[];
  };
}
