package com.tangram.employees.service;

import com.tangram.employees.dto.EmployeeResponseDTO;
import com.tangram.employees.dto.EmployeeRequestDTO;
import com.tangram.employees.entity.Employee;
import com.tangram.employees.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class EmployeesServiceImpl implements EmployeesService {

    private final EmployeeRepository employeeRepository;


    @Override
    public EmployeeResponseDTO createEmployee(EmployeeRequestDTO employee) {
        if (employeeRepository.existsByPassportId(employee.getPassId())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Employee with such ID already exists");
        }

        var savedEmployee = employeeRepository.save(Employee.builder()
                .passportId(employee.getPassId())
                .firstName(employee.getFirstName())
                .lastName(employee.getLastName())
                .dateOfStart(employee.getDateOfStart())
                .build());

        return EmployeeResponseDTO.builder()
                .id(savedEmployee.getId())
                .passId(savedEmployee.getPassportId())
                .firstName(savedEmployee.getFirstName())
                .lastName(savedEmployee.getLastName())
                .experience(getExperience(savedEmployee.getDateOfStart()))
                .build();
    }


    @Override
    public void deleteEmployeeByPassId(Integer passId) {
        employeeRepository.deleteByPassportId(passId);
    }

    @Override
    @SneakyThrows
    public List<EmployeeResponseDTO> getEmployeeList() {
        return employeeRepository.findAll()
                .stream()
                .map(e -> EmployeeResponseDTO.builder()
                        .passId(e.getPassportId())
                        .firstName(e.getFirstName())
                        .lastName(e.getLastName())
                        .experience(getExperience(e.getDateOfStart()))
                        .build()
                )
                .collect(Collectors.toList());
    }

    private String getExperience(LocalDate date) {
        LocalDate dateNow = LocalDate.now();
        Period period = Period.between(date, dateNow);
        return getPeriodAsString(period);
    }


    private String getPeriodAsString(Period period) {
        StringBuilder sb = new StringBuilder();
        sb.append(getTimeUnitPeriod(period.getYears(), "year"));
        sb.append(getTimeUnitPeriod(period.getMonths(), "month"));
        sb.append(getTimeUnitPeriod(period.getDays(), "day"));

        return sb.toString().stripTrailing();
    }

    private String getTimeUnitPeriod(Integer unitAmount, String unitName) {
        final String pluralSuffix = "s";
        if (unitAmount <= 0) {
            return "";
        }

        if (unitAmount == 1) {
            return unitAmount + " " + unitName + " ";
        }

        return unitAmount + " " + unitName + pluralSuffix + " ";
    }
}
