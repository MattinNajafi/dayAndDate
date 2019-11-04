let date = new Date();
let day = date.getDay()


switch (day) {

    case 1:
        monday();
        break;

    case 2:
        tuesday();
        break;

    case 3:
        wednesday();
        break;

    case 4:
        thursday();
        break;

    case 5:
        friday();
        break;

    case 6:
        saturday();
        break;

    case 7:
        sunday();
        break;

}

function monday() {
    document.getElementById("vardag").innerHTML = "Måndag"
}

function tuesday() {
    document.getElementById("vardag").innerHTML = "Tisdag"
}

function wednesday() {
    document.getElementById("vardag").innerHTML = "Onsdag"
}

function thursday() {
    document.getElementById("vardag").innerHTML = "Torsdag"
}

function friday() {
    document.getElementById("vardag").innerHTML = "Fredag"
}

function saturday() {
    document.getElementById("vardag").innerHTML = "Lördag"
}

function sunday() {
    document.getElementById("vardag").innerHTML = "Söndag"
}