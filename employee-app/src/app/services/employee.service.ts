import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = 'https://localhost:7006/api/Employee';

  constructor(private http: HttpClient) {}

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  read(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  readById(id: string): Observable<Employee> {
    const url = `${this.baseUrl}/ById/${id}`;
    return this.http.get<Employee>(url);
  }

  update(employee: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  delete(id: string): Observable<Employee> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Employee>(url);
  }
}
