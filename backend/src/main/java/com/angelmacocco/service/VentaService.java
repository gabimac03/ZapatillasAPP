/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.angelmacocco.service;

import com.angelmacocco.model.Ventas;
import com.angelmacocco.model.Zapatilla;
import com.angelmacocco.repository.VentaRepository;
import com.angelmacocco.repository.ZapatillaRepository;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentaService {

    @Autowired
    private ZapatillaRepository zapatillaRepository;

    @Autowired
    private VentaRepository ventaRepository;

    public Ventas registrarVenta(Long zapatillaId, int cantidad) {
        Zapatilla zapatilla = zapatillaRepository.findById(zapatillaId)
                .orElseThrow(() -> new RuntimeException("Zapatilla no encontrada"));

        if (zapatilla.getStock() < cantidad) {
            throw new RuntimeException("Stock insuficiente");
        }

        zapatilla.setStock(zapatilla.getStock() - cantidad);
        zapatillaRepository.save(zapatilla);

        Ventas venta = new Ventas();
        venta.setZapatillaId(zapatillaId);
        venta.setCantidad(cantidad);
        venta.setFecha(LocalDateTime.now());

        return ventaRepository.save(venta);
    }
}
