package com.epicode.GestioneSalone.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epicode.GestioneSalone.security.entity.ERole;
import com.epicode.GestioneSalone.security.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
