import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../services/operator.service';
import { Operator } from 'src/app/models/operator';
import { MatDialog } from '@angular/material/dialog';
import { FormoperatorComponent } from '../formoperator/formoperator.component';
import { AreaService } from '../../services/area.service';

declare var M: any;

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
  providers: [OperatorService, AreaService],

})
export class OperatorsComponent implements OnInit {
    // tabla
    displayedColumns: string[] = ['CC', 'FirtsName', 'LastName', 'Email', 'UserName', 'bottom_edit', 'bottom_delete'];
    dataSource: Operator;
  constructor(
    public operatorService: OperatorService,
    public areaService: AreaService,
    private dialog: MatDialog,
    ) {}
  ngOnInit() {
    this.getOperator();
  }
  openDialog(): void {
      const dialogRef = this.dialog.open(FormoperatorComponent, {
        width: '350px',
        height: '620px',
        data: {operator: Operator},
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getOperator();
        console.log('The dialog was closed');
      });
    }

  getOperator() {
    this.operatorService.getOperator()
    .subscribe(res => {
      this.operatorService.Operator = res as Operator[];
    });
  }

  editOperator(operator: Operator): void {
    const dialogRef = this.dialog.open(FormoperatorComponent, {
      width: '350px',
      height: '620px',
      data: {operator},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOperator();
      console.log('The dialog was closed');
    });
  }

// tslint:disable-next-line: variable-name
  deleteOperator(Id: number) {
    if (confirm ('are you sure you want to delete it?')) {
      this.operatorService.deleteOperator(Id)
      .subscribe(res => {
      this.getOperator();
      });
    }
  }

}
