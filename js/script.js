function borrar() {
  document.getElementById("comprarEntradas").reset();
  document.getElementById("total").innerHTML = "Total a Pagar: $"
}

function calcular() {
 let cantidad = parseInt(document.getElementById ("cantidadEntradas").value);
 let categoria = document.getElementById ("inputCategoria").value;
 let general = 200;
 let junior = 200 - (200 * 15) / 100; 
 let trainee = 200 - (200 * 50) / 100;
 let estudiante = 200 - (200 * 80) / 100;
 let total;

 if (isNaN(cantidad) || cantidad <= 0 || cantidad % 1 !== 0) {
  window.alert("Ingrese una cantidad de entradas válida");
  return;
}

 if (categoria === "General") {
  total = general * cantidad;
  document.getElementById("total").innerHTML = "Valor: $" + total;
} else if (categoria === "Junior") {
  total = junior * cantidad;
  document.getElementById("total").innerHTML = "Valor: $" + total;
} else if (categoria === "Trainee") {
  total = trainee * cantidad;
  document.getElementById("total").innerHTML = "Valor: $" + total;
} else if (categoria === "Estudiante") {
  total = estudiante * cantidad;
  document.getElementById("total").innerHTML = "Valor: $" + total;
}


}
