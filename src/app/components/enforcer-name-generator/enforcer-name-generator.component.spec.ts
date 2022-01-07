import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnforcerNameGeneratorComponent } from './enforcer-name-generator.component';

describe('EnforcerNameGeneratorComponent', () => {
  let component: EnforcerNameGeneratorComponent;
  let fixture: ComponentFixture<EnforcerNameGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnforcerNameGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnforcerNameGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
