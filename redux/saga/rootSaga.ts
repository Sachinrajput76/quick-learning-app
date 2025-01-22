// src/redux/sagas/rootSaga.ts

import { call, put, takeEvery } from 'redux-saga/effects';
import { ApolloQueryResult } from '@apollo/client';
import { client } from '@/app/graphql/apolloClient'; // Apollo Client instance
import { GET_TEACHERS, GET_TEACHER_DETAILS } from '../../app/graphql/queries'; // Import queries
import { FETCH_TEACHER, FETCH_STUDENTS } from '../actions/videoActions';

// Define the data structure of the API response
interface TeacherData {
  teacher: {
    id: string;
    name: string;
    experience: number;
    totalMinutesTaught: number;
  }[];
}

interface StudentData {
  students: {
    id: string;
    name: string;
  }[];
}

// Define return types for saga generator functions
function* fetchTeacher(): Generator<
  unknown,
  void,
  ApolloQueryResult<{ teacher: TeacherData }>
> {
  try {
    // Apollo Client query for teacher data
    const response = yield call(client.query, { query: GET_TEACHERS });
    const data = response.data.teacher;
    yield put({ type: FETCH_TEACHER, payload: data });
  } catch (error) {
    console.error('Failed to fetch teacher data', error);
  }
}

function* fetchStudents(): Generator<
  unknown,
  void,
  ApolloQueryResult<{ students: StudentData }>
> {
  try {
    // Apollo Client query for students data
    const response = yield call(client.query, { query: GET_TEACHER_DETAILS });
    const data = response.data.students;
    yield put({ type: FETCH_STUDENTS, payload: data });
  } catch (error) {
    console.error('Failed to fetch students data', error);
  }
}

export default function* rootSaga(): Generator {
  yield takeEvery(FETCH_TEACHER, fetchTeacher);
  yield takeEvery(FETCH_STUDENTS, fetchStudents);
}
