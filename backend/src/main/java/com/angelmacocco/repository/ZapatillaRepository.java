package com.angelmacocco.repository;

import com.angelmacocco.model.Zapatilla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ZapatillaRepository extends JpaRepository<Zapatilla, Long> {

    // Buscar por nombre (contiene, case-insensitive)
    List<Zapatilla> findByNombreContainingIgnoreCase(String nombre);

    // Buscar por marca
    List<Zapatilla> findByMarcaIgnoreCase(String marca);

    // Buscar por categoría
    List<Zapatilla> findByCategoriaIgnoreCase(String categoria);

    // Buscar por precio menor a X
    List<Zapatilla> findByPrecioLessThan(Double precio);

    // Buscar por stock disponible
    List<Zapatilla> findByStockGreaterThan(Integer stock);
    
    Optional<Zapatilla> findByNombre(String nombre);

}


