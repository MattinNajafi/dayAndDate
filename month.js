let todaysDate = new Date();

let month = todaysDate.getDate();
console.log(month);

switch (month) {
    case 1:
        document.getElementById("todaysMonth").innerHTML = "Januari"
        break;

    case 2:
        document.getElementById("todaysMonth").innerHTML = "Februari"
        break;

    case 3:
        document.getElementById("todaysMonth").innerHTML = "Mars"
        break;

    case 4:
        document.getElementById("todaysMonth").innerHTML = "April"
        break;

    case 5:
        document.getElementById("todaysMonth").innerHTML = "Maj"
        break;

    case 6:
        document.getElementById("todaysMonth").innerHTML = "Juni"
        break;

    case 7:
        document.getElementById("todaysMonth").innerHTML = "Juli"
        break;

    case 8:
        document.getElementById("todaysMonth").innerHTML = "Augusti"
        break;

    case 9:
        document.getElementById("todaysMonth").innerHTML = "September"
        break;

    case 10:
        document.getElementById("todaysMonth").innerHTML = "Oktober"
        break;

    case 11:
        document.getElementById("todaysMonth").innerHTML = "November"
        break;


    case 12:
        document.getElementById("todaysMonth").innerHTML = "December"
        break;


}