package org.example.duplo.controllers;

import lombok.RequiredArgsConstructor;
import org.example.duplo.dtos.AuthRequest;
import org.example.duplo.dtos.AuthResponse;
import org.example.duplo.services.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody AuthRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }
}