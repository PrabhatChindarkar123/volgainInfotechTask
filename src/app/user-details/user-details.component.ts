import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';

import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})


export class UserDetailsComponent implements OnInit {
  headers: any;
  tableData: any;
  originalData: any;


  
  constructor( private tableDataService: UserDataServiceService, public dialog: MatDialog) { 
    this.headers = ['Name', 'Email', 'Phone', "Action"]
  }


  ngOnInit(): void {
    this.tableData = this.tableDataService.getUserData()
    this.originalData = this.tableData
  }

  delete(item:any){
    this.tableDataService.deleteUser(item)
  }

  searchUsers(searchKey:any) {
    console.log(searchKey)
    if (searchKey.length > 0) {
      const searchResult=this.tableData.filter( user =>{
        console.log(user)
        if(user.email.includes(searchKey.toLowerCase())){
          console.log("filter",user)
          return user;
        }
      });
      if (searchResult.length > 0) {
        this.tableData = searchResult;
      }
      else{
        this.tableData = [];
      }
    }
    else if (searchKey.length === 0) {
      this.tableData = this.originalData;
    }
  }

  details(item:any) {
    this.dialog.open(CreateUserComponent, {
      data: {
        user : item,
        mode : "view"
      },
    });
  }

  addUser(){
    this.dialog.open(CreateUserComponent, {
      data: {
        mode : "create"
      },
    });
  }


}
