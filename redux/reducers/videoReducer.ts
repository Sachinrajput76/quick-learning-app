// src/redux/reducers/videoReducer.ts

import { Student, Teacher } from "@/app/utils/mockDataTypes";
import { FETCH_STUDENTS, FETCH_TEACHER } from "../actions/videoActions";

// Define Action Types
interface FetchTeacherAction {
  type: typeof FETCH_TEACHER;
}

interface FetchStudentsAction {
  type: typeof FETCH_STUDENTS;
}

interface FetchTeacherSuccessAction {
  type: `${typeof FETCH_TEACHER}_SUCCESS`;
  payload: Teacher; // Use the specific Teacher type
}

interface FetchStudentsSuccessAction {
  type: `${typeof FETCH_STUDENTS}_SUCCESS`;
  payload: Student[]; // Use the specific Student[] type
}

interface FetchFailureAction {
  type: `${typeof FETCH_TEACHER}_FAILURE` | `${typeof FETCH_STUDENTS}_FAILURE`;
  error: string;
}

// Combine Action Types into a Union
type VideoActions =
  | FetchTeacherAction
  | FetchStudentsAction
  | FetchTeacherSuccessAction
  | FetchStudentsSuccessAction
  | FetchFailureAction;

// Initial State Type
interface VideoState {
  teacher: Teacher | null; // Use Teacher type or null if not available
  students: Student[]; // Use Student[] type
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  teacher: null, // Teacher can initially be null
  students: [],
  loading: false,
  error: null,
};

// Reducer function
export const videoReducer = (state = initialState, action: VideoActions): VideoState => {
  switch (action.type) {
    case FETCH_TEACHER:
    case FETCH_STUDENTS:
      return { ...state, loading: true };
    case `${FETCH_TEACHER}_SUCCESS`:
      return { ...state, loading: false, teacher: action.payload };
    case `${FETCH_STUDENTS}_SUCCESS`:
      return { ...state, loading: false, students: action.payload };
    case `${FETCH_TEACHER}_FAILURE`:
    case `${FETCH_STUDENTS}_FAILURE`:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
