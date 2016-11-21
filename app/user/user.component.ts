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

    private user_ids: Array = [];
    public messageBlue: boolean = false;
 
 	ngOnInit(){
        console.log(localStorage.getItem('currentUser'));
 		this.getUsers();
	}

    /*
     set list of alerts per page
     */
    onPageChange(number: number) {
        this.config.currentPage = number;
    }

	/*
	 * Collect users
	 */
    getUsers() {
        $.blockUI();
        this._userService.getUsers().subscribe(
            data => { this.users = data },
            err => console.error(err),
            () => $.unblockUI()
        );
    }

    /*
     * Delete users
     */
    deleteUsers(){
        if(this.user_ids.length != 0){
            var result = confirm("Are you sure want to delete?");
            if(result){
                $.blockUI();
                var json = JSON.stringify({ user_ids: this.user_ids });
                this._userService.deleteUsers(json).subscribe(
                        data => { this.users = data },
                        err => console.error(err),
                    () => $.unblockUI()
                );
                this.messageBlue = false;
            }
        }  
        else{
            this.messageBlue = true;
        }         
    }

    /*
     * Delete single user
     */
    deleteUser(id){   
        var result = confirm("Are you sure want to delete?");  
        if(result){
            $.blockUI();
            var json = JSON.stringify({ user_ids: id });           
            this._userService.deleteUsers(json).subscribe(
                data => { this.users = data },
                err => console.error(err),
            () => $.unblockUI()
            );
        }           
    }

    /*
     * Select/Unselect users from the list
     */
    onChange(userId,flag){
        if(flag){
            this.user_ids.push(userId);
        }
        else{
            var index = this.user_ids.indexOf(userId);
            if (index > -1) {
                this.user_ids.splice(index, 1);
            }
        }
        return this.user_ids;
    }

    /*
     * Select all users
     */
    toggleAll(event){
        alert(event);
    }
}
