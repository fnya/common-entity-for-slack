export const HttpStatus = {
  BAD_REQUEST: '400 Bad Request.',
  FORBIDDEN: '403 Forbidden.',
  INTERNAL_SERVER_ERROR: '500 Internal Server Error.',
  NOT_FOUND: '404 Not Found.',
  OK: '200 OK.',
  UNAUTHORIZED: '401 Unauthorized.',
} as const;

// eslint-disable-next-line no-redeclare
export type HttpStatus = typeof HttpStatus[keyof typeof HttpStatus];
