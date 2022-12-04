export const HttpStatusCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVIDE_UNAVAILABLE: 503,
} as const;

// eslint-disable-next-line no-redeclare
export type HttpStatusCode = typeof HttpStatusCode[keyof typeof HttpStatusCode];
