let visitor = prompt("¿Cuál es tu nombre?");

function greeting() {
    alert("¡Hola, " + visitor + "!");
}

greeting();

function Birthday(day, month) {
    this.day = parseInt(prompt("¿Qué día cumplís años?"));
    this.month = prompt("¿En qué mes cumplís años? Por favor, completar en letras");
    this.birthday = "Registramos que tu cumpleaños es el: " + this.day + " de " + this.month;
}

const visitor1 = new Birthday ();

function checkBirthday() {
    alert(visitor1.birthday);
}

checkBirthday();

function showSign() {
    if ((visitor1.month == "enero" && visitor1.day <= 20) || (visitor1.month == "diciembre" && visitor1.day >= 21)) {
        alert("Sos de Capricornio");
        } else {
            if ((visitor1.month == "febrero" && visitor1.day <= 19) || (visitor1.month == "enero" && visitor1.day >= 21)) {
                alert("Sos de Acuario");
            }   else {
                if ((visitor1.month == "marzo" && visitor1.day <= 20) || (visitor1.month == "febrero" && visitor1.day >= 20)) {
                    alert("Sos de Piscis");
                } else {
                    if ((visitor1.month == "abril" && visitor1.day <= 20) || (visitor1.month == "marzo" && visitor1.day >= 21)) {
                        alert("Sos de Aries");
                    } else {
                        if ((visitor1.month == "mayo" && visitor1.day <= 20) || (visitor1.month == "abril" && visitor1.day >= 21)) {
                            alert("Sos de Tauro");
                        } else {
                            if ((visitor1.month == "junio" && visitor1.day <= 21) || (visitor1.month == "mayo" && visitor1.day >= 21)) {
                                alert("Sos de Géminis");
                            } else {
                                if ((visitor1.month == "julio" && visitor1.day <= 22) || (visitor1.month == "junio" && visitor1.day >= 22)) {
                                    alert("Sos de Cáncer");
                                } else {
                                    if ((visitor1.month == "agosto" && visitor1.day <= 23) || (visitor1.month == "julio" && visitor1.day >= 23)) {
                                        alert("Sos de Leo");
                                    } else {
                                        if ((visitor1.month == "septiembre" && visitor1.day <= 22) || (visitor1.month == "agosto" && visitor1.day >= 24)) {
                                            alert("Sos de Virgo");
                                        } else {
                                            if ((visitor1.month == "octubre" && visitor1.day <= 22) || (visitor1.month == "septiembre" && visitor1.day >= 23)) {
                                                alert("Sos de Libra");
                                            } else {
                                                if ((visitor1.month == "noviembre" && visitor1.day <= 21) || (visitor1.month == "octubre" && visitor1.day >= 23)) {
                                                    alert("Sos de Escorpio");
                                                } else {
                                                    if ((visitor1.month == "diciembre" && visitor1.day <= 21) || (visitor1.month == "noviembre" && visitor1.day >= 23)) {
                                                        alert("Sos de Sagitario")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}

showSign();

const sign = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

let log = console.log(showSign())