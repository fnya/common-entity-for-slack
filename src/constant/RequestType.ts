export const RequestType = {
  ChangePassword: 'ChangePassword',
  GetChannels: 'GetChannels',
  GetMessages: 'GetMessages',
  GetReplies: 'GetReplies',
  GetUsersChannels: 'GetUsersChannels',
  Initialize: 'Initialize',
  InitializeUser: 'InitializeUser',
  InitializeUserWithToken: 'InitializeUserWithToken',
  Login: 'Login',
  RefreshToken: 'RefreshToken',
  RegisterUser: 'RegisterUser',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
