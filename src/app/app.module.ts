import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ErrorsComponent } from './shared/errors/errors.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpsInterceptor } from './shared/https.interceptor';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/users.effects';
import { usersReducer } from './users/users.reducer';
import { UserDetailsModule } from './users/user-details.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    SearchPipe,
    SingleUserComponent,
    ErrorsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UsersEffects]),
    StoreModule.forRoot({}, {}),
    UserDetailsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
