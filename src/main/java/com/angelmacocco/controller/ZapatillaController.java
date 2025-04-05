package com.angelmacocco.controller;

import com.angelmacocco.model.Zapatilla;
import com.angelmacocco.service.ZapatillaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/zapatillas")
@CrossOrigin(origins = "*")
public class ZapatillaController {

    @Autowired
    private ZapatillaService zapatillaService;

    // Obtener todas
    @GetMapping
    public List<Zapatilla> getAll() {
        return zapatillaService.findAll();
    }

    // Obtener por ID
    @GetMapping("/{id}")
    public ResponseEntity<Zapatilla> getById(@PathVariable Long id) {
        return zapatillaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear
    @PostMapping
    public ResponseEntity<Zapatilla> create(@Valid @RequestBody Zapatilla zapatilla) {
        Zapatilla nueva = zapatillaService.create(zapatilla);
        return ResponseEntity.ok(nueva);
    }

    // Actualizar
    @PutMapping("/{id}")
    public ResponseEntity<Zapatilla> update(@PathVariable Long id, @Valid @RequestBody Zapatilla updated) {
        return zapatillaService.update(id, updated)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Eliminar
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean eliminado = zapatillaService.delete(id);
        return eliminado ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}


