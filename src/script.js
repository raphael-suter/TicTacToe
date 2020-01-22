var clicks = 0;
var combinationsToWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var signInDialog = document.getElementById("signInDialog");
var successDialog = document.getElementById("successDialog");
var inputTextPlayerX = document.getElementById("inputTextPlayerX");
var inputTextPlayerO = document.getElementById("inputTextPlayerO");
var fields = document.querySelectorAll(".card .grid .field");
var labelUserData = document.getElementById("labelUserData");
function init() {
    if (getCookie("playerX").trim() === "" || getCookie("playerO").trim() === "" || getCookie("pointsX").trim() === "" || getCookie("pointsO").trim() === "") {
        signInDialog.style.visibility = "visible";
    }
    else {
        displayUserData();
    }
}
function selectField(index) {
    if (fields[index].innerHTML !== "") {
        return;
    }
    if (clicks % 2 === 0) {
        fields[index].innerHTML = "X";
    }
    else {
        fields[index].innerHTML = "O";
    }
    combinationsToWin.forEach(function (item) {
        if (fields[item[0]].innerHTML !== "" && fields[item[0]].innerHTML === fields[item[1]].innerHTML && fields[item[1]].innerHTML === fields[item[2]].innerHTML) {
            fields.forEach(function (item) {
                item.disabled = true;
            });
            if (clicks % 2 === 0) {
                incrementCookieValue("pointsX");
            }
            else {
                incrementCookieValue("pointsO");
            }
            successDialog.style.visibility = "visible";
            displayUserData();
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
    var cookies = document.cookie.split("; ");
    return cookies.filter(function (item) {
        var cookieKey = item.substr(0, 7);
        if (cookieKey === key) {
            return item;
        }
    }).toString().substr(8);
}
function incrementCookieValue(key) {
    document.cookie = key + "=" + (parseInt(getCookie(key)) + 1);
}
init();
