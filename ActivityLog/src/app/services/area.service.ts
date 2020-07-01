import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassArea } from 'src/app/models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  SelectedArea: ClassArea;
  Area: ClassArea[];
  readonly URL_API = 'http://localhost:3000/api/area';

  constructor(public http: HttpClient) {
    this.SelectedArea = new ClassArea();
  }

  getArea() {
    return this.http.get(this.URL_API);
  }

  getAreaById(Id: number) {
    console.log(this.http.get(this.URL_API + `/${Id}`));
    return this.http.get(this.URL_API + `/${Id}`);
  }

  createArea(Area: ClassArea) {
    console.log('servicios', Area);
    return this.http.post(this.URL_API, Area);
  }

  editArea(Area: ClassArea) {
    return this.http.put(this.URL_API + `/${Area.Id}`, Area);
  }

  deleteArea(Id: number) {
    return this.http.delete(this.URL_API + `/${Id}`);
  }
}
