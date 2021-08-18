import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EmployeesService} from "../employees.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeRequest} from "../../entities/employee.request";

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})
export class AddEmployeeDialogComponent {


  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(
    private employeeService: EmployeesService,
    public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeRequest,
    fb: FormBuilder) {

    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

  }

}
