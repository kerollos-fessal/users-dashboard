import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 
  transform(users: User[], searchKey: number | undefined): User[] {
    if (searchKey === undefined || searchKey === null) {
      return users;
    } else {
      return users.filter((user) => user?.data?.id === searchKey);
    }
  }

}
