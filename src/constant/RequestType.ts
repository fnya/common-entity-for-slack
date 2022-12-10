export const RequestType = {
  Initialize: 'initialize',
  Login: 'login',
  RegisterUser: 'registerUser',
  Refresh: 'refresh',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
