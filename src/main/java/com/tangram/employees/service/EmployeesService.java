package com.tangram.employees.service;


import com.tangram.employees.dto.EmployeeResponseDTO;
import com.tangram.employees.dto.EmployeeRequestDTO;

import java.util.List;

public interface EmployeesService {

    EmployeeResponseDTO createEmployee(EmployeeRequestDTO employee);
    void deleteEmployeeByPassId(Integer passId);
    List<EmployeeResponseDTO> getEmployeeList();

}
