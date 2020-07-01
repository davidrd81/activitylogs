import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassSchedule } from 'src/app/models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {SelectedSchedule: ClassSchedule;
  Schedule: ClassSchedule[];
  readonly URL_API = 'http://localhost:3000/api/schedule';

  constructor(public http: HttpClient) {
    this.SelectedSchedule = new ClassSchedule();
  }

  getSchedule() {
    return this.http.get(this.URL_API);
  }

  getScheduleById(Id: number) {
    console.log(this.http.get(this.URL_API + `/${Id}`));
    return this.http.get(this.URL_API + `/${Id}`);
  }

  createSchedule(Schedule: ClassSchedule) {
    console.log('servicios', Schedule);
    return this.http.post(this.URL_API, Schedule);
  }

  editSchedule(Schedule: ClassSchedule) {
    return this.http.put(this.URL_API + `/${Schedule.Id}`, Schedule);
  }

  deleteSchedule(Id: number) {
    return this.http.delete(this.URL_API + `/${Id}`);
  }
}
