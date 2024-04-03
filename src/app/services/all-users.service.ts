import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  searchValue: BehaviorSubject<number | undefined>= new BehaviorSubject(undefined as any);

  constructor(private _http:HttpClient ) { }


getAllUsers(pageIndex: number): Observable<any>{
 return this._http.get(`https://reqres.in/api/users?page=${pageIndex}`);
}

getSingleUser(id: number):Observable<any>{
  return this._http.get(`https://reqres.in/api/users/${id}`);
}

  UpdateSearchValue(value: number| undefined){    
return this.searchValue.next(value);
  }
}
