import { createAction } from './helpers';
import { ActionsUnion } from './types';

export const LOGOUT = 'LOGOUT';

export const SessionActions = {
  logout: () => createAction(LOGOUT),
};

export type SessionActions = ActionsUnion<typeof SessionActions>;
