class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];
                if (val === '.') continue;

                const row = rows.get(i);
                const col = cols.get(j);
                const squareKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
                const square = squares.get(squareKey);

                if ((row && row.has(val)) || (col && col.has(val)) || (square && square.has(val))) {
                    return false;
                }

                if (!row) rows.set(i, new Set());
                if (!col) cols.set(j, new Set());
                if (!square) squares.set(squareKey, new Set());

                rows.get(i).add(val);
                cols.get(j).add(val);
                squares.get(squareKey).add(val);
            }
        }

        return true;
    }
}
