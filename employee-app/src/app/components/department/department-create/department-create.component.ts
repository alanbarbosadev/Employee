import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss'],
})
export class DepartmentCreateComponent implements OnInit {
  department: Department = {
    name: '',
  };

  constructor(
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {}

  createDepartment(): void {
    this.departmentService.create(this.department).subscribe(() => {
      this.router.navigate(['/departments']);
    });
  }

  cancel() {
    this.router.navigate(['/departments']);
  }
}
