function zodiac(dia, mes) {
    // let fecha = new Date()
    // let dia = fecha.getDate();
    // let mes = fecha.getMonth() + 1;
    var signo = "";
    if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
        signo = "acuario";
    }
    else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        signo = "piscis";
    }
    else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
        signo = "aries";
    }
    else if ((mes == 4 && dia >= 20) || (mes == 5 && dia >= 20)) {
        signo = "tauro";
    }
    else if ((mes == 5 && dia >= 21) || (mes == 6 && dia >= 20)) {
        signo = "geminis";
    }
    else if ((mes == 6 && dia >= 21) || (mes == 7 && dia >= 22)) {
        signo = "cancer";
    }
    else if ((mes == 7 && dia >= 23) || (mes == 8 && dia >= 22)) {
        signo = "leo";
    }
    else if ((mes == 8 && dia >= 23) || (mes == 9 && dia >= 22)) {
        signo = "virgo";
    }
    else if ((mes == 9 && dia >= 23) || (mes == 10 && dia >= 22)) {
        signo = "libra";
    }
    else if ((mes == 10 && dia >= 23) || (mes == 11 && dia >= 21)) {
        signo = "escorpio";
    }
    else if ((mes == 11 && dia >= 22) || (mes == 12 && dia >= 21)) {
        signo = "sagitario";
    }
    else if ((mes == 12 && dia >= 22) || (mes == 1 && dia >= 20)) {
        signo = "capricornio";
    }
    return signo;
}
console.log(zodiac(11, 3)); //no imprime por consola.
