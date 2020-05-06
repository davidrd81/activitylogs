import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorService } from '../../services/operator.service';
import { Operator } from 'src/app/models/operator';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormoperatorComponent } from '../formoperator/formoperator.component';

declare var M: any;

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
  providers: [OperatorService],

})
export class OperatorsComponent implements OnInit {
  NewRegOper = false;
    // tabla
    displayedColumns: string[] = ['CC', 'FirtsName', 'LastName', 'Email', 'UserName', 'bottom_edit', 'bottom_delete'];
    dataSource: Operator;
  constructor(
    public operatorService: OperatorService,
    private dialog: MatDialog,
    ) {}
  ngOnInit() {
    this.getOperator();
  }

  addOperator(form) {
    if (form.value.Id) {
      this.operatorService.putOperator(form.value)
      .subscribe(res => {console.log(res);
      });
      } else {
        this.operatorService.postOperator(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'save succesfully'});
          this.getOperator();
        });
      }
    }

  openDialog(): void {
      const dialogRef = this.dialog.open(FormoperatorComponent, {
        width: '350px',
        height: '620px',
        data: {operator: Operator},
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  getOperator() {
    this.operatorService.getOperator()
    .subscribe(res => {
      this.operatorService.Operator = res as Operator[];
      console.log(res);
    });
  }

  resetForm(form) {
    if (form) {
      form.reset();
      this.operatorService.SelectedOperator = new Operator();
    }
  }

/*  editOperator(operator: Operator) {
    this.operatorService.SelectedOperator = operator;
} */
  editOperator(operator: Operator): void {
    const dialogRef = this.dialog.open(FormoperatorComponent, {
      width: '350px',
      height: '620px',
      data: {operator},
    });
    dialogRef.afterClosed().subscribe(result => {
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
