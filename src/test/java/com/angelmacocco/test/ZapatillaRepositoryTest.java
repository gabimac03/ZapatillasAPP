package com.angelmacocco.test;


import com.angelmacocco.model.Zapatilla;
import com.angelmacocco.repository.ZapatillaRepository;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ZapatillaRepositoryTest {

    @Autowired
    private ZapatillaRepository zapatillaRepository;

  /*  @Test
    @Order(1)
    public void testGuardarZapatilla() {
        Zapatilla z = new Zapatilla();
        z.setMarca("Nike");
        z.setNombre("Air Max");
        z.setTalle(42);
        z.setPrecio(15000.0);

        Zapatilla guardada = zapatillaRepository.save(z);

        Assertions.assertNotNull(guardada.getId());
    }
/*
    @Test
    @Order(2)
    public void testBuscarTodas() {
        List<Zapatilla> lista = zapatillaRepository.findAll();
        Assertions.assertFalse(lista.isEmpty());
    }
    
    @Test
    @Order(3)
    public void borrarZapatilla(){
        zapatillaRepository.deleteById(1L);
    }*/
    
   /* @Test
    @Order(4)
    
    public void buscarZapatillaPorId() {
    Zapatilla z = new Zapatilla();
    z.setMarca("Nike");
    z.setNombre("Air Max");
    z.setTalle(42);
    z.setPrecio(15000.0);

    Zapatilla guardada = zapatillaRepository.save(z);

    Optional<Zapatilla> encontrada = zapatillaRepository.findById(guardada.getId());

    Assertions.assertTrue(encontrada.isPresent());
    Assertions.assertEquals("Air Max", encontrada.get().getNombre());
}*/
    
    @Test
    @Order(2)
        public void testBuscarTodas() {
            List<Zapatilla> lista = zapatillaRepository.findAll();
            Assertions.assertFalse(lista.isEmpty(), "La lista de zapatillas no debería estar vacía");
        }

    @Test
    @Order(5)
    public void testBuscarPorNombre() {
        List<Zapatilla> zapatillas = zapatillaRepository.findByNombreContainingIgnoreCase("Air Max");
        Assertions.assertFalse(zapatillas.isEmpty(), "No se encontraron zapatillas con el nombre Air Max");
    }
        
        
        
        
        
        
}
