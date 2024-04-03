import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userDetailsReducer, usersReducer } from './users.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('userDetails', userDetailsReducer),
    StoreModule.forFeature('users', usersReducer),
  ]
})
export class UserDetailsModule {}
