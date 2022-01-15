import { Component, Input, OnInit } from '@angular/core';
import { Swatch } from '../models/swatch';

@Component({
  selector: 'color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.css']
})
export class ColorSwatchComponent implements OnInit {

  @Input() swatch!: Swatch

  constructor() { }

  ngOnInit(): void {
  }

}
