import React, { useState } from "react";
import "./App.css";
import checkLines from './Backend.js';


const size = 5;
const symbols = ["C", "M", "T"];

const App = () => {
  const [grid, setGrid] = useState(Array(size).fill(null).map(() => Array(size).fill("")));
  const [turn, setTurn] = useState(0);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [colors, setColors] = useState(Array(size).fill(null).map(() => Array(size).fill(""))); // Új szín állapot

  const handleClick = (row, col) => {
    if (grid[row][col] || gameOver) return;

    const newGrid = grid.map((r, i) => r.map((cell, j) => (i === row && j === col ? symbols[turn % 3] : cell)));
    setGrid(newGrid);
    setTurn(turn + 1);
    
    const newColors = [...colors]; // Másoljuk a színtömböt, hogy módosíthassuk
    setLines(checkLines(newGrid, size, newColors)); // Módosított checkLines hívás, hogy színeket is frissítsük

    setColors(newColors); // Frissítjük a színeket

    if (newGrid.flat().every(cell => cell !== "")) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGrid(Array(size).fill(null).map(() => Array(size).fill("")));
    setColors(Array(size).fill(null).map(() => Array(size).fill(""))); // Színek resetelése
    setTurn(0);
    setLines(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <h1>5x5 Játék</h1>
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              onClick={() => handleClick(rowIndex, colIndex)}
              style={{ color: colors[rowIndex][colIndex] }} // Szín beállítása
            >
              {cell}
            </button>
          ))
        )}
      </div>
      {gameOver && <h2>{lines > 0 ? `Gratulálok, ${lines} vonalad van!` : "Nincs vonalad, próbáld újra!"}</h2>}
      <button className="reset" onClick={resetGame}>Újraindítás</button>
    </div>
  );
};


export default App;
