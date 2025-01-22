// Define the structure of the data
interface RegisterUserData {
  username: string;
  email: string;
  password: string;
  // Add more fields as needed
}

// Action type constant
export const REGISTER_USER = 'REGISTER_USER';

// Action creator with a specific type
export const registerUser = (data: RegisterUserData) => ({
  type: REGISTER_USER,
  payload: data,
});
