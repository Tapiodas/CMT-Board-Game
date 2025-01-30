const checkLines = (newGrid, size, newColors) => {
    let count = 0;
  
    // Ellenőrizzük, hogy az összes cella megegyezik-e a megadott karakterrel
    const check = (cells, char) => cells.every(cell => cell === char);
  
    // Sorok és oszlopok ellenőrzése
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size - 2; j++) {
        // Sorok ellenőrzése
        if (check([newGrid[i][j], newGrid[i][j + 1], newGrid[i][j + 2]], "C")) {
          count++;
          newColors[i][j] = "red";
          newColors[i][j + 1] = "red";
          newColors[i][j + 2] = "red";
        }
        if (check([newGrid[i][j], newGrid[i][j + 1], newGrid[i][j + 2]], "M")) {
          count++;
          newColors[i][j] = "blue";
          newColors[i][j + 1] = "blue";
          newColors[i][j + 2] = "blue";
        }
        if (check([newGrid[i][j], newGrid[i][j + 1], newGrid[i][j + 2]], "T")) {
          count++;
          newColors[i][j] = "green";
          newColors[i][j + 1] = "green";
          newColors[i][j + 2] = "green";
        }
  
        // Oszlopok ellenőrzése
        if (check([newGrid[j][i], newGrid[j + 1][i], newGrid[j + 2][i]], "C")) {
          count++;
          newColors[j][i] = "red";
          newColors[j + 1][i] = "red";
          newColors[j + 2][i] = "red";
        }
        if (check([newGrid[j][i], newGrid[j + 1][i], newGrid[j + 2][i]], "M")) {
          count++;
          newColors[j][i] = "blue";
          newColors[j + 1][i] = "blue";
          newColors[j + 2][i] = "blue";
        }
        if (check([newGrid[j][i], newGrid[j + 1][i], newGrid[j + 2][i]], "T")) {
          count++;
          newColors[j][i] = "green";
          newColors[j + 1][i] = "green";
          newColors[j + 2][i] = "green";
        }
      }
    }
  
    // Átlók ellenőrzése
    for (let i = 0; i < size - 2; i++) {
      for (let j = 0; j < size - 2; j++) {
        if (check([newGrid[i][j], newGrid[i + 1][j + 1], newGrid[i + 2][j + 2]], "C")) {
          count++;
          newColors[i][j] = "red";
          newColors[i + 1][j + 1] = "red";
          newColors[i + 2][j + 2] = "red";
        }
        if (check([newGrid[i][j], newGrid[i + 1][j + 1], newGrid[i + 2][j + 2]], "M")) {
          count++;
          newColors[i][j] = "blue";
          newColors[i + 1][j + 1] = "blue";
          newColors[i + 2][j + 2] = "blue";
        }
        if (check([newGrid[i][j], newGrid[i + 1][j + 1], newGrid[i + 2][j + 2]], "T")) {
          count++;
          newColors[i][j] = "green";
          newColors[i + 1][j + 1] = "green";
          newColors[i + 2][j + 2] = "green";
        }
      }
    }
  
    return count;
  };
  
  export default checkLines;
  