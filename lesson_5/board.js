function createBoard() {
    const board = document.createElement('div');
    board.style.width = '1084px';
    document.body.appendChild (board);
    for (let row = 9; row >= 0; row--) {
        for (let file = 0; file < 10; file++) {
            const cell = document.createElement('div')
            if (row == 0 || row == 9 || file == 0 || file == 9) {
                cell.classList.add('borderEdge')
                    if ((row == 0 || row == 9) && (file != 0 && file != 9)) {
                        cell.innerHTML = 'ABCDEFGH'[file - 1]
                    } else if ((file == 0 || file == 9) && (row != 0 && row != 9)) {
                        cell.innerHTML = row
                    }
            } else if ((row % 2 != 0 && file % 2 !=0) || (row % 2 == 0 && file % 2 ==0)) {
            cell.classList.add('blackCell')
            } else {
                cell.classList.add('whiteCell')
            };
            if ((row == 2) && (file != 0 && file != 9)) {
                piece = document.createElement('img');
                piece.src = 'img/WhitePawn.png'
                cell.appendChild(piece)
            } else if ((row == 7) && (file != 0 && file != 9)) {
                piece = document.createElement('img');
                piece.src = 'img/BlackPawn.png'
                cell.appendChild(piece)
            } else if ((row == 1) && (file == 1 || file == 8)) {
                piece = document.createElement('img');
                piece.src = 'img/WhiteRook.png'
                cell.appendChild(piece)
            } else if ((row == 1) && (file == 2 || file == 7)) {
                piece = document.createElement('img');
                piece.src = 'img/WhiteKnight.png'
                cell.appendChild(piece)
            } else if ((row == 1) && (file == 3 || file == 6)) {
                piece = document.createElement('img');
                piece.src = 'img/WhiteBishop.png'
                cell.appendChild(piece)
            } else if (row == 1 && file == 4) {
                piece = document.createElement('img');
                piece.src = 'img/WhiteQueen.png'
                cell.appendChild(piece)
            } else if (row == 1 && file == 5) {
                piece = document.createElement('img');
                piece.src = 'img/WhiteKing.png'
                cell.appendChild(piece)
            } else if ((row == 8) && (file == 1 || file == 8)) {
                piece = document.createElement('img');
                piece.src = 'img/BlackRook.png'
                cell.appendChild(piece)
            } else if ((row == 8) && (file == 2 || file == 7)) {
                piece = document.createElement('img');
                piece.src = 'img/BlackKnight.png'
                cell.appendChild(piece)
            } else if ((row == 8) && (file == 3 || file == 6)) {
                piece = document.createElement('img');
                piece.src = 'img/BlackBishop.png'
                cell.appendChild(piece)
            } else if (row == 8 && file == 4) {
                piece = document.createElement('img');
                piece.src = 'img/BlackQueen.png'
                cell.appendChild(piece)
            } else if (row == 8 && file == 5) {
                piece = document.createElement('img');
                piece.src = 'img/BlackKing.png'
                cell.appendChild(piece)
            }
            board.appendChild(cell)
        }
    }
}    
window.onload = createBoard;