import { REGISTER_USER } from './actions';

const initialState = {
  user: null,
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
