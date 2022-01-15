import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwatchComponent } from './color-swatch.component';

describe('ColorSwatchComponent', () => {
  let component: ColorSwatchComponent;
  let fixture: ComponentFixture<ColorSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwatchComponent);
    component = fixture.componentInstance;

    component.swatch = {rbgValue: `rbg(123, 213, 231)`, hexValue: `#abcdef`}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
