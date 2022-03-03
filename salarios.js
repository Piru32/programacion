let numeroHoras = Number(prompt("Cuantas horas trabajaste?"))
let numeroDomicilios = Number(prompt("Cuantos domicilios hiciste?"))
let pagoDomicilio = 2500
let horaTrabajo = 6000

let resultado = (numeroDomicilios * pagoDomicilio) + (horaTrabajo * numeroHoras)

alert("su salario es $" + resultado)