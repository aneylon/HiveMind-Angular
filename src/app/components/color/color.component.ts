import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-generator',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  numberOfSwatches = 3
  swatches: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.createColorSwatches(this.numberOfSwatches)
  }

  createColorSwatches(numberToGenerate: number) {
    this.swatches = []
    for(let i = 0; i < numberToGenerate; i++) {
      let newSwatch = this.generateRandomColor()
      this.swatches.push(newSwatch)
    }
    console.log(this.swatches)
  }

  generateRandomColor(){
    let red = this.randomColorNumber(255)
    let blue = this.randomColorNumber(255)
    let green = this.randomColorNumber(255)
    let rbg = this.makeRGBString(red, blue, green)
    let hex = this.makeHexString(red, green, blue)
    return {rbg: rbg, hex: hex}
  }

  makeHexString(red:number, green:number, blue:number) {
    return Array.prototype.reduce.call(arguments, (acc, cur) => {
      let tmp = cur.toString(16)

      if(tmp.length == 1) tmp = '0' + tmp

      return acc + tmp
    }, '#')
  }

  makeRGBString(red: number, green:number , blue: number){
    return `rgb(${red}, ${green}, ${blue})`
  }

  randomColorNumber(max:number){
    max = max || 255
    return Math.floor((Math.random() * max) + 1)
  }
}
