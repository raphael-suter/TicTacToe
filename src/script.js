const dialogs = document.querySelectorAll(".modal");
const textfields = document.querySelectorAll("input[type=text]");
const fields = document.querySelectorAll(".card .grid .field");
const userLabel = document.querySelector(".card h3");
const combinationsToWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var clicks = 0;

function init() {
    if (document.cookie.length > 0) {
        displayUserData();
    } else {
        dialogs[0].style.visibility = "visible";
    }
}

function selectField(index) {
    if (fields[index].innerHTML !== "") {
        return;
    }

    if (clicks % 2 === 0) {
        fields[index].innerHTML = "X";
    } else {
        fields[index].innerHTML = "O";
    }

    combinationsToWin.forEach((item) => {
        if (fields[item[0]].innerHTML !== "" && fields[item[0]].innerHTML === fields[item[1]].innerHTML && fields[item[1]].innerHTML === fields[item[2]].innerHTML) {
            fields.forEach((item) => item.disabled = true);

            if (clicks % 2 === 0) {
                document.cookie = "pointsX=" + (parseInt(getCookie("pointsX")) + 1);
            } else {
                document.cookie = "pointsO=" + (parseInt(getCookie("pointsO")) + 1);
            }

            setTimeout(() => {
                dialogs[1].style.visibility = "visible";
                displayUserData();
            }, 100);
        }
    });

    clicks++;
}

function saveUserData() {
    document.cookie = "playerX=" + textfields[0].value;
    document.cookie = "pointsX=0";
    document.cookie = "playerO=" + textfields[1].value;
    document.cookie = "pointsO=0";

    dialogs[0].style.visibility = "hidden";
    displayUserData();
}

function deleteUserData() {
    document.cookie = "playerX=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "pointsX=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "playerO=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "pointsO=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    dialogs[0].style.visibility = "visible";
}

function displayUserData() {
    userLabel.innerHTML = getCookie("playerX") + " " + getCookie("pointsX") + ":" + getCookie("pointsO") + " " + getCookie("playerO");
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    return cookies.filter((item) => item.substr(0, 7) === name).toString().substr(8);
}

init();