// src/redux/actions/videoActions.ts

export const FETCH_TEACHER = 'FETCH_TEACHER';
export const FETCH_STUDENTS = 'FETCH_STUDENTS';

export const fetchTeacher = () => ({
  type: FETCH_TEACHER,
});

export const fetchStudents = () => ({
  type: FETCH_STUDENTS,
});
