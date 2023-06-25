import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  tableData = [
    {name:"James",email:"james@gmail.com", phoneNum: '8586345623', address:'Mumbai' },
    {name:"Clara",email:"clara@gmail.com", phoneNum: '8656342424', address:'Pune' },
    {name:"Wayne",email:"wayne@gmail.com", phoneNum: '4535363633', address:'Delhi' },
    {name:"Maya",email:"maya@gmail.com", phoneNum: '7876563498', address:'Pune' },
  ]

  constructor() { }

  getUserData(){
    return this.tableData;
  }

  createUser(data:any){
    this.tableData.push(data)
  }

  deleteUser(index:number){
    this.tableData.splice(index, 1)
  }
  
}
