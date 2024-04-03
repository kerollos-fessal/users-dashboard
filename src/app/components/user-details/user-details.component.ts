import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { loadUserDetails } from '../../users/users.actions';
import { selectUserDetails } from '../../users/users.selectors';
import { userDetailsReducer } from '../../users/users.reducer';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userInfo$!: Observable<User | null>;
  actualInfo = {} as User;
  private routeSubscription: Subscription | undefined;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.store.dispatch(loadUserDetails({ userId }));
      this.userInfo$ = this.store.pipe(
        select(selectUserDetails),
        map(userDetails => {
          return userDetails;
        })
      );
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
