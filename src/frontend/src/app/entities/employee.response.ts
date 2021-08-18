export interface EmployeeResponse {
  id?: number;
  passId?: number;
  firstName?: string;
  lastName?: string;
  experience?: string;
}


export class EmployeeResponse implements EmployeeResponse {

  constructor(
    public id?: number,
    public passId?: number,
    public firstName?: string,
    public lastName?: string,
    public experience?: string
  ) {
  }
}
