package com.bookstore.repository;

import java.util.List;

import com.bookstore.domain.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User , Long>{

    //CrudRepository
    //Interface for generic CRUD operations on a repository for a specific type.

    User findByUsername(String username);
    User findByEmail(String email);
    List<User> findAll();
}