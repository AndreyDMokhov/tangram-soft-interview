package com.tangram.employees.controller;

import com.tangram.employees.dto.EmployeeResponseDTO;
import com.tangram.employees.dto.EmployeeRequestDTO;
import com.tangram.employees.service.EmployeesService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class EmployeesController {

    private final EmployeesService employeesService;

    @GetMapping("/employees")
    public List<EmployeeResponseDTO> getEmployees() {
        return employeesService.getEmployeeList();
    }

    @PostMapping("/employees")
    public EmployeeResponseDTO createEmployee(@RequestBody EmployeeRequestDTO employee) {
        return employeesService.createEmployee(employee);
    }

    @DeleteMapping("/employees/{passId}")
    public void deleteEmployee(@PathVariable("passId") Integer passId) {
        employeesService.deleteEmployeeByPassId(passId);
    }
}
