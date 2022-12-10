export const RequestType = {
  GetChannels: 'getChannels',
  Initialize: 'initialize',
  Login: 'login',
  Refresh: 'refresh',
  RegisterUser: 'registerUser',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
