/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { UserService } from './user.service'


@Component({   
    templateUrl: 'app/user/user.component.html',     
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UserComponent implements OnInit{
	constructor(private _userService: UserService) { }
	public users: Array<any>;
  public editing: boolean = false;
 
 	ngOnInit(){
 		this.getUsers();
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
