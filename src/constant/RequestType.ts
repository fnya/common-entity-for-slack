export const RequestType = {
  Initialize: 'initialize',
  Login: 'login',
  RegisterUser: 'registerUser',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
