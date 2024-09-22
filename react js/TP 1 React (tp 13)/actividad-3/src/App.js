import React, { useState } from "react";
import "./App.css"; // Asegúrate de importar el CSS

function App() {
  const [productos] = useState([
    { id: 1, nombre: "Alfombra", precio: 10 },
    { id: 2, nombre: "Mantel", precio: 15 },
    { id: 3, nombre: "Banqueta", precio: 20 },
    { id: 4, nombre: "Silla", precio: 25 },
    { id: 5, nombre: "Mesa", precio: 30 },
  ]);

  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...existe, cantidad: existe.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const modificarCantidad = (id, cantidad) => {
    if (cantidad < 1) return; // No permitir cantidades menores a 1
    setCarrito(
      carrito.map((item) => (item.id === id ? { ...item, cantidad } : item))
    );
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const calcularPrecioTotal = () => {
    return carrito
      .reduce((total, item) => total + item.precio * item.cantidad, 0)
      .toFixed(2);
  };

  const realizarCompra = () => {
    const total = calcularPrecioTotal();
    if (total > 0) {
      alert(`Ha realizado su compra de ${total} pesos. Gracias ¡Vuelva pronto!`);
      setCarrito([]); // Vaciar el carrito después de la compra
    } else {
      alert("El carrito está vacío.");
    }
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregarProducto(producto)}>Agregar</button>
          </li>
        ))}
      </ul>

      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio} x
            <input
              type="number"
              value={item.cantidad}
              onChange={(e) =>
                modificarCantidad(item.id, parseInt(e.target.value))
              }
              min="1"
            />
            <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2 className="precio-total">Precio Total: ${calcularPrecioTotal()}</h2>
      <button className="boton-comprar" onClick={realizarCompra}>
        Comprar
      </button>
    </div>
  );
}

export default App;
