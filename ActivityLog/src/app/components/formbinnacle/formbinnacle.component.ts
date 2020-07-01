import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BinnacleService } from '../../services/binnacle.service';
import { OperatorService } from '../../services/operator.service';
import { ScheduleService } from '../../services/schedule.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// modelos
import { Binnacle } from 'src/app/models/binnacle';
import { Operator } from 'src/app/models/operator';
import { ClassSchedule } from 'src/app/models/schedule';

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
  providers: [BinnacleService, OperatorService, ScheduleService],
})

export class FormbinnacleComponent implements OnInit {

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
    public operatorService: OperatorService,
    public scheduleService: ScheduleService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormbinnacleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Binnacle,
  ) { }

  ngOnInit(): void {
    this.inputData = this.data['binnacle'];
    this.BinnacleById(this.inputData.Id);
    this.getOperator();
    this.getSchedule();
  }


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
        this.binnacleForm.reset();
        M.toast({html: 'save succesfully'});
        this.onNoClick();
      });
    }
  }

  BinnacleById(Id: number) {
  this.binnacleService.BinnacleById(Id)
  .subscribe(res => {
    const binnacleForm = res[0] as Binnacle[];
    this.binnacleForm.patchValue(binnacleForm);
    console.log(this.binnacleForm);
    });
  }

  editBinnacle(binnacle: Binnacle) {
      this.binnacleService.SelectedBinnacle = binnacle;
  }

  getOperator() {
    this.operatorService.getOperator()
    .subscribe(res => {
      this.operatorService.Operator = res as Operator[];
    });
  }

  getSchedule() {
    this.scheduleService.getSchedule()
    .subscribe(res => {
      this.scheduleService.Schedule = res as ClassSchedule[];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
