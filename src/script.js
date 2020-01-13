const fields = document.querySelectorAll(".card .grid .field");
const dialog = document.querySelector(".modal");
const combinationsToWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var clicks = 0;

function select(index) {
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

            setTimeout(() => {
                dialog.style.visibility = "visible";
            }, 100);
        }
    });

    clicks++;
}