import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, Validators} from '@angular/forms';
import { OperatorService } from '../../services/operator.service';
import { Operator } from 'src/app/models/operator';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare let M: any;

@Component({
  selector: 'app-formoperator',
  templateUrl: './formoperator.component.html',
  styleUrls: ['./formoperator.component.css'],
  providers: [OperatorService],

})
export class FormoperatorComponent implements OnInit {
  inputData: Operator;
  operatorForm = this.fb.group({
    CC: [0, Validators.required],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    UserName: ['', Validators.required],
    Id_Area: [0, Validators.required],
  });
  constructor(
    public operatorService: OperatorService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormoperatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Operator,
  ) { }

  ngOnInit(): void {
    this.inputData = this.data['operator'];
    console.log(this.inputData);
    this.operatorForm.patchValue(this.inputData);
  }

  updateOperator() {
    if (this.inputData.Id) {
      this.operatorForm.value['Id'] = this.inputData.Id;
      console.log('ingreso en el if', this.operatorForm.value  ),
      this.operatorService.putOperator(this.operatorForm.value)
      .subscribe(res => {console.log(res),
        M.toast({html: 'save succesfully'});
      });
      } else {
        this.operatorService.postOperator(this.operatorForm.value)
        .subscribe(res => {
//          this.resetForm(this.operatorForm.value);
          M.toast({html: 'save succesfully'});
//          this.getOperator();
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
    onNoClick(): void {
      this.dialogRef.close();
    }
}
