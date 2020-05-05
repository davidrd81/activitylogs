import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BinnacleService } from '../../services/binnacle.service';
import { Binnacle } from 'src/app/models/binnacle';

// declaracion de variables
declare let M: any;

@Component({
  selector: 'app-formbinnacle',
  templateUrl: './formbinnacle.component.html',
  styleUrls: ['./formbinnacle.component.css'],
  providers: [BinnacleService],
})
export class FormbinnacleComponent implements OnInit {

  constructor(
    public binnacleService: BinnacleService,
  ) { }

  ngOnInit(): void {
  }

  addBinnacle(form?: NgForm) {
    if (form.value.Id) {
      this.binnacleService.putBinnacle(form.value)
      .subscribe(res => {console.log(res);
      }); 
    } else {
      this.binnacleService.postBinnacle(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'save succesfully'});
          this.getBinnacle();
        });
        }
  }

  getBinnacle() {
    this.binnacleService.getBinnacle()
    .subscribe(res => {
      this.binnacleService.Binnacle = res as Binnacle[];
      console.log(res);
    });
  }

resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.binnacleService.SelectedBinnacle = new Binnacle();
    }
  }

editBinnacle(binnacle: Binnacle) {
    this.binnacleService.SelectedBinnacle = binnacle;
  }

}
