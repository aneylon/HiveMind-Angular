import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enforcer-name-generator',
  templateUrl: './enforcer-name-generator.component.html',
  styleUrls: ['./enforcer-name-generator.component.css']
})
export class EnforcerNameGeneratorComponent implements OnInit {
  numberOfNames: number = 1
  enforcerNames: string[] = []

  private letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  constructor() { }

  ngOnInit(): void {
    this.generateEnforcerNames(this.numberOfNames)
  }

  generateEnforcerNames(numberToGenerate: number){
    this.enforcerNames = []
    for (let i = 0; i < numberToGenerate; i++) {
      this.enforcerNames.push(this.newEnforcerName());
    }
  }

  private newEnforcerName(): string {
    let letter = this.letters[this.randomNumber(0,26)]
    let numbers = `${this.randomNumber(0,9)}${this.randomNumber(0,9)}${this.randomNumber(0,9)}`
    return `${letter}-${numbers}`
  }

  randomNumber(min: number = 0, max: number = 1): number {
    let random = Math.floor((Math.random() * max) + min)
    return random
  }
}
