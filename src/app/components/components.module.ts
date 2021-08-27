import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SelectorComponent } from './selector/selector.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CardComponent, SelectorComponent],
  imports: [
    CommonModule,   HttpClientModule
  ],
 
  exports:[CardComponent, SelectorComponent]
})
export class ComponentsModule { }
