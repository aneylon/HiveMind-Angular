import { Component, OnInit } from '@angular/core';
import { Dice } from './models/dice';
import { Results } from './models/results';

@Component({
  selector: 'dice-roller',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  newDice!: number
  newModifier!: number
  results = { total: 0, roll: []} as Results

  dice: Dice[] = []

  constructor() { }

  ngOnInit(): void {
  }

  disableAddDiceButton(): boolean{
    return this.newDice === 0 || this.newDice === undefined || this.newDice === null
  }

  disableRollDiceButton(): boolean {
    return this.dice.length < 1
  }

  addDice(dice: number, modifier: number = 0) {
    console.log('add dice', {dice, modifier})
    this.dice.push({ maxValue: dice, modifier})
    console.log(this.dice)
  }

  clearDice(){
    this.dice = []
  }

  rollDice(dice: Dice[]) {
    console.log('roll dice')
    this.results.roll = []
    let total = 0
    for(let i = 0; i < dice.length; i++) {
      let roll = Math.floor(Math.random() * dice[i].maxValue + 1)
      let modifier = dice[i].modifier
      let stuff = `1d${dice[i].maxValue} + ${modifier} = ${roll} + ${modifier}`
      this.results.roll.push(stuff)
      total += (roll + modifier)
    }

    this.results.total = total
    console.log(this.results)
  }

}
