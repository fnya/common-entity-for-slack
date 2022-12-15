export const DeletedUser = {
  Id: 'UnKnown',
  Name: '削除されたユーザー',
} as const;

// eslint-disable-next-line no-redeclare
export type DeletedUser = typeof DeletedUser[keyof typeof DeletedUser];
