import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BinnacleService } from '../../services/binnacle.service';
import { Binnacle } from 'src/app/models/binnacle';
import { MatDialog } from '@angular/material/dialog';
import { FormbinnacleComponent } from '../formbinnacle/formbinnacle.component';
import { MatTable } from '@angular/material/table';

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
  @ViewChild(MatTable) table: MatTable<Binnacle>;
  constructor(
    public binnacleService: BinnacleService,
    private dialog: MatDialog,
    ) {}
  ngOnInit() {
    this.getBinnacle();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormbinnacleComponent, {
      width: '500px',
      height: '800px',
      data: {binnacle: Binnacle},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.binnacleService.Binnacle = this.binnacleService.Binnacle.concat([]);
      this.table.renderRows();
    });
  }

  getBinnacle() {
      this.binnacleService.getBinnacle()
      .subscribe(res => {
        this.binnacleService.Binnacle = res as Binnacle[];
        console.log(res);
      });
    }

  editBinnacle(binnacle: Binnacle): void {
    const dialogRef = this.dialog.open(FormbinnacleComponent, {
      width: '350px',
      height: '620px',
      data: {binnacle},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.getBinnacle();
    });
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
