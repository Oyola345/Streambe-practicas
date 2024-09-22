import React, { useState } from 'react';

// Componente principal
const Calculadora = () => {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState(null);
    const [numeroMostrado, setNumeroMostrado] = useState(null);

    // Función para calcular el cuadrado del número
    const calcularCuadrado = () => {
        const num = parseFloat(numero);
        if (!isNaN(num)) {
            setResultado(num * num);
            setNumeroMostrado(num); // Actualiza el número mostrado solo al presionar el botón
        } else {
            setResultado(null);
            setNumeroMostrado(null); // Limpia el número mostrado si no es válido
        }
    };

    return (
        <div>
            {/* Input para ingresar el número */}
            <input 
                type="number" 
                value={numero} 
                onChange={(e) => setNumero(e.target.value)} 
                placeholder="Ingresa un número" 
            />
            {/* Botón para calcular el cuadrado */}
            <button onClick={calcularCuadrado}>Calcular Cuadrado</button>
            {/* Mostrar el resultado solo si se ha calculado */}
            {resultado !== null && (
                <h2>El cuadrado de {numeroMostrado} es {resultado}</h2>
            )}
        </div>
    );
};

// Exportar el componente para usarlo en otras partes de la aplicación
export default Calculadora;
