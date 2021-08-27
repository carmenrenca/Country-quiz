import { Injectable } from '@angular/core';
import { URL_API } from 'src/environments/environment';
import { capital, countries } from '../const/countries';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries, Options } from '../interfaces/countries';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  options: Options[] =  [];
  constructor(private http: HttpClient) {}

  getfindByCountry(name: string): Observable<any> {
    return this.http.get(`${URL_API}/capital/${name}`);
  }
  getCountryRandom(): string {
    return countries[Math.floor(Math.random() * countries.length)];
  }
  getCapitalRandom(): string {
    return capital[Math.floor(Math.random() * capital.length)];
  }

  resetOptions() {
    this.options = [];
  }
  setOptions(title: string,index:number): void {
    this.options.push({
      letter: 'A',
      title: title,
      isCorrect: null,
      class: 'selector'
    })
   
  }

  changeOrderOptions() {
    this.options = this.options.sort(() => Math.random() - 0.5);
    let letterArr = ['A','B','C','D'];
    for(let i =0; i<this.options.length; i++){
       this.options[i].letter = letterArr[i];
    }
   
  }
}
