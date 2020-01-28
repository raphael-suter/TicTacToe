let clicks = 0;
const COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

enum COOKIES {
    PLAYER_X = "player_x",
    POINTS_X = "points_x",
    PLAYER_O = "player_o",
    POINTS_O = "points_o"
}

const scoreLabel = document.getElementById("scoreLabel");
const squareButtons = document.querySelectorAll("main div button");
const userDialog = document.getElementById("userDialog");
const playerX_TextField = <HTMLInputElement>document.getElementById("playerX_TextField");
const playerO_TextField = <HTMLInputElement>document.getElementById("playerO_TextField");
const infoDialog = document.getElementById("infoDialog");
const infoLabel = document.getElementById("infoLabel");

function init() {
    if (checkCookies()) {
        displayScore();
    } else {
        showUserDialog();
    }
}

function showUserDialog() {
    userDialog.style.visibility = "visible";
}

function saveUserData() {
    let countEmptyFields = 0;

    countEmptyFields += textFieldIsEmpty(playerX_TextField);
    countEmptyFields += textFieldIsEmpty(playerO_TextField);

    if (countEmptyFields > 0) {
        return;
    }

    setCookie(COOKIES.PLAYER_X, playerX_TextField.value);
    setCookie(COOKIES.POINTS_X, "0");
    setCookie(COOKIES.PLAYER_O, playerO_TextField.value);
    setCookie(COOKIES.POINTS_O, "0");

    userDialog.style.visibility = "hidden";
    displayScore();
}

function selectField(index: number) {
    if (!isEmpty(squareButtons[index].innerHTML)) {
        return;
    }

    if (clicks % 2 === 0) {
        squareButtons[index].innerHTML = "X";
    } else {
        squareButtons[index].innerHTML = "O";
    }

    for (const item of COMBINATIONS) {
        if (!isEmpty(squareButtons[item[0]].innerHTML) && squareButtons[item[0]].innerHTML === squareButtons[item[1]].innerHTML && squareButtons[item[1]].innerHTML === squareButtons[item[2]].innerHTML) {
            if (clicks % 2 === 0) {
                incrementCookieValue(COOKIES.POINTS_X);
                displayWinner(COOKIES.PLAYER_X);
            } else {
                incrementCookieValue(COOKIES.POINTS_O);
                displayWinner(COOKIES.PLAYER_O);
            }

            displayScore();
            return;
        }
    }

    if (checkIfEven()) {
        displayMessage("Unentschieden!");
    }

    clicks++;
}

function displayScore() {
    scoreLabel.innerText = getCookie(COOKIES.PLAYER_X) + " " + getCookie(COOKIES.POINTS_X) + ":" + getCookie(COOKIES.POINTS_O) + " " + getCookie(COOKIES.PLAYER_O);
}

function displayWinner(key: COOKIES) {
    displayMessage(getCookie(key) + " hat gewonnen!");
}

function displayMessage(text: string) {
    infoLabel.innerText = text;
    infoDialog.style.visibility = "visible";
}

function checkCookies(): boolean {
    let cookiesAreValid = true;

    Object.keys(COOKIES).forEach((key: string) => {
        if (isEmpty(getCookie(COOKIES[key]))) {
            cookiesAreValid = false;
        }
    });

    return cookiesAreValid
}

function checkIfEven(): boolean {
    let noEmptyFields = true;

    squareButtons.forEach((item: Element) => {
        if (isEmpty(item.innerHTML)) {
            noEmptyFields = false;
        }
    });

    return noEmptyFields;
}

function reset() {
    Object.keys(COOKIES).forEach((key: string) => {
        deleteCookie(COOKIES[key]);
    });

    window.location.reload();
}

function setCookie(key: COOKIES, value: string) {
    document.cookie = key + "=" + value;
}

function getCookie(key: COOKIES): string {
    const cookies = document.cookie.split("; ");
    return cookies.filter((item: string) => {
            const cookieKey = item.substr(0, 8);

            if (cookieKey === key) {
                return item;
            }
        }
    ).toString().substr(9);
}

function deleteCookie(key: COOKIES) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function incrementCookieValue(key: COOKIES) {
    setCookie(key, (parseInt(getCookie(key)) + 1).toString());
}

function isEmpty(item: string): boolean {
    return item.trim() === "";
}

function textFieldIsEmpty(textField: HTMLInputElement): number {
    if (isEmpty(textField.value)) {
        textField.classList.add("empty");
        return 1;
    } else {
        textField.classList.remove("empty");
        return 0;
    }
}

init();