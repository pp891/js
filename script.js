let montoTotal = prompt("¿Cuál es el monto total gastado?");
let comensales = prompt("¿Cuántas personas pagan la cuenta?");
let porcentajePropina = prompt("¿Qué porcentaje desean dejar como propina?");

function calculoPropina() {
    const propina = montoTotal * (porcentajePropina /100);
    alert("La propina total es de: $" + propina);
}

function propinaPorComensal() {
    const propina = (montoTotal * (porcentajePropina / 100)) / comensales;
    alert("Cada comensal dejará $" + propina + " de propina.");
}

calculoPropina();
propinaPorComensal();