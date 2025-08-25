//Ejercicio 1

function verificarParOImpar(number) {
  number % 2 === 0 ? console.log(`El número ${number} es PAR.`) : console.log(`El número ${number} es IMPAR.`)
}

verificarParOImpar(11)

//----------------------------------------------------------------------

//Ejercicio 2

function clasificarTemperatura(temperature) {
  if (temperature < 10) {
    console.log("FRIO")
  } else if (temperature >= 10 && temperature <= 25) {
    console.log("Templado")
  } else if (temperature > 25 && temperature < 45) {
    console.log("Caluroso")
  } else {
    console.log("Temperatura incorrecta")
  }
}

let temp = 2
clasificarTemperatura(temp)

//----------------------------------------------------------------------

//Ejercicio 3

function compararNumeros(number1, number2) {
  if (number1 > number2) {
    console.log(`El número ${number1} es MAYOR que el número ${number2}`)
  } else if (number1 < number2) {
    console.log(`El número ${number1} es MENOR que el número ${number2}`)
  } else {
    console.log(`El número ${number1} es IGUAL que el número ${number2}`)
  }
}

let num1 = 2
let num2 = 8

compararNumeros(num1, num2)

//----------------------------------------------------------------------

//Ejercicio 4

function validarContrasenia(contrasenia) {
  const contraseniaSecreta = "pEpa55"

  contraseniaSecreta === contrasenia ? console.log("Sesión iniciada ✅") : console.log("Contraseña incorrecta ❌")
}

validarContrasenia("pEpa55")

//----------------------------------------------------------------------

//Ejercicio 5

function verificarDescuento(age) {
  (age > 60 || age < 12) ? console.log("Descuento válido ✅") : console.log("Descuento no válido para usted. ❌")
}

verificarDescuento(3)