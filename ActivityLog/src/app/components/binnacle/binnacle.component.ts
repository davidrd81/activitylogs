import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BinnacleService } from '../../services/binnacle.service';
import { Binnacle } from 'src/app/models/binnacle';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormbinnacleComponent } from '../formbinnacle/formbinnacle.component';

declare var M: any;

@Component({
  selector: 'app-binnacle',
  templateUrl: './binnacle.component.html',
  styleUrls: ['./binnacle.component.css'],
  providers: [BinnacleService],
})
export class BinnacleComponent implements OnInit {
  // TABLA
  displayedColumns: string[] = ['operador', 'Schedule', 'News', 'SpecialProcess', 'PendingProcess', 'bottom_edit', 'bottom_delete'];
  dataSource: Binnacle;
  constructor(
    public binnacleService: BinnacleService,
    private dialog: MatDialog,
    ) {}
  ngOnInit() {
    this.getBinnacle();
  }

  openDialog() {
    this.dialog.open(FormbinnacleComponent);
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

// tslint:disable-next-line: variable-name
deleteBinnacle(Id: number) {
    if (confirm ('are you sure you want to delete it?')) {
      this.binnacleService.deleteBinnacle(Id)
      .subscribe(res => {
      this.getBinnacle();
    });
  }
  }
}
