package com.bookstore.domain.security;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "user_role")
public class UserRole implements Serializable{

    private static final long serialVersionUID = 89235325L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userRoleId;

}