import { Component ,HostListener} from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game2048';
  public gameService: GameService;

  
  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  @HostListener("window:keydown",["$event"])
  keyPressed($event){
    console.log($event.code);
    this.gameService.play($event.code);
  }
}
