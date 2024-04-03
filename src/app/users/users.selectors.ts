import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';
import { UserDetailsState } from './users.reducer'; 

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUserDetailsState = createFeatureSelector<UserDetailsState>('userDetails');

export const selectUsers = createSelector(
  selectUsersState,
  state => state.users
);

export const selectUserDetails = createSelector(
  selectUserDetailsState,
  state => state.userDetails
);
