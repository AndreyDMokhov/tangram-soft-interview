package com.tangram.employees.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class EmployeeResponseDTO {
    private final Long id;
    private final Integer passId;
    private final String firstName;
    private final String lastName;
    private final String experience;
}
