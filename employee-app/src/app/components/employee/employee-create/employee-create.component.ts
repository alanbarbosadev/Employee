import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  employeeCreateForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    departmentId: new FormControl(null, [Validators.required]),
  });

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {}

  registerEmployee(): void {
    let employee: Employee = {
      name: this.employeeCreateForm.value.name,
      surname: this.employeeCreateForm.value.surname,
      salary: this.employeeCreateForm.value.salary,
      birthday: this.employeeCreateForm.value.birthday,
      departmentId: +this.employeeCreateForm.value.departmentId,
    };
    this.employeeService.create(employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}
