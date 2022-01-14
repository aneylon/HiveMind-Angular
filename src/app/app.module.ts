import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EnforcerNameGeneratorComponent } from './components/enforcer-name-generator/enforcer-name-generator.component';
import { ListComponent } from './components/list/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ListsComponent } from './components/list/lists/lists.component';
import { ColorComponent } from './components/color/color.component';
import { ColorSwatchComponent } from './components/color/color-swatch/color-swatch.component';

@NgModule({
  declarations: [
    AppComponent,
    EnforcerNameGeneratorComponent,
    ListComponent,
    ListItemComponent,
    ListsComponent,
    ColorComponent,
    ColorSwatchComponent
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
