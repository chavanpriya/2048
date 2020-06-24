import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { GameService } from '../game.service';

@Component({
  selector: 'app-grid',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '80px',
        width: '80px',
        opacity: 0
      })),
      state('closed', style({
        height: '80px',
        width: '80px',
        opacity: 1
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  isOpen = false;

  @Input()
  private row: number;
  @Input()
  private col: number;

  _gridValue: number;
  @Input() set gridValue(value: number) {
    if (value > 0 && this.gameService.isSelectedRowCol(this.row, this.col)) {
      console.log(this.row + "," + this.col);
      this.isOpen = true;
      setTimeout(() => this.isOpen = false, 200);
    }
    this._gridValue = value;
  }
  constructor(private gameService: GameService) {
    let r = 243;
    let g = 201;
    let b = 209;
    for (let i = 2; i < 2048; i = i * 2) {
      this.colours[i] = "rgb(" + r + "," + g + "," + b + ")";
      g -= 15;
      b -= 15;
    }
  }

  public colours = {
  }

  ngOnInit() {
  }

}
