import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  SelectedOperator: Operator;
  Operator: Operator[];
  readonly URL_API = 'http://localhost:3000/api/operator';

  constructor(private http: HttpClient) {
    this.SelectedOperator = new Operator();
  }

  getOperator() {
    return this.http.get(this.URL_API);
  }

  postOperator(Operators: Operator) {
    console.log('servicios', Operators);
    return this.http.post(this.URL_API, Operators);
  }

  putOperator(Operators: Operator) {
    return this.http.put(this.URL_API + `/${Operators.Id}`, Operators);
  }

  deleteOperator(Id: number) {
    return this.http.delete(this.URL_API + `/${Id}`);
  }

}
