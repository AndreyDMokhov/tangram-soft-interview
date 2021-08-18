package com.tangram.employees.repository;

import com.tangram.employees.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    boolean existsByPassportId(Integer passId);
    void deleteByPassportId(Integer passId);
}
