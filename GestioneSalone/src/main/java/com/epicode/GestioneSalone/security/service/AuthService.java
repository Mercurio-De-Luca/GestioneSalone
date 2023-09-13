package com.epicode.GestioneSalone.security.service;

import com.epicode.GestioneSalone.security.payload.LoginDto;
import com.epicode.GestioneSalone.security.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
