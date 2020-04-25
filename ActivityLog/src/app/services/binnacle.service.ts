import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Binnacle } from '../models/binnacle';

@Injectable({
  providedIn: 'root'
})
export class BinnacleService {SelectedBinnacle: Binnacle;
  Binnacle: Binnacle[];
  readonly URL_API = 'http://localhost:3000/api/Binnacle';

  constructor(private http: HttpClient) {
    this.SelectedBinnacle = new Binnacle();
  }

  getBinnacle() {
    return this.http.get(this.URL_API);
  }

  editBinnacle(Id: number) {
    console.log(this.http.get(this.URL_API + `/${Id}`));
    return this.http.get(this.URL_API + `/${Id}`);
  }

  postBinnacle(Binnacles: Binnacle) {
    console.log('servicios', Binnacles);
    return this.http.post(this.URL_API, Binnacles);
  }

  putBinnacle(Binnacles: Binnacle) {
    return this.http.put(this.URL_API + `/${Binnacles.Id}`, Binnacles);
  }

  deleteBinnacle(Id: number) {
    return this.http.delete(this.URL_API + `/${Id}`);
  }

}