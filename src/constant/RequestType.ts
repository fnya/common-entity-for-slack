export const RequestType = {
  Initialize: 'initialize',
  Login: 'login',
} as const;

// eslint-disable-next-line no-redeclare
export type RequestType = typeof RequestType[keyof typeof RequestType];
