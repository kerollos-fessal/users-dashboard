import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: any }>());
export const loadUserDetails = createAction('[User Details] Load User', props<{ userId: number }>());
export const loadUserDetailsSuccess = createAction('[User Details] Load User Success', props<{ userDetails: User }>());
export const loadUserDetailsFailure = createAction('[User Details] Load User Failure', props<{ error: any }>());
