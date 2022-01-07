import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EnforcerNameGeneratorComponent } from './components/enforcer-name-generator/enforcer-name-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    EnforcerNameGeneratorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
