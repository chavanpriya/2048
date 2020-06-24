import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board;
  public isGameOver = false;
  private selectedRow = -1;
  private selectedCol = -1;
  constructor() {
    this.initialise();
  }

  public initialise() {
    console.log('init board');
    this.board =
      [[0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]];
    this.insertRandom();
    this.isGameOver = false;
  }

  play(key) {

    switch (key) {
      case "ArrowUp":
        for (let i = 0; i < 4; i++) {
          let col = [];
          for (let j = 0; j < 4; j++) {
            if (this.board[j][i] > 0) {
              col.push(this.board[j][i]);
            }
          }
          for (let k = 0; k < col.length - 1; k++) {
            if (col[k] == col[k + 1]) {
              col[k] = 2 * col[k];
              col[k + 1] = 0;
            }
          }

          let k = 0;
          let j = 0;
          while (k < col.length) {
            if (col[k] > 0) {
              this.board[j][i] = col[k];
              j++;
            }
            k++;
          }
          while (j < 4) {
            this.board[j][i] = 0;
            j++;
          }
        }

        this.insertRandom();
        break;
      case "ArrowDown":
        for (let i = 0; i < 4; i++) {
          let col = [];
          for (let j = 3; j >= 0; j--) {
            if (this.board[j][i] > 0) {
              col.push(this.board[j][i]);
            }
          }
          for (let k = 0; k < col.length - 1; k++) {
            if (col[k] == col[k + 1]) {
              col[k] = 2 * col[k];
              col[k + 1] = 0;
            }
          }

          let k = 0;
          let j = 3;
          while (k < col.length) {
            if (col[k] > 0) {
              this.board[j][i] = col[k];
              j--;
            }
            k++;
          }
          while (j >= 0) {
            this.board[j][i] = 0;
            j--;
          }
        }

        this.insertRandom();
        break;
      case "ArrowLeft":
        for (let i = 0; i < 4; i++) {
          let col = [];
          for (let j = 0; j < 4; j++) {
            if (this.board[i][j] > 0) {
              col.push(this.board[i][j]);
            }
          }
          for (let k = 0; k < col.length - 1; k++) {
            if (col[k] == col[k + 1]) {
              col[k] = 2 * col[k];
              col[k + 1] = 0;
            }
          }

          let k = 0;
          let j = 0;
          while (k < col.length) {
            if (col[k] > 0) {
              this.board[i][j] = col[k];
              j++;
            }
            k++;
          }
          while (j < 4) {
            this.board[i][j] = 0;
            j++;
          }
        }

        this.insertRandom();
        break;


      case "ArrowRight":
        for (let i = 0; i < 4; i++) {
          let col = [];
          for (let j = 3; j >= 0; j--) {
            if (this.board[i][j] > 0) {
              col.push(this.board[i][j]);
            }
          }
          for (let k = 0; k < col.length - 1; k++) {
            if (col[k] == col[k + 1]) {
              col[k] = 2 * col[k];
              col[k + 1] = 0;
            }
          }

          let k = 0;
          let j = 3;
          while (k < col.length) {
            if (col[k] > 0) {
              this.board[i][j] = col[k];
              j--;
            }
            k++;
          }
          while (j >= 0) {
            this.board[i][j] = 0;
            j--;
          }
        }

        this.insertRandom();
        break;
    }
    this.gameOver();
  }

  insertRandom() {
    this.selectedCol = -1;
    this.selectedRow = -1;
    let emptySpaces = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] == 0) {
          emptySpaces.push([i, j]);
        }
      }
    }

    if (emptySpaces.length === 0) {
      return;
    }
    let rand = Math.ceil(Math.random() * 1000);
    let luck = rand % emptySpaces.length;
    let row = emptySpaces[luck][0];
    let col = emptySpaces[luck][1];
    this.selectedRow = row;
    this.selectedCol = col;
    this.board[row][col] = rand % 2 == 0 ? 2 : 4;

  }

  gameOver() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] == 0 || (i < 3 && this.board[i][j] == this.board[i + 1][j])
          || (j < 3 && this.board[i][j] == this.board[i][j + 1])) {
          return;
        }
      }
    }
    this.isGameOver = true;
  }

  public isSelectedRowCol(row: number, col: number): boolean {
    return this.selectedRow == row && this.selectedCol == col;
  }
}
