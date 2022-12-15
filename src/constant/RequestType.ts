export const RequestType = {
  ChangePassword: 'ChangePassword',
  ChangeUserInformation: 'ChangeUserInformation',
  GetChannels: 'GetChannels',
  GetMessages: 'GetMessages',
  GetReplies: 'GetReplies',
  GetUserInformation: 'GetUserInformation',
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
