export class Binnacle {
    constructor( Id = 0, Id_LastOperator = 0, Id_NewOperator = 0, News = '', SpecialProcess = '', PendingProcess = '', Id_Schedule = 0 ) {
        this.Id = Id;
        this.Id_LastOperator = Id_LastOperator;
        this.Id_NewOperator = Id_NewOperator;
        this.News = News;
        this.SpecialProcess = SpecialProcess;
        this.PendingProcess = PendingProcess;
        this.Id_Schedule = Id_Schedule;
    }
    Id: number;
    Id_LastOperator: number;
    Id_NewOperator: number;
    News: string;
    SpecialProcess: string;
    PendingProcess: string;
    Id_Schedule: number;
}