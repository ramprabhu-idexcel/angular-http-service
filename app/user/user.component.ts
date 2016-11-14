/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user.service'
import { PaginatePipe, PaginationControlsCmp, PaginationService, IPaginationInstance } from 'ng2-pagination';


@Component({
    templateUrl: 'app/user/user.component.html',
    pipes: [PaginatePipe],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, PaginationControlsCmp],
    providers: [PaginationService]
})

export class UserComponent implements OnInit{
	constructor(private _userService: UserService) { }
	public users: Array<any>;
    public editing: boolean = false;
    public viewUsers : boolean = true;
    public addUser: boolean = false;

    //set pagination value
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: IPaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };
 
 	ngOnInit(){
 		this.getUsers();
	}

    /*
     set list of alerts per page
     */
    onPageChange(number: number) {
        this.config.currentPage = number;
    }

	getUsers() {
      this._userService.getUsers().subscribe(
          // the first argument is a function which runs on success
              data => { this.users = this.findUsers(data) },
          // the second argument is a function which runs on error
              err => console.error(err),
          // the third argument is a function which runs on completion
          () => console.log(this.users)
      );      
    }


  findUsers(data){
     this.users = data;
     return this.users;
  }

  userLists(){
    return this.users;
  }  

  editUser(user){
    this.editing = true;
    console.log(user);
  }

}
