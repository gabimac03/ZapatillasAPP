/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.angelmacocco.controller;

import com.angelmacocco.model.Ventas;
import com.angelmacocco.model.Zapatilla;
import com.angelmacocco.repository.ZapatillaRepository;
import com.angelmacocco.service.VentaService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */
@RestController
@RequestMapping("/api/ventas")
public class VentaController {

    @Autowired
    private ZapatillaRepository zapatillaRepository;

    @PostMapping
    public ResponseEntity<String> realizarVenta(
        @RequestParam String zapatillaNombre,
        @RequestParam int cantidad
    ) {
        Optional<Zapatilla> optionalZapatilla = zapatillaRepository.findByNombre(zapatillaNombre);

        if (optionalZapatilla.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Zapatilla no encontrada");
        }

        Zapatilla zapatilla = optionalZapatilla.get();

        if (zapatilla.getStock() < cantidad) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Stock insuficiente");
        }

        zapatilla.setStock(zapatilla.getStock() - cantidad);
        zapatillaRepository.save(zapatilla);

        return ResponseEntity.ok("Venta registrada y stock actualizado");
    }
}


