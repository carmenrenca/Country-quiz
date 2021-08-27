import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Countries, Options } from 'src/app/interfaces/countries';
import { IndexService } from 'src/app/providers/index.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isSelected: boolean = false;
  CountrieSelected: string = '';



  @ViewChild('cmpNodo') someTokenVal!: ElementRef<HTMLElement>

  result: string = ''
  constructor(public service: IndexService) { }

  ngOnInit(): void {
  
   this.searchQuestion()
  }


  searchQuestion(){
   this.result  = ''
    this.service.resetOptions();
    this.CountrieSelected = this.service.getCountrieRandom()
 
    this.getCapital()
  }

  getCapital() {
 
    this.service.getfindByCountry(this.CountrieSelected.trim())
      .pipe(finalize((  ) => {  
        
        this.service.setOptions(  this.result);
        this.setterOptions() }))
      .subscribe((res: Countries[]) => {
        this.result=res[0].capital

   
      })


  }


  setterOptions() {
 

for(let i =1; i<4 ; i++){
  this.service.setOptions(this.service.getCountrieRandom());
} 
this.service.changeOrderOptions()
 
 
  }

  selectedCard(option: any) {

    if (!this.isSelected) {
      this.isSelected = true

      if (this.result === option.title) {
        this.isCorrect(option)

      } else {

        this.service.options.find((e: any) => {
          if (this.result === e.title) {
            this.isCorrect(e)

          }
        })

        this.isIncorrect(option);
      }

    }


  }

  isCorrect(option: any) {
    option.isCorrect = true;
    option.class = "selector selector--success";
  }

  isIncorrect(option: any) {

    option.isCorrect = false;
    option.class = "selector selector--error";
  }
}
