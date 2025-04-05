package com.angelmacocco.service;

import com.angelmacocco.model.Zapatilla;
import com.angelmacocco.repository.ZapatillaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ZapatillaService {

    private final ZapatillaRepository repository;

    @Autowired
    public ZapatillaService(ZapatillaRepository repository) {
        this.repository = repository;
    }

    // Obtener todas las zapatillas
    public List<Zapatilla> findAll() {
        return repository.findAll();
    }

    // Obtener una zapatilla por ID
    public Optional<Zapatilla> findById(Long id) {
        return repository.findById(id);
    }

    // Crear una zapatilla nueva
    public Zapatilla create(Zapatilla zapatilla) {
        return repository.save(zapatilla);
    }

    // Actualizar una zapatilla existente
    public Optional<Zapatilla> update(Long id, Zapatilla updated) {
        return repository.findById(id).map(z -> {
            z.setNombre(updated.getNombre());
            z.setDescripcion(updated.getDescripcion());
            z.setMarca(updated.getMarca());
            z.setCategoria(updated.getCategoria());
            z.setPrecio(updated.getPrecio());
            z.setStock(updated.getStock());
            z.setImagenUrl(updated.getImagenUrl());
            return repository.save(z);
        });
    }

    // Eliminar una zapatilla por ID
    public boolean delete(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    // --- Métodos de búsqueda avanzada ---

    public List<Zapatilla> buscarPorNombre(String nombre) {
        return repository.findByNombreContainingIgnoreCase(nombre);
    }

    public List<Zapatilla> buscarPorMarca(String marca) {
        return repository.findByMarcaIgnoreCase(marca);
    }

    public List<Zapatilla> buscarPorCategoria(String categoria) {
        return repository.findByCategoriaIgnoreCase(categoria);
    }

    public List<Zapatilla> buscarPorPrecioMenorA(double precio) {
        return repository.findByPrecioLessThan(precio);
    }

    public List<Zapatilla> buscarConStockDisponible() {
        return repository.findByStockGreaterThan(0);
    }
}
