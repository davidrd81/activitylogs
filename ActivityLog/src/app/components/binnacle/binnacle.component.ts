import { Component, OnInit, ViewChild } from '@angular/core';
import { BinnacleService } from '../../services/binnacle.service';
import { Binnacle } from 'src/app/models/binnacle';
import { MatDialog } from '@angular/material/dialog';
import { FormbinnacleComponent } from '../formbinnacle/formbinnacle.component';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource: MatTableDataSource<Binnacle>;
  @ViewChild(MatTable) table: MatTable<Binnacle>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    public binnacleService: BinnacleService,
    private dialog: MatDialog,
    ) {
    }
  ngOnInit() {
    this.renderDataTable();
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormbinnacleComponent, {
      width: '500px',
      height: '800px',
      data: {binnacle: Binnacle},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBinnacle();
    });
  }

  editBinnacle(binnacle: Binnacle): void {
    const dialogRef = this.dialog.open(FormbinnacleComponent, {
      width: '350px',
      height: '620px',
      data: {binnacle},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBinnacle();
      console.log('The dialog was closed');
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

  renderDataTable() {
    this.binnacleService.getBinnacle()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Binnacle>();
      this.dataSource.data = (res as Binnacle[]);
      this.binnacleService.Binnacle = res as Binnacle[];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    },
      error => {console.log('There was an error while retrieving Binnacles!' + error);
    });
  }

  getBinnacle() {
      this.binnacleService.getBinnacle()
      .subscribe(res => {
        this.binnacleService.Binnacle = res as Binnacle[];
      },
        error => {console.log('There was an error while retrieving Binnacles!' + error);
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
