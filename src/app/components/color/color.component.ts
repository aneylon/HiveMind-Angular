import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  generateRandomColor(){
    // rbg(red,blue,green) 256
    // hex, '#000000'
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
