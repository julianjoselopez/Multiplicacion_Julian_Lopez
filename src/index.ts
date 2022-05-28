/*• Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos
• Utilice este método para multiplicar los siguientes cuatro arreglos
de tres elementos
57
aproveche las ventajas de métodos
para resolver el ejercicio
v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/

btnEnviar.addEventListener("click", () => {
  let arreglo1: number[] = new Array(1, 2, 3);
  let arreglo2: number[] = new Array(4, 5, 6);
  let arreglo3: number[] = new Array(2, 1, 2);
  let arreglo4: number[] = new Array(1, 2, 1);
  let arregloSumado1: number[] = new Array(3);
  let arregloSumado2: number[] = new Array(3);
  let arregloFinal: number[] = new Array(3);
  let indice: number;
  
  let multiplicarArreglo = (arreglo1: number[], arreglo2: number[], arreglo3: number[], cantidad: number) => {
    for (indice = 0; indice < cantidad; indice++) {
      arreglo3[indice] = arreglo1[indice] * arreglo2[indice];
    }
  
    return arreglo3;
  };
    
  multiplicarArreglo(arreglo1, arreglo2, arregloSumado1,3);
  multiplicarArreglo(arreglo3, arreglo4, arregloSumado2,3);
  multiplicarArreglo(arregloSumado1, arregloSumado2, arregloFinal,3);
  console.log(`la multiplicacion de los arreglos dados es ${arregloFinal}`);