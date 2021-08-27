import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Countries, Options } from 'src/app/interfaces/countries';
import { IndexService } from 'src/app/providers/index.service';
import { finalize } from 'rxjs/operators';
import { PointsService } from 'src/app/providers/points.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isSelected: boolean = false;
  CapitalSelected: string = '';
  result: string = ''



  constructor(public service: IndexService, public points:PointsService) { }

  ngOnInit(): void {
 console.log(this.service.options)
   this.searchQuestion()
  }


  searchQuestion(){

    this.points.addQuestions()

   this.result  = ''
   this.isSelected = false;
    this.service.resetOptions();
    this.CapitalSelected = this.service.getCapitalRandom()
 
    this.getCapital()
  }

  getCapital() {
 
    this.service.getfindByCountry(this.CapitalSelected.trim().toLowerCase())
      .pipe(finalize((  ) => {  
        
        this.service.setOptions(  this.result, 0);
        this.setterOptions() }))
      .subscribe((res: Countries[]) => {
      this.result=res[0].name
 
   
      })


  }


  setterOptions() {
 

for(let i =1; i<4 ; i++){
  this.service.setOptions(this.service.getCountryRandom(),i);
} 
this.service.changeOrderOptions()
 
 
  }

  selectedCard(option: any) {

    if (!this.isSelected) {
      this.isSelected = true

      if (this.result === option.title) {
        this.isCorrect(option)
        this.points.addPoints();
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

  tryAgain(){
    this.points.resetQuestion();
    this.points.resetPoint();
  }
}
