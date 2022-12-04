export const HttpStatus = {
  OK: '200 OK.',
  CREATED: '201 Created.',
  BAD_REQUEST: '400 Bad Request.',
  UNAUTHORIZED: '401 Unauthorized.',
  FORBIDDEN: '403 Forbidden.',
  NOT_FOUND: '404 Not Found.',
  INTERNAL_SERVER_ERROR: '500 Internal Server Error.',
  SERVIDE_UNAVAILABLE: '503 Service Unavailable.',
} as const;

// eslint-disable-next-line no-redeclare
export type HttpStatus = typeof HttpStatus[keyof typeof HttpStatus];
