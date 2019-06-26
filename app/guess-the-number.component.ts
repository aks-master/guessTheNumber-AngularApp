import { Component }from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h2>Can you Guess the Number !</h2>
      <p class="well lead">Guess the computer generated random number between 1 and 1000 within 5 tries to know if you are lucky.</p>
      <label>Your Guess: </label>
      <input type="number" [value]="guess" (input)="guess = $event.target.value" />
      <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button>
      <button (click)="initializeGame()" class="btn btn-warning btn-sm">Restart</button>
      <div>
        <p *ngIf="deviation<0" class="alert alert-warning">Your guess is higher.</p>
        <p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
        <p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>
      </div>
      <p class="text-info">No of guesses :
        <span class="badge">{{noOfTries}}</span>
      </p>
      <div>
      <p *ngIf="fail===true" class="alert alert-danger">You were not so lucky this time. the number was {{original}}<br>
      <span class="badge"><button (click)="initializeGame()" class="btn btn-warning btn-sm">Retry</button></span>
      </p>
      </div>
    </div>
    `
})
export class GuessTheNumberComponent {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  fail: boolean;

  constructor() {
    this.initializeGame();
  }
  initializeGame() {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
    this.fail = null;
  }
  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
    if(this.noOfTries===5){
        this.fail = true;
    }
  }
}