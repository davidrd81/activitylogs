import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorService } from '../../services/operator.service';
import { Operator } from 'src/app/models/operator';

declare var M: any;

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
  providers: [OperatorService],

})
export class OperatorsComponent implements OnInit {
  constructor(public operatorService: OperatorService) {}
  ngOnInit() {
    this.getOperator();
    console.log(OperatorService);
  }

  addOperator(form?: NgForm) {
    console.log(form.value);
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

  getOperator() {
    this.operatorService.getOperator()
    .subscribe(res => {
      this.operatorService.Operator = res as Operator[];
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.operatorService.SelectedOperator = new Operator();
    }
  }

  editOperator(operator: Operator) {
    this.operatorService.SelectedOperator = operator;
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
