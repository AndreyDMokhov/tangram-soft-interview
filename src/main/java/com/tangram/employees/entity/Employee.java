package com.tangram.employees.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder

@Entity
@Table(name = "employee")
public class Employee extends BaseId {

    @Column(name = "passport_id")
    private Integer passportId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_start")
    private LocalDate dateOfStart;

}
