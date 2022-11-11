import { LoaderService } from './../../../services/loader.service';
import { EmployeeService } from './../../../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import * as moment from 'moment';

@Component({
  selector: 'app-department-employee-list',
  templateUrl: './department-employee-list.component.html',
  styleUrls: ['./department-employee-list.component.scss'],
})
export class DepartmentEmployeeListComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id')!;
  employees: Employee[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    console.log(this.id);
    this.employeeService.read().subscribe((employees) => {
      this.employees = employees.filter((x) => x.departmentId == +this.id);
      console.log(this.employees);
    });
  }

  navigateToDepartments(): void {
    this.router.navigate(['/departments']);
  }

  formattedBirthday(date: Date): string {
    return moment(date).format('DD-MM-YYYY');
  }
}
