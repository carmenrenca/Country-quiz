import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor() { }

  points:number=0;
  questios:number=-1;
  setPoints(result:number){
    this.points=result;
  }

  addPoints(){
    this.points= this.points+1;
    
  }

  addQuestions(){
    this.questios=this.questios+1;
  }

 public getQuestions(){
    return this.questios;
  }
  public getPoints(){
    return this.points;
  }
  public resetQuestion(){
    this.questios=0;
  }
  public resetPoint(){
    this.points=0;
  }
 
}
