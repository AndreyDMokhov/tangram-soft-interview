package com.tangram.employees.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@AllArgsConstructor
@Data
@Builder
public class EmployeeRequestDTO {

    private final Integer passId;
    private final String firstName;
    private final String lastName;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private final LocalDate dateOfStart;
}
