import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainUser, User } from 'src/app/interfaces/user';
import { AllUsersService } from 'src/app/services/all-users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy{
  allUsers: User[] = [];
searchKey: number | undefined;
subObject: any = {};

constructor(private _allUsersService: AllUsersService){}
  

ngOnInit(): void {

  this.getUsers();
  this.updateSearchValue();
}


getUsers(){
 this.subObject['getUsers'] = this._allUsersService.getAllUsers(1).subscribe({
    next: (res)=>{
      this.allUsers = res.data.map((item : MainUser)=> ({
        data: {
          id: item.id,
          email: item.email,
          first_name: item.first_name,
          last_name: item.last_name,
          avatar: item.avatar
        },
        support: {
          url: '',
          text: ''
        }
      }));
      
    },
    error:(err)=>{
      console.log(err);
      
    }
    
  })
}

updateSearchValue(){
this.subObject['updateSearchValue'] = this._allUsersService.searchValue.subscribe((res)=>{
  this.searchKey = res;
});
}

onPageChange(event: any) {
  const pageIndex = event.pageIndex+1;

  this.subObject['changePage'] =  this._allUsersService.getAllUsers(pageIndex).subscribe({
    next: (res) => {
      this.allUsers = res.data.map((item : MainUser)=> ({
        data: {
          id: item.id,
          email: item.email,
          first_name: item.first_name,
          last_name: item.last_name,
          avatar: item.avatar
        },
        support: {
          url: '', 
          text: '' 
        }
      }));
      
    },
    error: (err) => {
      console.log(err);
    }
  });
}

ngOnDestroy(): void {
  Object.keys(this.subObject).forEach((key) => {
    this.subObject[key].unsubscribe();
  });
}
}



