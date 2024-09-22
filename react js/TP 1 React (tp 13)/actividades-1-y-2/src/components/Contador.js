import React, { useState, useEffect } from 'react';
import '../Contador.css'; 

function Contador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(contador => contador + 1);
        }, 1000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, []); // El array vacío asegura que esto solo se ejecute una vez

    return (
        <div>
            <h1>Contador Automático: {contador}</h1>
        </div>
    );
}

export default Contador;
