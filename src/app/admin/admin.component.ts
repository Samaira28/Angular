import { Admin } from './../models/admin.model';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins: Admin[];
  filterTerm: any;
  constructor(private router: Router,
    private adminService: AdminService) { }



  ngOnInit(): void {
    this.admins = this.adminService.onGet();
  }
  onDelete(loanNumber: Number)
  {
    this.adminService.onDelete(loanNumber);

  }
  

}
