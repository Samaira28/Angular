import { Admin } from 'src/app/models/admin.model';
import { AdminService } from './../../admin.service';
//import { Admin } from './../../models/admin.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PipesModule } from 'pipes-module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
//   loanNumber: number;
//   header: string;
//   admin: Admin ={
//     firstName:'',
//     lastName:'',
//     loanNumber:0,
//     address:'',
//     loanAmount:0,
//     loanType:'',
//     loanTerm:0

//   };
//   constructor(private router:Router,private route: ActivatedRoute, private adminService: AdminService) { }

//   ngOnInit(): void {
//      this.loanNumber = +this.route.snapshot.paramMap.get('loanNumber');
//      this.header = this.loanNumber === 0?'Add User': 'Edit User';

//     if(this.loanNumber != 0)
//     {
//       this.admin = this.adminService.onGetAdmin(this.loanNumber);
//     }

//   }
//   onSubmit(form: NgForm)
//   {
//     //console.log(form.value);
//     let admin: Admin = {
//       firstName: form.value.firstName,
//       lastName: form.value.lastName,
//       loanNumber: form.value.loanNumber,
//       address: form.value.address,
//       loanAmount: form.value.loanAmount,
//       loanType: form.value.loanType,
//       loanTerm:form.value.loanTerm,

//     }
//     // if(this.loanNumber === 0)
//     // {
//     //   this.adminService.onAdd(admin);
//     //   //this.router.navigateByUrl('/admin');
//     // }
//     // else{
//       this.adminService.onUpdate(admin);
//     this.router.navigateByUrl('/admin');
//   }
//   // if(this.loanNumber !=0)
//   //   {
//   //     this.adminService.onUpdate(admin);
//   //     //this.router.navigateByUrl('/admin');
//   //   }
//   //   else{
//   //     this.router.navigateByUrl('/admin');
      
//   //   }
//   //   this.router.navigateByUrl('/admin');
//   // }


// }
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
  console.log(form.value);
  let admin: Admin = {
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    loanNumber: form.value.loanNumber,
    address: form.value.address,
    loanAmount: form.value.loanAmount,
    loanType: form.value.loanType,
    loanTerm:form.value.loanTerm

  }

    //this.adminService.onAdd(admin);
    //this.router.navigateByUrl('/admin');
    this.adminService.onUpdate(admin);
    this.router.navigateByUrl('/admin');
  }

}