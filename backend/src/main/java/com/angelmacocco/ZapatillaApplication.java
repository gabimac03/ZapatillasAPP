package com.angelmacocco;

import com.angelmacocco.repository.RolRepository;
import com.angelmacocco.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ZapatillaApplication {
    public static void main(String[] args) {
        SpringApplication.run(ZapatillaApplication.class, args);
    }
    
    @Bean
    CommandLineRunner init(RolRepository rolRepo, UsuarioRepository userRepo, PasswordEncoder encoder) {
        return args -> {
            // Aquí va el código para crear los roles y usuarios
        };
    }

}
