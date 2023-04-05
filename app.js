var chessBoard = document.getElementById("chessBoard");

// $("#testButton").on("click", function () {
//     console.log("test")
// })

function clickBoard(cell) {
    console.log("click")
    console.log(cell)
}

$(document).ready(() => {

    for (var i = 0; i < 8; i++) {
        row = chessBoard.insertRow(i);
        for (var j = 0; j < 8; j++) {
            cell = row.insertCell(j);
            cell.onclick = function () { clickBoard(this) };
            cell.setAttribute("row", i);
            cell.setAttribute("cell", j);
            cell.classList.add("box", "border");
        }
    }

    console.log(chessBoard)

    var testcell = chessBoard.rows[1].cells[3]

    console.log(testcell);

});