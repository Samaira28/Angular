import { AdminService } from './../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  loanNumber: number;
  header: string;
  admin: Admin ={
    firstName:'',
    lastName:'',
    loanNumber:0,
    address:'',
    loanAmount:0,
    loanType:'',
    loanTerm:0

  };
  constructor(private router:Router,private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
     this.loanNumber = +this.route.snapshot.paramMap.get('loanNumber');
     this.header = this.loanNumber === 0?'Add User': 'Edit User';

    if(this.loanNumber != 0)
    {
      this.admin = this.adminService.onGetAdmin(this.loanNumber);
    }

  }
  onSubmit(form: NgForm)
  {
    //console.log(form.value);
    let admin: Admin = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      loanNumber: form.value.loanNumber,
      address: form.value.address,
      loanAmount: form.value.loanAmount,
      loanType: form.value.loanType,
      loanTerm:form.value.loanTerm,

    }
  
      this.adminService.onAdd(admin);
      this.router.navigateByUrl('/admin');
    }
  
  }
 



