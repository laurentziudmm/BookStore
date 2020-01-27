package com.bookstore.domain.security;

import java.io.Serializable;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority, Serializable {

    private static final long serialVersionUID = 123456L;

    private final String authority;

    public Authority(final String authority) {

        this.authority = authority;

    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
