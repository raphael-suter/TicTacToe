let clicks = 0;
const combinationsToWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const signInDialog = document.getElementById("signInDialog");
const successDialog = document.getElementById("successDialog");
const inputTextPlayerX = document.getElementById("inputTextPlayerX");
const inputTextPlayerO = document.getElementById("inputTextPlayerO");
const fields = document.querySelectorAll(".card .grid .field");
const labelUserData = document.getElementById("labelUserData");

function init() {
    if (getCookie("playerX").trim() === "" || getCookie("playerO").trim() === "" || getCookie("pointsX").trim() === "" || getCookie("pointsO").trim() === "") {
        signInDialog.style.visibility = "visible";
    } else {
        displayUserData();
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
            fields.forEach((item) => {
                item.disabled = true;
            });

            if (clicks % 2 === 0) {
                incrementCookieValue("pointsX");
            } else {
                incrementCookieValue("pointsO");
            }

            setTimeout(() => {
                successDialog.style.visibility = "visible";
                displayUserData();
            }, 100);
        }
    });

    clicks++;
}

function saveUserData() {
    document.cookie = "playerX=" + inputTextPlayerX.value;
    document.cookie = "pointsX=0";
    document.cookie = "playerO=" + inputTextPlayerO.value;
    document.cookie = "pointsO=0";

    signInDialog.style.visibility = "hidden";
    displayUserData();
}

function deleteUserData() {
    document.cookie = "playerX=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "pointsX=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "playerO=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "pointsO=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    signInDialog.style.visibility = "visible";
}

function displayUserData() {
    labelUserData.innerHTML = getCookie("playerX") + " " + getCookie("pointsX") + ":" + getCookie("pointsO") + " " + getCookie("playerO");
}

function getCookie(key) {
    const cookies = document.cookie.split("; ");
    return cookies.filter((item) => {
            const cookieKey = item.substr(0, 7);

            if (cookieKey === key) {
                return item;
            }
        }
    ).toString().substr(8);
}

function incrementCookieValue(key) {
    document.cookie = key + "=" + (parseInt(getCookie(key)) + 1);
}

init();