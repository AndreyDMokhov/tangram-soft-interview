import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {EmployeeResponse} from "../entities/employee.response";
import {EmployeesService} from "./employees.service";
import {flatMap, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeesRefreshService {

  private currentEmployeesSubject: BehaviorSubject<Array<EmployeeResponse>> = null;

  constructor(private employeesService: EmployeesService) { }


  public getEmployees$(initialEmployees: Array<EmployeeResponse>): Observable<Array<EmployeeResponse>> {
    if (this.currentEmployeesSubject === null) {
      this.currentEmployeesSubject = new BehaviorSubject<Array<EmployeeResponse>>(initialEmployees);
    }

    return this.currentEmployeesSubject.asObservable();
  }

  public refreshEmployees(): void {
    this.employeesService.getEmployees()
      .pipe(
        tap(employees => this.currentEmployeesSubject.next(employees)),
      )
      .subscribe()
  }
}
