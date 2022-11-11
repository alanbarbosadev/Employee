import { DepartmentEditComponent } from './components/department/department-edit/department-edit.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
import { DepartmentCrudComponent } from './views/department-crud/department-crud.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { DepartmentCreateComponent } from './components/department/department-create/department-create.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'employees',
    component: EmployeeCrudComponent,
  },
  {
    path: 'departments',
    component: DepartmentCrudComponent,
  },
  {
    path: 'employee/create',
    component: EmployeeCreateComponent,
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeEditComponent,
  },
  {
    path: 'department/create',
    component: DepartmentCreateComponent,
  },
  {
    path: 'department/edit',
    component: DepartmentEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
