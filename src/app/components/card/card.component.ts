import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IndexService } from 'src/app/providers/index.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isSelected: boolean = false;
  @ViewChild('cmpNodo') someTokenVal!: ElementRef<HTMLElement>
  options: any;
  result:string=''
  constructor(private service: IndexService) { }

  ngOnInit(): void {
    this.options = this.service.getOptions()
    this.result= this.service.getSolution();
  }
  selectedCard(option: any) {
    this.options.forEach((element: any) => {
      if (this.result=== element.title) {
        element.isCorrect=true;
        element.class = "selector selector--success";
      } else {
        element.isCorrect=false;
        element.class = "selector selector--error";
      }
    });

  }
}
