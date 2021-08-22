import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SelectorComponent } from './selector/selector.component';



@NgModule({
  declarations: [CardComponent, SelectorComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent, SelectorComponent]
})
export class ComponentsModule { }
