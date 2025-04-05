package com.angelmacocco.test;


import com.angelmacocco.model.Zapatilla;
import com.angelmacocco.repository.ZapatillaRepository;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
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

        
    @BeforeEach
    void limpiarDB() {
            zapatillaRepository.deleteAll();
    }
    
    @Test
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
    }
    
    @Test
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
}

    @Test
    @Order(5)
    public void testBuscarPorNombre() {
        List<Zapatilla> zapatillas = zapatillaRepository.findByNombreContainingIgnoreCase("Air Max");
        Assertions.assertFalse(zapatillas.isEmpty(), "No se encontraron zapatillas con el nombre Air Max");
    }
        
    @Test
    @Order(6)
    public void testActualizarZapatilla() {

        
        Zapatilla z = new Zapatilla();
        z.setNombre("Air Max");
        z.setMarca("Nike");
        z.setDescripcion("Zapatilla deportiva");
        z.setPrecio(15000.0);
        z.setStock(10);
        z.setTalle(42);
        z.setCategoria("Running");
        z.setImagenUrl("url_imagen");

        Zapatilla guardada = zapatillaRepository.save(z);

        guardada.setPrecio(18000.0);
        zapatillaRepository.save(guardada);

        Optional<Zapatilla> actualizada = zapatillaRepository.findById(guardada.getId());
        Assertions.assertTrue(actualizada.isPresent());
        Assertions.assertEquals(18000.0, actualizada.get().getPrecio());
}
        
    @Test
    @Order(999)
    void eliminarTodo() {
    zapatillaRepository.deleteAll();
    }    
   
        
}
