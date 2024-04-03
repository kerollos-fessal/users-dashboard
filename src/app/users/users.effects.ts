import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AllUsersService } from '../services/all-users.service';
import * as UsersActions from './users.actions';
import * as UserDetailsActions from './users.actions'; // Import user details actions

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() =>
        this.allUsersService.getAllUsers(1).pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDetailsActions.loadUserDetails),
      switchMap(({ userId }) =>
        this.allUsersService.getSingleUser(userId).pipe(
          map((userDetails) => UserDetailsActions.loadUserDetailsSuccess({ userDetails })),
          catchError((error) => of(UserDetailsActions.loadUserDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private allUsersService: AllUsersService
  ) {}
}
