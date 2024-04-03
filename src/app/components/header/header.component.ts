import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllUsersService } from 'src/app/services/all-users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnDestroy{



  searchKey?:number

constructor(private _allUsersService: AllUsersService){}


setSearchValue(){
  this._allUsersService.UpdateSearchValue(this.searchKey);
}

ngOnDestroy(): void {

  this.searchKey = undefined;
  this._allUsersService.UpdateSearchValue(this.searchKey);
}
}
