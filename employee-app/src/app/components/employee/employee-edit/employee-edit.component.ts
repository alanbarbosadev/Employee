import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Employee } from 'src/app/models/employee.model';
import * as moment from 'moment';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  date: string = '';

  departments: Department[] = [];

  employee: Employee = {
    name: '',
    surname: '',
    salary: 0,
    birthday: new Date(),
    departmentId: 0,
  };

  employeeEditForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    departmentId: new FormControl(null, [Validators.required]),
  });

  currentDepartment: Department = {
    name: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.employeeService.readById(id).subscribe((employee) => {
      this.employee = employee;
      console.log(this.employee);
      this.date = moment(this.employee.birthday).format('YYYY-MM-DD');
    });

    this.departmentService.read().subscribe((departments) => {
      this.departments = departments;
      this.currentDepartment = this.departments.find(
        (x) => x.id == this.employee.departmentId
      )!;
      console.log(this.currentDepartment);
    });
  }

  updateEmployee(): void {
    let employee: Employee = {
      id: this.employee.id,
      name: this.employeeEditForm.value.name,
      surname: this.employeeEditForm.value.surname,
      salary: this.employeeEditForm.value.salary,
      birthday: this.employeeEditForm.value.birthday,
      departmentId: +this.employeeEditForm.value.departmentId,
    };
    this.employeeService.update(employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
