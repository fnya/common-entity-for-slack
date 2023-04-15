export const RequestType = {
  ChangePassword: 'ChangePassword',
  ChangeUserInformation: 'ChangeUserInformation',
  GetChannels: 'GetChannels',
  GetMessages: 'GetMessages',
  GetMembers: 'GetMembers',
  GetReplies: 'GetReplies',
  GetUserInformation: 'GetUserInformation',
  GetUsersChannels: 'GetUsersChannels',
  Initialize: 'Initialize',
  InitializeUser: 'InitializeUser',
  InitializeUserWithToken: 'InitializeUserWithToken',
  Login: 'Login',
  RefreshToken: 'RefreshToken',
  RegisterTriggers: 'RegisterTriggers',
  RegisterUser: 'RegisterUser',
  RemoveTriggers: 'RemoveTriggers',
  ResetPassword: 'ResetPassword',
  ResetPasswordWithToken: 'ResetPasswordWithToken',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
