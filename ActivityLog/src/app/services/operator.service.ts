import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  SelectedOperator: Operator;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://http://localhost:4200//api/users');
  }
}
