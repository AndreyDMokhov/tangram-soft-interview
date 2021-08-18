import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {DeleteEmployeeDialogComponent} from './employees/delete-employee-dialog/delete-employee-dialog.component';
import {AddEmployeeDialogComponent} from './employees/add-employee-dialog/add-employee-dialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { IpAddressComponent } from './ip-address/ip-address.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeDialogComponent,
    DeleteEmployeeDialogComponent,
    IpAddressComponent

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
