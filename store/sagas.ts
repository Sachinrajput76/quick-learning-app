import { call, put, takeEvery } from 'redux-saga/effects';
import { REGISTER_USER } from './actions';

function* handleRegisterUser(action: any): any {
  try {
    // Example of sending the registration data to an API
    const response = yield call(fetch, '/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    const data = yield response.json();
    console.log('Registration successful', data);
  } catch (error) {
    console.error('Registration failed', error);
  }
}

export default function* rootSaga() {
  yield takeEvery(REGISTER_USER, handleRegisterUser);
}
