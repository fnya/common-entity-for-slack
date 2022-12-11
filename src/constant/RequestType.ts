export const RequestType = {
  GetChannels: 'GetChannels',
  Initialize: 'Initialize',
  InitializeUser: 'InitializeUser',
  InitializeUserWithToken: 'InitializeUserWithToken',
  Login: 'Login',
  RefreshToken: 'RefreshToken',
  RegisterUser: 'RegisterUser',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
