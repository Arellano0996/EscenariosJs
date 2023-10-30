// El arreglo de números enteros
const numeros = [4, 3, 6, 64, 28, 91, 31];

// Se inicializan las variables para el número mayor y menor
let numMayor = numeros[0];
let numMenor = numeros[0];

// la variable para la suma de los valores
let suma = 0;

//Se recorre el arreglo para encontrar el número mayor, el número menor y calcular la suma
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numMayor) {
        numMayor = numeros[i];
    }
    
    if (numeros[i] < numMenor) {
        numMenor = numeros[i];
    }
    
    suma += numeros[i];
}

// aqui se calcula el promedio
const promedio = suma / numeros.length;

//  Se muestran los resultados en la consola
console.log("Arreglo de números: " + numeros);
console.log("Número Mayor: " + numMayor);
console.log("Número Menor: " + numMenor);
console.log("Promedio: " + promedio);
