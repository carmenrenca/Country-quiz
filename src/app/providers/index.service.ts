import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }

  getSolution():string{
    return 'Reino Unido'
  }

  getOptions():any{
  const   options = [{
      letter:'A',
      title:'Colombia',
      isCorrect:null,
      class:'selector'
    },{
      letter:'B',
      title:'Alemania',
      isCorrect:null,
      class:'selector'
    },
    {
      letter:'C',
      title:'Francia',
      isCorrect:null,
      class:'selector'
    },
    {
      letter:'D',
      title:'Reino Unido',
      isCorrect:null,
      class:'selector'
    }]

    return  options
  }
   
}
