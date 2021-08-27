import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent   {
 
  @Input()option:any;
  
 @Input()isSelected:boolean=false;
   
 

 
 
}
