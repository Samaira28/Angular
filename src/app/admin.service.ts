import { Admin } from './models/admin.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admins: Admin[] = [
    {
      firstName: "samaira",
      lastName:"Baronia",
      loanNumber:1001,
      address:"Singhwaini",
      loanAmount:1234,
      loanType:"Home Loan",
      loanTerm:8
    },
    {
      firstName: "Soniprati",
      lastName:"Soni",
      loanNumber: 1002,
      address:"Katra",
      loanAmount:150000,
      loanType:"Home Loan",
      loanTerm:1
    },

    {
      firstName: "Sparsh",
      lastName:"Rawat",
      loanNumber:1003,
      address:"Padav",
      loanAmount:12346,
      loanType:"Home Loan",
      loanTerm:1
    },

    {
      firstName: "Yash",
      lastName:"Gupta",
      loanNumber: 1004,
      address:"Jabalpur",
      loanAmount:1234364,
      loanType:"Home Loan",
      loanTerm:15
    }


  ];
  constructor() { }

  onGet()
  {
    return this.admins;
  }
  onAdd(admin: Admin)
  {
    this.admins.push(admin);
  }
  onDelete(loanNumber: Number)
  {
    let admin = this.admins.find(x=>x.loanNumber === loanNumber); // finding the id we have sent.
    let index = this.admins.indexOf(admin,0);
    this.admins.splice(index,1);
  }
  onGetAdmin(loanNumber: Number)
  {
    return this.admins.find(x=>x.loanNumber === loanNumber);

  }
  onUpdate(admin: Admin)
  {
    let findAdmin = this.admins.find(x=>x.loanNumber === admin.loanNumber); 
    
    findAdmin.loanAmount = admin.loanAmount;
    findAdmin.loanType = admin.loanType;// finding the id we have sent.
    findAdmin.loanTerm = admin.loanTerm;

  }
    
  
}
