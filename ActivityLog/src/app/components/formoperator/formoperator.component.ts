import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorService } from '../../services/operator.service';
import { Operator } from 'src/app/models/operator';

declare var M: any;

@Component({
  selector: 'app-formoperator',
  templateUrl: './formoperator.component.html',
  styleUrls: ['./formoperator.component.css'],
  providers: [OperatorService],

})
export class FormoperatorComponent implements OnInit {

  constructor(
    public operatorService: OperatorService,
  ) { }

  ngOnInit(): void {
  }

  addOperator(form?: NgForm) {
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

}
