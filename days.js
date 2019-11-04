let date = new Date();
let day = date.getDay()
let month = date.getMonth();

document.getElementById("header").innerHTML = "dayAndDate - " + date.toDateString()


switch (month) {
    case 0:
        document.getElementById("monthText").innerHTML = "Januari"
        break;

    case 1:
        document.getElementById("monthText").innerHTML = "Februari"
        break;

    case 2:
        document.getElementById("monthText").innerHTML = "Mars"
        break;

    case 3:
        document.getElementById("monthText").innerHTML = "April"
        break;

    case 4:
        document.getElementById("monthText").innerHTML = "Maj"
        break;

    case 5:
        document.getElementById("monthText").innerHTML = "Juni"
        break;

    case 6:
        document.getElementById("monthText").innerHTML = "Juli"
        break;

    case 7:
        document.getElementById("monthText").innerHTML = "Augusti"
        break;

    case 8:
        document.getElementById("monthText").innerHTML = "September"
        break;

    case 9:
        document.getElementById("monthText").innerHTML = "Oktober"
        break;

    case 10:
        document.getElementById("monthText").innerHTML = "November"
        break;


    case 11:
        document.getElementById("monthText").innerHTML = "December"
        break;


}


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

    case 0:
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