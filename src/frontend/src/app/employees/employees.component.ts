import {Component, OnInit} from '@angular/core';
import {EmployeeResponse} from "../entities/employee.response";
import {EmployeesService} from "./employees.service";
import {MatDialog} from '@angular/material/dialog';
import {EmployeeRequest} from "../entities/employee.request";
import {NEVER, Observable, of} from "rxjs";
import {catchError, flatMap, tap} from "rxjs/internal/operators";
import {DeleteEmployeeDialogComponent} from "./delete-employee-dialog/delete-employee-dialog.component";
import {EmployeesRefreshService} from "./employees-refresh.service";
import {AddEmployeeDialogComponent} from "./add-employee-dialog/add-employee-dialog.component";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeInput: EmployeeRequest = {};
  isLoading = true;


  selectedEmployeeId?: number;
  displayedColumns: string[] = ['passId', 'firstName', 'lastName', 'experience'];

  employees$: Observable<Array<EmployeeResponse>> = NEVER;

  constructor(private employeesService: EmployeesService,
              private employeesRefreshService: EmployeesRefreshService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employees$ = this.employeesService.getEmployees()
      .pipe(
        flatMap(e => this.employeesRefreshService.getEmployees$(e)),
        tap(() => this.isLoading = false),
        catchError((error: HttpErrorResponse) => {
          this.displayError(error);
          return of([]);
        })
      )
  }

  openDialogAdd(): void {
    const config = {
      width: '1000px',
      data: this.employeeInput
    };

    this.dialog
      .open(AddEmployeeDialogComponent, config)
      .afterClosed()
      .subscribe(data => {
          if (data) {
            this.employeesService
              .createEmployee(data)
              .subscribe(() => {
                  this.isLoading = true;
                  this.employeesRefreshService.refreshEmployees();
                },
                (error: HttpErrorResponse) => {
                  this.displayError(error);
                });
          }
        },
        (error: HttpErrorResponse) => this.displayError(error));
  }

  openDialogDelete(): void {
    const config = {
      width: '300px',
      data: {message: "Are you sure?"}
    };

    this.dialog
      .open(DeleteEmployeeDialogComponent, config)
      .afterClosed()
      .subscribe((_) => {
        if (_) {
          this.employeesService
            .deleteEmployee(this.selectedEmployeeId)
            .subscribe(() => {
                this.isLoading = true;
                this.selectedEmployeeId = null;
                this.employeesRefreshService.refreshEmployees();
              },
              (error: HttpErrorResponse) => this.displayError(error));
        }

      })
  }

  onSelected(id: number) {
    this.selectedEmployeeId = id;
  }

  private displayError(error: HttpErrorResponse): void {
    alert(`Error occurred on ${error.url} call. Reason: ${error.message}`);
    this.isLoading = false;
  }

}


