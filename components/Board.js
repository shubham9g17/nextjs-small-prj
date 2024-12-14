import React, { useState } from "react";
import Cell from "./Cell";
// import Confetti from "react-confetti";

const ROWS = 6;
const COLUMNS = 7;

const Board = ({ player1, player2, currentPlayer, switchPlayer }) => {
  const [grid, setGrid] = useState(
    Array(ROWS)
      .fill(null)
      .map(() => Array(COLUMNS).fill(null))
  );
  const [winner, setWinner] = useState(null);

  const checkWinner = (grid) => {
    const checkDirection = (row, col, deltaRow, deltaCol) => {
      const color = grid[row][col];
      let count = 0;
      for (let i = 0; i < 4; i++) {
        const newRow = row + i * deltaRow;
        const newCol = col + i * deltaCol;
        if (
          newRow < 0 ||
          newRow >= ROWS ||
          newCol < 0 ||
          newCol >= COLUMNS ||
          grid[newRow][newCol] !== color
        ) {
          return false;
        }
        count++;
      }
      return count === 4;
    };

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        if (grid[row][col]) {
          if (
            checkDirection(row, col, 0, 1) || // Horizontal
            checkDirection(row, col, 1, 0) || // Vertical
            checkDirection(row, col, 1, 1) || // Diagonal Right
            checkDirection(row, col, 1, -1) // Diagonal Left
          ) {
            return grid[row][col];
          }
        }
      }
    }
    return null;
  };

  const handleDrop = (colIndex) => {
    if (winner) return;

    const updatedGrid = [...grid];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!updatedGrid[row][colIndex]) {
        updatedGrid[row][colIndex] = currentPlayer.color;
        setGrid(updatedGrid);

        const newWinner = checkWinner(updatedGrid);
        if (newWinner) {
          setWinner(currentPlayer);
        } else {
          switchPlayer();
        }
        return;
      }
    }
  };

  return (
    <div>
      {winner && (
        <>
          {/* <Confetti /> */}
          <div className="text-center mb-4 text-2xl font-bold text-green-500">
            🎉 Winner:{" "}
            <span style={{ color: winner.color }}>{winner.name}</span>! 🎉
          </div>
        </>
      )}
      <div className="grid grid-cols-7 gap-2 bg-blue-500 p-4 rounded-lg shadow-lg">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => handleDrop(colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
