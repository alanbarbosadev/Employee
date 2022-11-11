import { DepartmentService } from './../../services/department.service';
import { Department } from './../../models/department.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-crud',
  templateUrl: './department-crud.component.html',
  styleUrls: ['./department-crud.component.scss'],
})
export class DepartmentCrudComponent implements OnInit {
  departments: Department[] = [];
  department!: Department;

  constructor(
    private router: Router,
    private departmentService: DepartmentService
  ) {}
  ngOnInit(): void {
    this.departmentService.read().subscribe((departments) => {
      this.departments = departments;
      console.log(this.departments);
    });
  }

  navigateToCreateDepartment() {
    this.router.navigate(['department/create']);
  }
}
