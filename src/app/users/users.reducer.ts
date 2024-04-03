import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import * as UserDetailsActions from './users.actions';
import { User } from '../interfaces/user';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: any;
}

export interface UserDetailsState {
  userDetails: User | null;
  loading: boolean;
  error: any;
}

export const initialUsersState: UsersState = {
  users: [],
  loading: false,
  error: null
};

export const initialUserDetailsState: UserDetailsState = {
  userDetails: null,
  loading: false,
  error: null
};

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loadUsers, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const userDetailsReducer = createReducer(
  initialUserDetailsState,
  on(UserDetailsActions.loadUserDetails, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserDetailsActions.loadUserDetailsSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
    loading: false
  })),
  on(UserDetailsActions.loadUserDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
