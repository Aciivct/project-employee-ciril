import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../modal/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private baseURL = 'http://localhost:8080/api/employee/';

  getAllEmployes(getAll:string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseURL}`+ getAll);
  }


}
