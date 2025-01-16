export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (data: any) => ({
  type: REGISTER_USER,
  payload: data,
});
