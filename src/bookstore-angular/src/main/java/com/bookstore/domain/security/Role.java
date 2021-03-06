package com.bookstore.domain.security;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class Role implements Serializable {

    private static final long serialVersionUID = 8488583L;
    
    //Principle of encapsulation
    @Id
    private int roleId;

    private String name;

    //We must define user role
    @OneToMany(mappedBy = "role" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<UserRole> userRoles = new HashSet<>();

    //Constructor
    public void role() {
    }

    //Public Getter
    public int getRoleId() {
        return roleId;
    }

    //Public Getter
    public void setRoleId(final int roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}
}
