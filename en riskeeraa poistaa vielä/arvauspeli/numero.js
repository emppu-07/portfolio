let arvattuNumero = 0;
let arvausmaara = 0;
let pelimaara = 0;

function aloitaPeli() {
    arvattuNumero = Math.floor(Math.random() * 1000) + 1;
    arvausmaara = 0;
    pelimaara++;
    document.getElementById("pelimaara").innerHTML = pelimaara;
    document.getElementById("arvausmaara").innerHTML = arvausmaara;
    document.getElementById("tulos").innerHTML = "";
    document.getElementById("peli").style.display = "block";
    document.querySelector("button").innerHTML = "Pelaa uudelleen";
}

function tarkistaArvaus() {
    let arvaus = document.getElementById("arvaus").value;
    arvausmaara++;
    document.getElementById("arvausmaara").innerHTML = arvausmaara;
    if (arvaus == arvattuNumero) {
        document.getElementById("tulos").innerHTML = "Oikein! Arvasit " + arvausmaara + " kertaa.";
        document.getElementById("peli").style.display = "none";
    } else if (arvaus < arvattuNumero) {
        document.getElementById("tulos").innerHTML = "Arvasit liian pienen numeron.";
    } else {
        document.getElementById("tulos").innerHTML = "Arvasit liian suuren numeron.";
    }
}