//continentes/paises

function continent(country: string): string {
    let continent = "";

    switch (country.toLowerCase()) {
        case "españa":
        case "francia":
        case "belgica":
        case "alemania":
        case "inglaterra":
            continent = "Europa";
            break;

        case "argentina":
        case "uruguay":
        case "brasil":
        case "méxico":
        case "colombia":
            continent = "América del Sur";
            break;

        case "estados unidos":
        case "canadá":
        case "méxico":
        case "alaska":
        case "groenlandia":
            continent = "América del Norte";
            break;
            
        case "japón":
        case "china":
        case "corea del sur":
        case "tailandia":
        case "vietnam":
            continent = "Asia";
            break;

        case "australia":
        case "nueva zelanda":
        case "samoa":
        case "tonga":
        case "tuvalu":
            continent = "Oceanía";
            break;

            default:
                continent = "no se encuentra continente";
    }

    return continent;
}

console.log(continent("españa"));