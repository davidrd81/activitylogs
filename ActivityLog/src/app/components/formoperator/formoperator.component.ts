import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { OperatorService } from '../../services/operator.service';
import { Operator } from 'src/app/models/operator';
import { AreaService } from '../../services/area.service';
import { ClassArea } from 'src/app/models/area';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare let M: any;

@Component({
  selector: 'app-formoperator',
  templateUrl: './formoperator.component.html',
  styleUrls: ['./formoperator.component.css'],
  providers: [OperatorService, AreaService],

})
export class FormoperatorComponent implements OnInit {
  inputData: Operator;

  operatorForm = this.fb.group({
    CC: [, Validators.required],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    UserName: ['', Validators.required],
    Id_Area: [0, Validators.required],
  });
  constructor(
    public operatorService: OperatorService,
    public areaService: AreaService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormoperatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Operator,
  ) { }

  ngOnInit(): void {
    this.inputData = this.data['operator'];
    console.log('inicio de formulario', this.inputData);
    this.operatorForm.patchValue(this.inputData);
    this.getArea();
  }

  updateOperator() {
    if (this.inputData.Id) {
      this.operatorForm.value['Id'] = this.inputData.Id;
      console.log('ingreso en el if', this.operatorForm.value),
      this.operatorService.putOperator(this.operatorForm.value)
      .subscribe(res => {
        console.log(res);
        M.toast({html: 'save succesfully'});
        this.getOperator();
      });
    } else {
      this.operatorService.postOperator(this.operatorForm.value)
      .subscribe(res => {
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

  getArea() {
    this.areaService.getArea()
    .subscribe(res => {
      this.areaService.Area = res as ClassArea[];
      console.log(res);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
