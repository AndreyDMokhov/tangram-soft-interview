import {Injectable} from '@angular/core';
import {EmployeeRequest} from "../entities/employee.request";

import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {EmployeeResponse} from "../entities/employee.response";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private SERVER_API_URL = 'api/employees';



  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Array<EmployeeResponse>> {
    return this.http.get<EmployeeResponse[]>(this.SERVER_API_URL);
  }

  createEmployee(employee: EmployeeRequest): Observable<EmployeeResponse> {
    return this.http.post<EmployeeResponse>(this.SERVER_API_URL, employee);
  }

  deleteEmployee(passId: number): Observable<EmployeeRequest> {
    return this.http.delete<EmployeeRequest>(`${this.SERVER_API_URL}/${passId}`);
  }



}
