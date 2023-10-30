// Se define un arreglo de números enteros
const numeros = [3, 6, 1, 8, 4, 2, 13];

// Función para encontrar los valores únicos en el arreglo
function encontrarValoresUnicos(arr) {
    const valoresUnicos = [];
    for (let i = 0; i < arr.length; i++) {
        if (valoresUnicos.indexOf(arr[i]) === -1) {
            valoresUnicos.push(arr[i]);
        }
    }
    return valoresUnicos;
}

// Llama a la función para obtener los valores únicos
const valoresUnicos = encontrarValoresUnicos(numeros);

// Se muestran los valores únicos en la consola
console.log("Arreglo de números: " + numeros);
console.log("Valores Únicos: " + valoresUnicos);

