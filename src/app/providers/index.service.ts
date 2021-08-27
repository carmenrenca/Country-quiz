import { Injectable } from '@angular/core';
import { URL_API } from 'src/environments/environment';
import { countries } from '../const/countries';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Options } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  options: Options[] = []
  constructor(private http: HttpClient) { }


  getfindByCountry(name: string): Observable<any> {

    return this.http.get(`${URL_API}/name/${name}`);
  }

  getCountrieRandom(): string {
    return countries[Math.floor(Math.random() * countries.length)]
  }


resetOptions(){
  this.options=[];
}
  setOptions(title: string): void {

    this.options.push({
      letter: 'A',
      title: title,
      isCorrect: null,
      class: 'selector'
    })

  }

  changeOrderOptions() {

    this.options = this.options.sort(() => Math.random() - 0.5);

  }


}
