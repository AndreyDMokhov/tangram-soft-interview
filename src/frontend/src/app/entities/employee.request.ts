export interface EmployeeRequest {
  passId?: number;
  firstName?: string;
  lastName?: string;
  dateOfStart?: string;
}

export class EmployeeRequest implements EmployeeRequest {

  constructor(
    public passId?: number,
    public firstName?: string,
    public lastName?: string,
    public dateOfStart?: string) {
  }
}
