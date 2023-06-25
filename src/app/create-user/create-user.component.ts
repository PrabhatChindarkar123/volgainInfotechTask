import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{
  userDetailsForm : FormGroup | any;
  user: any;
  mode: any;
  viewMode : boolean = false;

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any, 
  public fb: FormBuilder, 
  public dialogRef: MatDialogRef<CreateUserComponent>,
  private tableDataService: UserDataServiceService) {

  }
  
  ngOnInit(): void {
      
    this.user =  this.data.user
    this.mode = this.data.mode
    console.log(this.mode)
    this.createForm();
    if(this.mode == 'view'){
      this.viewMode = true;
      this.userDetailsForm.disable();
    }
    
  }


  createForm() {
    this.userDetailsForm = this.fb.group({
      name: new FormControl(this.user?.name, Validators.required) ,
      email: new FormControl(this.user?.email, Validators.required),
      phoneNum: new FormControl(this.user?.phoneNum, [Validators.required, Validators.pattern("^[0-9]*$")]),
      address: new FormControl(this.user?.address, Validators.required),
    });
  }

  addUser(){
    console.log(this.userDetailsForm.value)
   this.tableDataService.createUser(this.userDetailsForm.value)  
   this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

}
