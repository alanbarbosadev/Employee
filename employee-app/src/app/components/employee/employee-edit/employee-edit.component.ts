import { LoaderService } from './../../../services/loader.service';
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
  departments: Department[] = [];

  employeeEditForm: FormGroup = new FormGroup({
    id: new FormControl(this.route.snapshot.paramMap.get('id')!, [
      Validators.required,
    ]),
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    departmentId: new FormControl(null, [Validators.required]),
  });

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.departmentService.read().subscribe((departments) => {
      this.departments = departments;
      this.employeeService.readById(id).subscribe((employee) => {
        this.employeeEditForm.patchValue(employee);
        this.employeeEditForm
          .get('birthday')!
          .patchValue(moment(employee.birthday).format('YYYY-MM-DD'));
      });
    });
  }

  updateEmployee(): void {
    const formData = this.employeeEditForm.value;
    let employee: Employee = {
      id: formData.id,
      name: formData.name,
      surname: formData.surname,
      salary: formData.salary,
      birthday: formData.birthday,
      departmentId: formData.departmentId,
    };
    this.employeeService.update(employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
