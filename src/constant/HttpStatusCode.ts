export const HttpStatusCode = {
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404,
  OK: 200,
  UNAUTHORIZED: 401,
} as const;

// eslint-disable-next-line no-redeclare
export type HttpStatusCode = typeof HttpStatusCode[keyof typeof HttpStatusCode];
