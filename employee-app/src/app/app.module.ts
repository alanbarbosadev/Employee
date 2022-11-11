import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
import { DepartmentCrudComponent } from './views/department-crud/department-crud.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { DepartmentCreateComponent } from './components/department/department-create/department-create.component';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentEditComponent } from './components/department/department-edit/department-edit.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EmployeeCrudComponent,
    DepartmentCrudComponent,
    EmployeeCreateComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
