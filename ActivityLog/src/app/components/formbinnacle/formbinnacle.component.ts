import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { BinnacleService } from '../../services/binnacle.service';
import { Binnacle } from 'src/app/models/binnacle';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// declaracion de variables
declare let M: any;
interface IfOperator {
  value: string;
  viewValue: string;
}
interface Schedule {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formbinnacle',
  templateUrl: './formbinnacle.component.html',
  styleUrls: ['./formbinnacle.component.css'],
  providers: [BinnacleService],
})
export class FormbinnacleComponent implements OnInit {
    // select ultimo operador
    SelectOperator: IfOperator[] = [
      {value: '2', viewValue: 'DAVID RODRIGUEZ'},
      {value: '3', viewValue: 'JUAN PEREZ'},
      {value: '4', viewValue: 'LUIS LEMUS'},
      {value: '5', viewValue: 'JACOB GAMBOA'},
      {value: '1027', viewValue: 'ANDRES CANO'},
    ];

  // select area
  Schedules: Schedule[] = [
    {value: '1', viewValue: '06:00 a 14:00'},
    {value: '2', viewValue: '14:00 a 22:00'},
    {value: '3', viewValue: '22:00 a 06:00'},
    {value: '4', viewValue: '06:00 a 18:00'},
    {value: '5', viewValue: '18:00 a 06:00'},
    {value: '6', viewValue: '08:00 a 18:00'},
  ];

  // formulario
  binnacleForm = this.fb.group({
    Id_LastOperator: [0, Validators.required],
    Id_NewOperator: ['', Validators.required],
    News: ['', Validators.required],
    SpecialProcess: ['', Validators.required],
    PendingProcess: ['', Validators.required],
    Id_Schedule: [0, Validators.required],
  });
  inputData: Binnacle;
  constructor(
    public binnacleService: BinnacleService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormbinnacleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Binnacle,
  ) { }

  ngOnInit(): void {
    this.inputData = this.data['binnacle'];
    console.log(this.inputData);
    this.binnacleForm.patchValue(this.inputData);
  }
/*
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
  */

  addBinnacle() {
    if (this.inputData.Id) {
      this.binnacleForm.value['Id'] = this.inputData.Id;
      console.log('ingreso en el if', this.binnacleForm.value  ),
      this.binnacleService.putBinnacle(this.binnacleForm.value)
      .subscribe(res => {console.log(res),
        M.toast({html: 'save succesfully'});
      });
      } else {
        this.binnacleService.postBinnacle(this.binnacleForm.value)
        .subscribe(res => {
//          this.resetForm(this.operatorForm.value);
          M.toast({html: 'save succesfully'});
//          this.getOperator();
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
  onNoClick(): void {
    this.dialogRef.close();
  }

}
