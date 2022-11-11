import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl: string = 'https://localhost:7006/api/Department';

  constructor(private http: HttpClient) {}

  create(department: Department): Observable<Department> {
    return this.http.post<Department>(this.baseUrl, department);
  }

  read(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl);
  }

  readById(id: string): Observable<Department> {
    const url = `${this.baseUrl}/ById/${id}`;
    return this.http.get<Department>(url);
  }

  update(department: Department): Observable<Department> {
    const url = `${this.baseUrl}/${department.id}`;
    return this.http.put<Department>(url, department);
  }

  delete(id: string): Observable<Department> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Department>(url);
  }
}
